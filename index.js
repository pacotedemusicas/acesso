// index.js

// Inclua a inicialização do Firebase
// Certifique-se de que o Firebase está inicializado antes de qualquer outra coisa
// Inclua o conteúdo de firebase-init.js aqui

// Função para processar dados do webhook do Yampi e adicionar ao Firebase
function processYampiWebhook(data) {
  const email = data.customer.email;
  const password = '123456'; // Senha fixa para todos os usuários

  // Adicionar o email e a senha ao Firebase
  const db = firebase.database();
  const usersRef = db.ref('users'); // Referência para os usuários no Firebase

  // Adicionar os dados ao Firebase
  usersRef.push({
    email: email,
    password: password,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  }, function(error) {
    if (error) {
      console.error('Erro ao adicionar usuário ao Firebase:', error);
    } else {
      console.log('Usuário adicionado ao Firebase com sucesso!');
    }
  });
}

// Simular recebimento do webhook do Yampi (somente para exemplo)
function receiveYampiWebhook(data, secret) {
  // Verificar a chave secreta
  const webhookSecret = 'wh_PPzDjhDZrmyClRgB5O3gfwoUCpZYNE6spSs8H'; // Substitua pela sua chave secreta
  const providedSecret = data.secret;

  if (providedSecret !== webhookSecret) {
    console.error('Chave secreta inválida');
    return;
  }

  processYampiWebhook(data);
}

// Recebendo dados do webhook simulado
// Este código simula o recebimento de dados do webhook
var dataExemplo = {
  secret: 'wh_PPzDjhDZrmyClRgB5O3gfwoUCpZYNE6spSs8H', // Substitua pela sua chave secreta
  customer: {
    email: 'exemplo@email.com'
  }
};
receiveYampiWebhook(dataExemplo);

// Inicialização do formulário
const form = {
  email: () => document.getElementById("email"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  passwordRequiredError: () => document.getElementById("password-required-error"),
};

// Outras funções

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    window.location.href = "../teladelogin/pages/acesso.html";
  }
});

function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function login() {
  showLoading();
  firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
  ).then(response => {
    hideLoading();
    window.location.href = "../teladelogin/pages/acesso.html";
  }).catch(error => {
    hideLoading();
    alert(getErrorMessage(error));
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuário não encontrado";
  }
  return error.message;
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
  
  form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  return form.password().value ? true : false;
}
