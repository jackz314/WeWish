'use strict';

const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
const userColl = db.collection('users');
const wishColl = db.collection('wishes');

exports.userCreated = functions.auth.user().onCreate((user) => {
  const uid = user.uid;
  const userRef = db.collection('users').doc(uid);

  await userRef.set({
    name: user.displayName,
    email: user.email,
    profile_pic: user.photoURL
  });
});

exports.addWish = functions.https.onCall((data, context) => {
  // Checking attribute.
  if (!(typeof data.name === 'string') || data.name.length === 0) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
        'one arguments "name" containing the wish name.');
  }
  // Checking that the user is authenticated.
  if (!context.auth) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
        'while authenticated.');
  }

  const wishRef = db.collection('wishes').doc(data.name);

  const wishDoc = await wishRef.get();
  if(!wishDoc.exists){
    await wishRef.set({
      curr_users: 0,
      finished_users: 0,
      in_progress_users: 0
    })
  }

  const uid = context.auth.uid;
  const userWishesColl = db.collection('users').doc(uid).collection('wishes');
  await userWishesColl.doc(data.name).set({
    complete_time: null,
    desc: data.desc,
    difficulty: data.difficulty,
    start_time: admin.firestore.FieldValue.serverTimestamp(),
    joined: false,
    ref: wishRef
  });
});

exports.delWish = functions.https.onCall((data, context) => {
  const name = data.name;
  await db.runTransaction(async (transaction) => {
    const userWishDS = await transaction.get(userColl.doc(context.auth.uid).collection('wishes').doc(name));
    if (!userWishDS.exists) {
      throw new Error("Wish doesn't exist!");
    }
    const finished = userWishDS.data['complete_time'] !== null;
    await userColl.doc(context.auth.uid).collection('wishes').doc(name).delete();
    if (finished) {
      transaction.update(wishColl.doc(name), {
        curr_users: firebase.firestore.FieldValue.increment(-1),
      });
    } else {
      transaction.update(wishColl.doc(name), {
        curr_users: firebase.firestore.FieldValue.increment(-1),
        in_progress_users: firebase.firestore.FieldValue.increment(-1),
      });
    }
    transaction.commit();
  });
});

exports.leaveWish = functions.https.onCall((data, context) => {
  const name = data.name;
  await db.runTransaction(async (transaction) => {
    const userWishDS = await transaction.get(userColl.doc(context.auth.uid).collection('wishes').doc(name));
    if (!userWishDS.exists) {
      throw new Error("Wish doesn't exist!");
    }
    const finished = userWishDS.data['complete_time'] !== null;
    if (finished) {
      transaction.update(wishColl.doc(name), {
        curr_users: firebase.firestore.FieldValue.increment(-1),
      });
    } else {
      transaction.update(wishColl.doc(name), {
        curr_users: firebase.firestore.FieldValue.increment(-1),
        in_progress_users: firebase.firestore.FieldValue.increment(-1),
      });
    }
    transaction.commit();
  });
});

exports.finishWish = functions.https.onCall((data, context) => {
  const name = data.name;
  await db.runTransaction(async (transaction) => {
    const userWishDS = await transaction.get(userColl.doc(context.auth.uid).collection('wishes').doc(name));
    if (!userWishDS.exists) {
      throw new Error("Wish doesn't exist!");
    }
    const finished = userWishDS.data['complete_time'] !== null;
    if (finished) {
      throw new functions.https.HttpsError("failed-precondition", "Wish already finished!");
    } else {
      transaction.update(wishColl.doc(name), {
        finished_users: firebase.firestore.FieldValue.increment(1),
        in_progress_users: firebase.firestore.FieldValue.increment(-1),
      });
    }
    transaction.commit();
  });
});