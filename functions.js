//variable inicial para la cantidad de figuras
let cant = 3;

//funcion para el tamano de las figuras
function tamanofiguras(){
let tam = 400/cant;// tamaño maximo se divide en la cantidad q se van a dibujar 
  return tam; //guarda el resultado que da la funcion 
}

function mousePressed(){
cant =cant + 1;
}

//funcion con parametro que no retonra valor, se usa apra reinicar al precionar una tecla
function reiniciar(valor){
 if (keyIsPressed) {  
//se cambia keyPressed que se uso en processing para p5js se uso keyispressed ya que esta es una funcio boolean que al presionar una tecla pasa a ser true y cumple la condicion
       cant = valor;// vuelve valor iniciar 
  }
}

//funcion que retorna con parametros
function distancia(mx,my,px,py){ //mide la distancia del mouse al centro de la grilla
  let dis = dist(mx,my,px,py);
  return dis;
}

//Funcion para los cuadrados y los circulos
function cuadradosycirculos(){    //se crea la funcion
  
let tam = tamanofiguras();
//ciclo for
  for(let x=0;x<cant;x++){    // repeticiones segun la cantidad  la variable en x donde se va dibujar 
    for(let y=0;y<cant;y++){    // valor en donde se va dibujar la figura en y 
      for(let j =0; j<2 ; j++){  // figuras intercaladas en colores dependiendo del valor que tenga j 
        if((x + y) % 2 == 0){ // suma del valor en x y y % modulo
          // Alternar colores dependiendo de la posición (x, y)
          if(j == 0){
            fill(6,13,29); // Color para los cuadrados
            rectMode(CENTER);
            rect((x*tam)+(tam/2)+400,(y*tam)+(tam/2),tam,tam);
            let distan= distancia(mouseX, mouseY, 600, 200); //la funcion distancia y le damos la poscicion del mouse al centro de la cuadricula
            let camtam = map(distan, 400, 800, 0, tam); // cambian de tamano
            fill(37,40,183); // Color para los círculos
            ellipse ((x*tam)+(tam /2)+400,(y*tam)+(tam/2),camtam,camtam);
          } else if(j == 1){
            fill(37,40,183); // Color para los cuadrados
            rectMode(CENTER);
            rect((x*tam)+(tam /2)+400,(y*tam)+(tam/2),tam,tam);
            let distan = dist(mouseX, mouseY, 600, 200);
            let camtam = map(distan, 400, 800, 0, tam);
            fill(6,13,29); // Color para los círculos
            ellipse ((x*tam)+(tam /2)+400,(y*tam)+(tam/2),camtam,camtam);
          }
        } else {
          // Alternar colores en las posiciones alternas
          if(j == 0){
            fill(37,40,183); // Color para los cuadrados
            rectMode(CENTER);
            rect((x*tam)+(tam /2)+400,(y*tam)+(tam/2),tam,tam);
            let distan = dist(mouseX, mouseY, 600, 200);
            let camtam = map(distan, 400, 800, 0, tam);
            fill(6,13,29); // Color para los círculos
            ellipse ((x*tam)+(tam /2)+400,(y*tam)+(tam/2),camtam,camtam);
          } else if(j == 1){
            fill(6,13,29); // Color para los cuadrados
            rectMode(CENTER);
            rect((x*tam)+(tam /2)+400,(y*tam)+(tam/2),tam,tam);
            let distan = dist(mouseX, mouseY, 600, 200);
            let camtam = map(distan, 400, 800, 0, tam);
            fill(37,40,183); // Color para los círculos
            ellipse ((x*tam)+(tam /2)+400,(y*tam)+(tam/2),camtam,camtam);
          }
        }
      }
    }
  }

}
