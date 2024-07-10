// index.js

const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const crypto = require('crypto');
const serviceAccount = require('./serviceAccountKey.json'); // Certifique-se de colocar a chave de serviço na mesma pasta

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pacote-de-musicas-default-rtdb.firebaseio.com'
});

const db = admin.firestore();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

function validateWebhookSignature(req, res, next) {
  const signature = req.headers['x-yampi-hmac-sha256'];
  const payload = JSON.stringify(req.body);
  const secret = 'wh_PPzDjhDZrmyClRgB5O3gfwoUCpZYNE6spSs8H';

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const calculatedSignature = hmac.digest('base64');

  if (signature === calculatedSignature) {
    next();
  } else {
    res.status(401).send('Assinatura inválida');
  }
}

app.post('/yampi-webhook', validateWebhookSignature, async (req, res) => {
  try {
    const { email } = req.body.resource;

    if (email) {
      const usuarioRef = db.collection('users').doc();
      await usuarioRef.set({
        email: email,
        dataCadastro: admin.firestore.Timestamp.now()
      });
      console.log(`Usuário ${email} adicionado ao Firestore com sucesso!`);
    } else {
      console.error('Webhook da Yampi recebido sem email válido.');
    }

    res.status(200).send('Webhook recebido com sucesso.');
  } catch (error) {
    console.error('Erro ao processar webhook da Yampi:', error);
    res.status(500).send('Erro ao processar webhook da Yampi.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
