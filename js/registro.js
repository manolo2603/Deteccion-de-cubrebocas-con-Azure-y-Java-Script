function newUserRegister(){
    var email=document.getElementById("emailnu").value
    var password=document.getElementById("passwordnu").value
 
    if(email=="" || password==""){
      toastr.warning('Verifique sus datos','Alerta')

    }else{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert("Usuario Creado con exito")
        window.location.href = "index.html"
        // ...
      })
      .catch((error) => {
        toastr.error('Verifica tus datos', 'Upss!') 
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    }
}