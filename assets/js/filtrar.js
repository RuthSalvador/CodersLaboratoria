var chile4 = document.getElementsByClassName('4chile');
var lima5 = document.getElementsByClassName('5lima');
var lima6 = document.getElementsByClassName('6lima');

var select = document.getElementById('select');
select.onchange = function(){
  if (select.value == '4Pchile'){
    for (var i = 0; i < img.length; i++){
      img.style.display =  'block';
      lima5[i].style.display =  'none';
      lima6[i].style.display =  'none';

/*
  } else if (select.value == '5Plima') {
    chile4.classList.add('ocultar');
    lima6.classList.add('ocultar');

  } else if (select.value == '6Plima') {
    chile4.classList.add('ocultar');
    lima5.classList.add('ocultar');
  }*/
}}}
