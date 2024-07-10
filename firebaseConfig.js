// firebaseConfig.js

const admin = require('firebase-admin');
const serviceAccount = require('C:\Users\Otavio\Documents\meu-projeto-node\serviceAccountKey.json'); // Substitua pelo caminho para o seu arquivo serviceAccountKey.json

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pacote-de-musicas-default-rtdb.firebaseio.com' // Substitua pelo URL do seu projeto Firebase
});

const db = admin.firestore();

module.exports = db;
