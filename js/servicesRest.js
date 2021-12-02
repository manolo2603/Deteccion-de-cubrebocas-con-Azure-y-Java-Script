var databaseService = firebase.database();

const fechas = new Date();
const mesActual = fechas.getMonth() + 1;

var fechahoy 
if(fechas.getDate()<10){
    console.log("0"+fechas.getDate())
    fechahoy= fechas.getFullYear() + "-" + mesActual + "-0" + fechas.getDate()
}else{
    fechahoy= fechas.getFullYear() + "-" + mesActual + "-" + fechas.getDate()
}
var fechaURL


function postear(cb) {
    
    var noControl = document.getElementById("noControl").value
    var auxnoControl = noControl.toUpperCase()
    var id = fechahoy;
    var url = "https://reconocimientocubrebocas-default-rtdb.firebaseio.com/alumno/" + id + ".json";

    var data = {
        noControl: auxnoControl,
        horaEntrada: "" + fechas.getHours() + ':' + fechas.getMinutes() + ':' + fechas.getSeconds(),
        cubreBocas: "" + cb
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log('dato almacenado correctamente');
    })
        .catch(function (error) {
            alert("error")
            console.log('detectado un error', error);
        });
}



function cargarDatos() {
    var contador = 0
    var temporal = document.getElementById("fechaBusqueda").value
    console.log(temporal)
    URL_BASE = "https://reconocimientocubrebocas-default-rtdb.firebaseio.com/alumno/"
    fechaURL = temporal
    URLCOMPUESTA = URL_BASE + fechaURL + ".json"

    console.log(URLCOMPUESTA)

    if (temporal == "") {
        toastr.warning('Debe insertar fecha', 'Alerta')
    } else {
        limpiarMain()
        $.ajax({
            url: URLCOMPUESTA,
            type: 'GET',
            success: function (respuesta) {
                console.log(respuesta);
                if (respuesta == null) {
                    toastr.warning('No se encontraron registros', 'Alerta')
                } else {
                    var result = [];

                    for (var i in respuesta) {
                        result.push([i, respuesta[i]]);
                    }
                    $(".datos").append('<table class="table">' +
                        ' <thead>' +
                        '<tr>' +

                        ' <th scope="col">No. Control</th>' +
                        '<th scope="col">Hora entrada</th>' +
                        ' <th scope="col">Cubrebocas</th>' +
                        ' <th scope="col">Editar</th>' +
                        ' <th scope="col">Eliminar</th>' +
                        '</tr>' +
                        '</thead>' + '<tbody id="tbl">')

                    result.forEach(element => {
                        contador += 1
                        var auxid = "u" + contador
                        var temporal2 = element[0].toString()
                        $("#tbl").append(
                            '<tr id="' + auxid + '">' +

                            ' <td>' + element[1].noControl + '</td>' +
                            ' <td>' + element[1].horaEntrada + '</td>' +
                            '<td>' + element[1].cubreBocas + '</td>' +
                            '<td>' + '<button class="btn btn-warning" type="button" onclick="editar(`' + temporal2 + '`' + ',`' + fechaURL + '`' + ',`' + element[1].noControl + '`' + ',`' + element[1].horaEntrada + '`' + ',`' + element[1].cubreBocas + '`' + ')" >Editar</button>' + '</td>' +
                            '<td>' + '<button class="btn btn-primary" type="button" onclick="borrar(`' + temporal2 + '`' + ',`' + fechaURL + '`' + ',`' + auxid + '`' + ')" >Borrar</button>' + '</td>' +
                            '</tr>')

                    })

                    $(".datos").append('</tbody>' + '</table>')

                }

            },
            error: function () {
                console.error("No es posible completar la operación");
            }
        });
    }
}


function borrar(identificador, fecha, item) {
    $("#" + item).remove()
    var id = fecha + "/" + identificador

    var url = "https://reconocimientocubrebocas-default-rtdb.firebaseio.com/alumno/" + id + ".json";

    fetch(url, {
        method: 'DELETE',
        mode: 'cors',

    }).then(function (response) {
        toastr.success('Eliminado', 'Alerta')
        console.log('Eliminado correc');
    })
        .catch(function (error) {
            alert("error")
            console.log('detectado un error', error);
        });


}


function actualizar(identificador, fecha, numeroControl, horaEntrada, cubreBocas) {

    var noControl = numeroControl
    var auxnoControl = noControl.toUpperCase()
    var id = fecha + "/" + identificador;
    var url = "https://reconocimientocubrebocas-default-rtdb.firebaseio.com/alumno/" + id + ".json";

    var data = {
        noControl: auxnoControl,
        horaEntrada: "" + horaEntrada,
        cubreBocas: "" + cubreBocas
    }
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log('Actualizado');
        toastr.success('Actualizado', 'Alerta')
        limpiarMain()
    })
        .catch(function (error) {
            //alert("error")
            toastr.warning('Error', 'Alerta')
            console.log('detectado un error', error);
        });


}
