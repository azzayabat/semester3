const functions = require('firebase-functions');

exports.myFunction = functions.firestore
  .document('order/{documentId}')
  .onCreate((snapshot, context) => {
    console.log('data', snapshot.data());
    console.log('context', context.params.documentId);
  });
