'use strict';

const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

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
      desc: data.name,
      finished_users: 0,
      in_progress_users: 0
    })
  }

  const uid = context.auth.uid;
  const userWishesColl = db.collection('users').doc(uid).collection('wishes');
  await userWishesColl.doc(data.name).set({
    completed: false,
    joined: false,
    nickname: data.name,
    ref: wishRef
  });
});