function beta(){
    // var data = { City: 'Moscow', Age: 25 };
    //     $.ajax({
    //             url : 'https://reconocimientocubrebocas-default-rtdb.firebaseio.com/alumno.json',
    //             data : data, 
    //             method : 'POST', //en este caso
    //             dataType : 'json',
    //             success : function(response){
    //                    console.log("Success");
    //             },
    //             error: function(error){
    //                    console.log(error);
    //             }
    //     });
    const fechas = new Date();
const mesActual = fechas.getMonth() + 1; 
//2021-11-27
//var fechahoy= fechas.getDate()+"-"+mesActual+"-"+fechas.getFullYear()
var fechahoy=fechas.getFullYear()+"-"+mesActual+"-"+fechas.getDate()

    var referencia = databaseService.ref('alumno').child('2021-11-27/'+'18TE0153');
    referencia.update({
        
        horaEntrada:""+fechas.getHours() + ':' + fechas.getMinutes() + ':' + fechas.getSeconds(),
        cubreBocas:"no"
    })
            .then(function() {
                console.log('dato almacenado correctamente');
                //alert("ok")
            })
            .catch(function(error) {
                alert("error")
                console.log('detectado un error', error);
            });

            

}

// var referencia = databaseService.ref('alumno').child('2021-11-27/'+'18TE0153');
// referencia.remove()
//         .then(function() {
//             console.log('Exito');
//             //alert("ok")
//         })
//         .catch(function(error) {
//             alert("error")
//             console.log('detectado un error', error);
//         });

// function borrar(noControl){
//     const fechas = new Date();
// const mesActual = fechas.getMonth() + 1; 
// //2021-11-27
// //var fechahoy= fechas.getDate()+"-"+mesActual+"-"+fechas.getFullYear()
// var fechahoy=fechas.getFullYear()+"-"+mesActual+"-"+fechas.getDate()
// var id=fechahoy+"/"+noControl
// //var noControl=document.getElementById("noControl").value
// var url = "https://reconocimientocubrebocas-default-rtdb.firebaseio.com/alumno/"+id+".json";
//   //  var auxnoControl=noControl.toUpperCase()
   
//     fetch(url, {
//         method: 'DELETE',
//         mode: 'cors',
        
//     }).then(function(response) {
//         console.log('Eliminado correc');
//     })
//     .catch(function(error) {
//         alert("error")
//         console.log('detectado un error', error);
//     });
// }