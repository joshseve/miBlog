function vistaPrevia(){
  var mensaje = document.getElementById("contenido").value;
  document.getElementById("segundo").innerHTML = mensaje
}

function textoGrande(){
  document.getElementById("segundo").style.fontSize = "80px";
}

function textoMediano(){
  document.getElementById("segundo").style.fontSize = "60px";
}

function textoChico(){
  document.getElementById("segundo").style.fontSize = "40px";
}

function cambioColorTexto(){
  var pedirColorHex = prompt("Elige un color de fuente: ");
  pedirColorHex = "#" + pedirColorHex;
  document.getElementById("segundo").style.color = pedirColorHex;
}

function cambioColorFondo(){
  var pedirColorFondo = prompt("Elige un color de fondo : ");
  pedirColorFondo = "#" + pedirColorFondo;
  document.getElementById("segundo").style.backgroundColor = pedirColorFondo;
}

function alinearTextoIzq(){
  document.getElementById("contenido").style.align = "left";
}

function alinearTextoDer(){
  document.getElementById("contenido").style.align = "right";
}

function alinearTextoCen(){
  document.getElementById("contenido").style.align = "center";
}

function enviar() {
    var comentario = document.getElementById("segundo").value;
    var comentarioAPublicar = document.createElement("p");
    comentarioAPublicar.id = comentario;
    comentarioAPublicar.innerHTML = comentario;
    document.getElementById("principal").appendChild(comentarioAPublicar);
}


// Con este codigo intentaba experimentar la Vista previa de TextArea
//$(document).on('change keyup', '#editor', function(e){
//    $('#resultado').html( $(this).val() );
//});