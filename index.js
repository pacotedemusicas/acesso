firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "pages/acesso.html";
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
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(response => {
        hideLoading();
        window.location.href = "pages/acesso.html";
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
    return email && validateEmail(email);
}

function isPasswordValid() {
    return form.password().value ? true : false;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
};

function showLoading() {
    // Adicione a lógica para mostrar um indicador de carregamento
}

function hideLoading() {
    // Adicione a lógica para esconder o indicador de carregamento
}

function validateEmail(email) {
    // Adicione a lógica para validar o email
    return true; // Substitua isso com a validação real
}
