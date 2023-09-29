const form = {
    user: () => document.getElementById("idInputEmail"),
    senha: () => document.getElementById("idInputPassword"),
}


const btLogin = document.getElementById("idLogin");

btLogin.addEventListener("click", function(){
    
    firebase.auth().signInWithEmailAndPassword(form.user().value, form.senha().value).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        console.log('error')
        alert(getErrorMessage(error));
    });


})
function cadastro(){
    window.location.href="cadastro.html"
}
function cadastrar(){
    
const usuario = form.user().value;
const password = form.senha().value;

firebase.auth().createUserWithEmailAndPassword(
    usuario, password
).then(() => {
   
    window.location.href ="login.html";
}).catch(error => {
    
    alert(getErrorMessage(error));
})
}
function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já está em uso";
    }
    return error.message;
}