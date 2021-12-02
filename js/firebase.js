var firebaseConfig = {
  apiKey: "AIzaSyB55P1yaxNekhKmjXA6qeuAimqBNNCGWro",
  authDomain: "reconocimientocubrebocas.firebaseapp.com",
  projectId: "reconocimientocubrebocas",
  storageBucket: "reconocimientocubrebocas.appspot.com",
  messagingSenderId: "738479105018",
  appId: "1:738479105018:web:867536d48023b389e37a43",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var urlA;
var cont=0;

function uploadFile(image) {
  var hoy = new Date();
  var storageRef = firebase.storage().ref();
  var message = image;
  var ref = storageRef.child("img"+hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear()+'-'+hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds());
  ref.putString(message, 'data_url').then(function(snapshot) {
  snapshot.ref.getDownloadURL().then(function (url) {
    console.log(url);
    urlA=url;
    sendToAzure(urlA)
    
  });
  console.log('Uploaded a data_url string!');
});

}
//

function sendToAzure(url) {
  console.log(url);

  $.ajax({
      url: "https://usocubrebocasa-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/a66591b6-0b95-4435-b55b-c1bd92faa11e/detect/iterations/Iteration2/url",
      beforeSend: function(xhrObj){
          xhrObj.setRequestHeader("Content-Type","application/json");
          xhrObj.setRequestHeader("Prediction-key","0b4266333d464a3e875eb0e446a55aaa");
      },
      type: "POST",
      data: '{"Url":"' + url + '"}',
  })

  .done(function(data) {
   
      var majorElement = "";
      var majorPrediction = 0;
      let canvasImage=document.getElementById('canvasImagen')
      let ctx= canvasImage.getContext('2d')
      let imagenLogoJS=document.createElement('img')
      imagenLogoJS.src=url
      imagenLogoJS.addEventListener('load',()=>{
    ctx.drawImage(imagenLogoJS, 0,0,350,350)
    if((parseFloat(data.predictions[0].probability)*100)>60){
        ctx.strokeStyle = 'blue';
        ctx.strokeRect((data.predictions[0].boundingBox.left*100)*3.4,(data.predictions[0].boundingBox.top*100)*3.6,(data.predictions[0].boundingBox.width*100)*3.6,(data.predictions[0].boundingBox.height*100)*2.5)
        toastr.success('Si traes cubrebocas','Aprobado')
      console.log("hola")
        postear("si")
       }else{
        toastr.error('No se detecto cubrebocas','Denegado')
        postear("no")
       }

      });
  })
}

function take_snapshot(){
  var textNoControl=document.getElementById("noControl").value

  if(textNoControl==""){
    toastr.warning('Se requiere un numero de control','Alerta')

  }else{
    Webcam.snap(function(data_uri){
      $(".results").append('<img src="'+data_uri+'"/>')

    var message = data_uri;
      uploadFile(data_uri)
    })
  }


}


const HORA = () => {

  const ID_ELEMENT = document.getElementById("hora");

  const CERO = n => n = n < 10 ? "0"+n: n;
  let hora, minutos, segundos, meridiano;

  const RELOJ = () => {
      const DATE = new Date();
      hora = DATE.getHours();
      minutos = DATE.getMinutes();
      segundos = DATE.getSeconds();

      meridiano = hora < 12 ? "am" : "pm";

      hora = hora == 0 ? 12 : hora || hora > 12 ? hora -= 12 : hora;

      return (
          ID_ELEMENT.textContent = "Hora de sistema "+
          `${CERO(hora)}:${CERO(minutos)}:${CERO(segundos)} ${meridiano}`
      );
  }

  return setInterval(RELOJ, 1000);
}

document.addEventListener("DOMContentLoaded", HORA);



