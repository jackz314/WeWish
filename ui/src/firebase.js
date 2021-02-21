// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDnGW8SPLYZ_TgaYVXxkiX4rp6YnYbzEE",
  authDomain: "wewish.firebaseapp.com",
  projectId: "wewish",
  storageBucket: "wewish.appspot.com",
  messagingSenderId: "371870672394",
  appId: "1:371870672394:web:a1609b47563393f5f7e1f3",
  measurementId: "G-D7RQ2S0B8V"
};

export let firebaseApp;
if (!firebase.apps.length) {
  // Initialize Firebase
  firebaseApp = firebase.initializeApp(firebaseConfig);
  console.log(firebase.apps);
  firebase.analytics();
}else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}

const funcs = firebase.functions();

const db = firebase.firestore();
const userColl = db.collection('users');
const wishColl = db.collection('wishes');

export let user = firebase.auth().currentUser;

// test mode
if(user === null){
  user = {uid: 'sample_user_1'}
}

const getUserWishRef = name => userColl.doc(user.uid).collection('wishes').doc(name);

export const addWish = async(name, description, difficulty) => {
  console.log("Adding wish...", name);
  await funcs.httpsCallable("addWish")({
    name: name, desc: description, difficulty: difficulty
  });
};

export const delWish = async(name) => {
  await funcs.httpsCallable("delWish")({name: name});
};

// data is a dictionary of fields to update
export const updateWish = async(name, data) => {
  await wishColl.doc(name).update(data);
};

//list of wish objects
export const getWishes = async() => {
  const snapshot = await userColl.doc(user.uid).collection("wishes").get();
  let documentData = await Promise.all(snapshot.docs.map(async doc => {
    const data = doc.data();
    data.name = doc.id;
    data.ref = (await data.ref.get()).data();
    return data;
  }));
  console.log(documentData);
  return documentData;
};

//list of joined wish objects
export const getJoinedWishes = async() => {
  const snapshot = await userColl.doc(user.uid).collection("wishes").where('joined', '==', true).get();
  let documentData = await Promise.all(snapshot.docs.map(async doc => {
    const data = doc.data();
    data.name = doc.id;
    data.ref = (await data.ref.get()).data();
    return data;
  }));
  console.log(documentData);
  return documentData;
};

export const joinWish = async(name) => {
  const batch = db.batch();
  await batch.update(getUserWishRef(name), {joined: true})
    .update(wishColl.doc(name), {
      curr_user: firebase.firestore.FieldValue.increment(1),
      in_progress_user: firebase.firestore.FieldValue.increment(1),
    }).commit();
};

export const leaveWish = async(name) => {
  await funcs.httpsCallable("leaveWish")({name: name});
};

export const finishWish = async(name) => {
  await funcs.httpsCallable("finishWish")({name: name});
};

// add Accomplishment post
export const addCompletedPost = async (wish) => {
  console.log("addCompletedPost")
  var usr = userColl.doc(user.uid)
  wishColl.doc(wish).collection('posts').add({
    title: "",
    text: "I accomplished this!",
    time: firebase.firestore.FieldValue.serverTimestamp(),
    user: usr
  })
}

/*
 * Get all posts in the Wish group
 * return value:
 * [{time: , name: , profile_pic: , text: }]
 */
export const getPosts = async (wish) => {
  console.log("getPosts")
  var post = await wishColl.doc(wish).collection('posts').orderBy('time').get()
  var post_list = []
  post.forEach(async x => {
    var time = x.get("time").toDate()
    var text = x.get("text")
    var usrRef = await x.get("user").get()
    var name = usrRef.get("name")
    var profile_pic = usrRef.get("profile_pic")
    post_list.unshift({"time": time, "text": text, "name": name, "profile_pic": profile_pic})
  })
  console.log(post_list)
  return post_list
}
