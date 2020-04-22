import firebase from 'firebase';



var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://x-project-1.firebaseio.com"
});

export default firebase;