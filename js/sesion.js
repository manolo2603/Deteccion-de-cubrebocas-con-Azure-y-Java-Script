isLogin()
function isLogin(){
  if(!localStorage.getItem('sesion')){
    //alert("Hola")
   // alert("Debes iniciar sesion Primero")
    window.location.href = "index.html"
  }else{
    
  }
}
