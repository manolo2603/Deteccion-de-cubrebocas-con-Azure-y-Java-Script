var userSesion

function autentificar(){
    console.log("Hola")

    var usuario=document.getElementById("email").value
    var contrasena=document.getElementById("password").value

    // var usuario=event.target.email.value
    // var contrasena=event.target.password.value
    //alert(""+ usuario+contrasena)
   // haceLogin(usuario, contrasena)
if(usuario=="" || contrasena==""){
  toastr.warning('Verifique sus datos','Alerta')
}else{
  firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
  .then((userCredential) => {
    // Signed in
    
    var user = userCredential.user;
  //alert("Inicio Sesion "+user)
  //userSesion=usuario
  localStorage.setItem('sesion', usuario);
  window.location.href = "home.html"
    
    
    // ...
  })
  .catch((error) => {
    toastr.error('Verifica tus datos', 'Upss!')
     // alert("Verifique sus datos")
    var errorCode = error.code;
    var errorMessage = error.message;
    //alert("Verifique sus datos " + errorMessage)
  });

}




}

