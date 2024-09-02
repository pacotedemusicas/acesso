firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "https://pacotedemusicas.netlify.app/pages/acesso.html";
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
        window.location.href = "https://pacotedemusicas.netlify.app/pages/acesso.html";
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

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.setAttribute("d", "M12 4.5c-4 0-7.5 2.5-9 6s-2.5 7.5 0 10 5.5 5 9 5 7.5-2.5 9-6 2.5-7.5 0-10-5.5-6-9-6zm0 10c-1.5 0-3-1.5-3-3s1.5-3 3-3 3 1.5 3 3-1.5 3-3 3z"); // Olho aberto
    } else {
        passwordInput.type = "password";
        eyeIcon.setAttribute("d", "M12 6.5c-2.75 0-5.5 1.5-7 4s-1.5 5.5 0 7 4.25 4 7 4 5.5-1.5 7-4 1.5-5.5 0-7-4.25-4-7-4zm0 6.5c-1.5 0-3-1.5-3-3s1.5-3 3-3 3 1.5 3 3-1.5 3-3 3zm0-8c-3.5 0-6.5 2-8 5s-2 6.5 0 9 4.5 5 8 5 6.5-2 8-5 2-6.5 0-9-4.5-5-8-5z"); // Olho fechado
    }
}
