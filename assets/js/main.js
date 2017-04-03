function Imagen(promo, ciudad, nombre){
  this.promo = promo;
  this.ciudad = ciudad;
  this.nombre = nombre;
  this.url = 'assets/img/'+ this.promo + '-' + this.ciudad + '/' + this.nombre + '.jpg'

  this.addImagen = function (){
    var divImag = document.getElementById('div-images');
    var imag = document.createElement('img');
    imag.setAttribute('src',this.url);
    imag.setAttribute('alt', this.nombre);
    var clase = this.promo + this.ciudad;
    imag.setAttribute('class', clase);
    divImag.appendChild(imag);
  }
}

var imagen4taChile1 = new Imagen('4', 'chile', 'anais-araya');
imagen4taChile1.addImagen();
