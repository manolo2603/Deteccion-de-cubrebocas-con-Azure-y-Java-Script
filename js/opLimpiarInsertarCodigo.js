function limpiarMain(){
  $(".datos").empty()
  $(".datos").append('<div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">'+

  '<input class="form-control me-2" type="date" placeholder="Fecha" id="fechaBusqueda" aria-label="fecha">'+
     ' <button class="btn btn-outline-success" type="button" onclick="cargarDatos()">Buscar</button>'+
'</div>')
//cargarDatos()
}

function editar(identificador, fecha, numeroControl, horaEntrada, cubreBocas){
 //console.log(identificador)
  //   console.log(numeroControl)
  //   console.log(horaEntrada)
  //   console.log(cubreBocas)
  //   console.log(fecha)
    $(".datos").empty()
    $(".datos").append('<div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">'+
    '<label for="noControl">Numero de Control: </label>'+
    '<input type="text" name="noControl" class="form-control" id="noControl" value="'+numeroControl+'" >'+     
  '</div>')
  $(".datos").append('<div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">'+
  '<label for="horaE">Hora de entrada </label>'+
  '<input type="text" name="horaE" class="form-control" id="horaE" value="'+horaEntrada+'" readonly="readonly">'+     
'</div>')
$(".datos").append('<div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">'+
  '<label for="cubreB">¿Porta cubrebocas? </label>'+
  '<input type="text" name="cubreB" class="form-control" id="cubreB" value="'+cubreBocas+'">'+     
'</div>')
$(".datos").append('<div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">'+
  '<label for="fecha">Fecha ingreso </label>'+
  '<input type="text" name="fecha" class="form-control" id="fecha" value="'+fecha+'" readonly="readonly">'+     
'</div>')

$(".datos").append(' <div class="col text-center ">'+
  '<button class="btn btn-outline-success" type="button" onclick="redirigir(`'+identificador+'`)">Guardar</button>'+
  '</div>')

  //' <button class="btn btn-outline-success" type="button" onclick="cargarDatos()">Buscar</button>'+s
  

}

function redirigir(identificadorR){
var auxnoControl=document.getElementById("noControl").value
var auxcubreBocas=document.getElementById("cubreB").value
var auxhoraEntrada=document.getElementById("horaE").value
var auxfecha=document.getElementById("fecha").value
// console.log(auxnoControl)
// console.log(auxcubreBocas)
// console.log(auxhoraEntrada)
// console.log(auxfecha)
// console.log(identificadorR)
actualizar(identificadorR, auxfecha, auxnoControl, auxhoraEntrada, auxcubreBocas)
}


