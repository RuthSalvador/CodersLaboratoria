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

var imagen4taChile2 = new Imagen('4', 'chile', 'andrea-miranda');
imagen4taChile2.addImagen();

var imagen4taChile3 = new Imagen('4', 'chile', 'berenisse-rios');
imagen4taChile3.addImagen();

var imagen4taChile4 = new Imagen('4', 'chile', 'caterina-da-silva');
imagen4taChile4.addImagen();

var imagen4taChile5 = new Imagen('4', 'chile', 'daniela-sanchez');
imagen4taChile5.addImagen();

var imagen4taChile6 = new Imagen('4', 'chile', 'francisca-ojeda');
imagen4taChile6.addImagen();

var imagen4taChile7 = new Imagen('4', 'chile', 'katerine-sandoval');
imagen4taChile7.addImagen();


var imagen5taLima1 = new Imagen('5', 'lima', 'andrea-cabrera');
imagen5taLima1.addImagen();

var imagen5taLima2 = new Imagen('5', 'lima', 'ariadna-izaguirre');
imagen5taLima2.addImagen();

var imagen5taLima3 = new Imagen('5', 'lima', 'carito-juarez');
imagen5taLima3.addImagen();

var imagen5taLima4 = new Imagen('5', 'lima', 'cristy-castro');
imagen5taLima4.addImagen();

var imagen5taLima5 = new Imagen('5', 'lima', 'karol-orrillo');
imagen5taLima5.addImagen();

var imagen5taLima6 = new Imagen('5', 'lima', 'paola-ortiz');
imagen5taLima6.addImagen();

var imagen5taLima7 = new Imagen('5', 'lima', 'teresa-lara');
imagen5taLima7.addImagen();


var imagen6taLima1 = new Imagen('6', 'lima', 'arantza-burga');
imagen6taLima1.addImagen();

var imagen6taLima2 = new Imagen('6', 'lima', 'daguiana-revoredo');
imagen6taLima2.addImagen();

var imagen6taLima3 = new Imagen('6', 'lima', 'elizabeth-condori');
imagen6taLima3.addImagen();

var imagen6taLima4 = new Imagen('6', 'lima', 'grecia-rayme');
imagen6taLima4.addImagen();

var imagen6taLima5 = new Imagen('6', 'lima', 'janine-vega');
imagen6taLima5.addImagen();

var imagen6taLima6 = new Imagen('6', 'lima', 'michelle-more');
imagen6taLima6.addImagen();

var imagen6taLima7 = new Imagen('6', 'lima', 'mishel-velasquez');
imagen6taLima7.addImagen();

var imagen6taLima8 = new Imagen('6', 'lima', 'rosario-felix');
imagen6taLima8.addImagen();
