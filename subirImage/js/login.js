window.onload = inicializar;
var formAutenticacion;

function inicializar() {
  formAutenticacion = document.getElementById("form-autentication");
  formAutenticacion.addEventListener("submit", autentificar, false);
}

function autentificar(event) {
  console.log(event.target.email.value);

  // var usuario=document.getElementById("email").value
  // var contrasena=document.getElementById("password").value

  var usuario = event.target.email.value;
  var contrasena = event.target.password.value;
  //alert(""+ usuario+contrasena)
  // haceLogin(usuario, contrasena)
  firebase
    .auth()
    .signInWithEmailAndPassword(usuario, contrasena)
    .then((userCredential) => {
      // Signed in
      alert("Inicio Sesion ");
      var user = userCredential.user;

      // ...
    })
    .catch((error) => {
      alert("Verifique sus datos");
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Verifique sus datos " + errorMessage);
    });
}
