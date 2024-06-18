firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "pages/acesso.html";
    }
})
