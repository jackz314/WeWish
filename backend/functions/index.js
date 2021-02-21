/* eslint-disable max-len */
"use strict";

const functions = require("firebase-functions");

// The admin Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
const userColl = db.collection("users");
const wishColl = db.collection("wishes");

exports.userCreated = functions.auth.user().onCreate(async (user) => {
  const uid = user.uid;
  const userRef = db.collection("users").doc(uid);

  await userRef.set({
    name: user.displayName,
    email: user.email,
    profile_pic: user.photoURL,
  });
});

exports.addWish = functions.https.onCall(async (data, context) => {
  // Checking attribute.
  if (!(typeof data.name === "string") || data.name.length === 0) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError("invalid-argument", "The function must be called with " +
      "one arguments \"name\" containing the wish name.");
  }
  // Checking that the user is authenticated.
  if (!context.auth) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError("failed-precondition", "The function must be called " +
      "while authenticated.");
  }

  const wishRef = db.collection("wishes").doc(data.name);

  const wishDoc = await wishRef.get();
  if (!wishDoc.exists) {
    await wishRef.set({
      curr_users: 0,
      finished_users: 0,
      in_progress_users: 0,
    });
  }

  // const uid = context.auth ? context.auth.uid : "sample_user_1";
  const uid = context.auth.uid;
  const userWishesColl = db.collection("users").doc(uid).collection("wishes");
  await userWishesColl.doc(data.name).set({
    complete_time: null,
    desc: data.desc,
    difficulty: data.difficulty,
    start_time: admin.firestore.FieldValue.serverTimestamp(),
    joined: false,
    ref: wishRef,
  });
});

exports.delWish = functions.https.onCall(async (data, context) => {
  const name = data.name;
  await db.runTransaction(async (transaction) => {
    const userWishDS = await transaction.get(userColl.doc(context.auth.uid).collection("wishes").doc(name));
    if (!userWishDS.exists) {
      throw new Error("Wish doesn't exist!");
    }
    const finished = userWishDS.get("complete_time");
    transaction.delete(userColl.doc(context.auth.uid).collection("wishes").doc(name));
    if (finished) {
      transaction.update(wishColl.doc(name), {
        curr_users: admin.firestore.FieldValue.increment(-1),
      });
    } else {
      transaction.update(wishColl.doc(name), {
        curr_users: admin.firestore.FieldValue.increment(-1),
        in_progress_users: admin.firestore.FieldValue.increment(-1),
      });
    }
    return userWishDS;
  });
});

exports.joinWish = functions.https.onCall(async (data, context) => {
  const name = data.name;
  const batch = db.batch();
  await batch.update(userColl.doc(context.auth.uid).collection("wishes").doc(name), {joined: true})
      .update(wishColl.doc(name), {
        curr_users: admin.firestore.FieldValue.increment(1),
        in_progress_users: admin.firestore.FieldValue.increment(1),
      }).commit();
});

exports.leaveWish = functions.https.onCall(async (data, context) => {
  const name = data.name;
  await db.runTransaction(async (transaction) => {
    const userWishDS = await transaction.get(userColl.doc(context.auth.uid).collection("wishes").doc(name));
    if (!userWishDS.exists) {
      throw new Error("Wish doesn't exist!");
    }
    transaction.update(userColl.doc(context.auth.uid).collection("wishes").doc(name), {joined: false});
    if (userWishDS.get("complete_time")) {
      transaction.update(wishColl.doc(name), {
        curr_users: admin.firestore.FieldValue.increment(-1),
      });
    } else {
      transaction.update(wishColl.doc(name), {
        curr_users: admin.firestore.FieldValue.increment(-1),
        in_progress_users: admin.firestore.FieldValue.increment(-1),
      });
    }
    return userWishDS;
  });
});

exports.finishWish = functions.https.onCall(async (data, context) => {
  const name = data.name;
  await db.runTransaction(async (transaction) => {
    const userWishDS = await transaction.get(userColl.doc(context.auth.uid).collection("wishes").doc(name));
    console.log(userWishDS);
    if (!userWishDS.exists) {
      throw new Error(`Wish doesn't exist! ${context.auth.uid}`);
    }
    if (userWishDS.get("complete_time")) {
      throw new functions.https.HttpsError("failed-precondition", "Wish already finished!");
    } else {
      transaction.update(userColl.doc(context.auth.uid).collection("wishes").doc(name), {complete_time: admin.firestore.FieldValue.serverTimestamp()});
      transaction.update(wishColl.doc(name), {
        finished_users: admin.firestore.FieldValue.increment(1),
        in_progress_users: admin.firestore.FieldValue.increment(-1),
      });
    }
    return userWishDS;
  });
});
