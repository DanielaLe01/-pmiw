//funcion para cambiar de fondo de pantalla
function cargarFondo(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}
function cargarotrocamino(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}
//funcion para los textos de la historia
function estilotexto(){
  fill(255);
  textSize(20);
}
//funcion para crear la zona donde s emuestra el texto de la historia
function rectangulotexto(){
  /*Rectangulo para textos*/
    fill(0);
    rect(0,350,width,130);
}

//funcion para crear lso botones con un hover
function crearBoton(bx, by, ban, bal) {
  if (hoverBton(bx, by, ban, bal)) {
    fill(0);
  } else {
    fill(185, 49, 20);
  }
  rect(bx, by, ban, bal);
}

//funcion para validar si el mouse se encuentra dentro del boton
function hoverBton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}
