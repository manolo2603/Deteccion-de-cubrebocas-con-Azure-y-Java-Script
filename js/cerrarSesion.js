function cerrarSesion(){
    firebase.auth().signOut().then(function() {
        localStorage.removeItem('sesion');
      window.location.href = "index.html"
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }