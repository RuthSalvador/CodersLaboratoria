var chile4 = document.getElementsByClassName('4chile');
var lima5 = document.getElementsByClassName('5lima');
var lima6 = document.getElementsByClassName('6lima');

var select = document.getElementById('select');
select.onchange = function(){
  for (var i = 0; i < chile4.length; i++){
    for (var j = 0; j < lima5.length; j++){
      for (var k = 0; k < lima6.length; k++){
        if (select.value == '4Pchile'){
            chile4[i].style.display = 'inline-block';
            lima5[j].style.display = 'none';
            lima6[k].style.display = 'none';

        } else if (select.value == '5Plima') {
            chile4[i].style.display = 'none';
            lima5[j].style.display = 'inline-block';
            lima6[k].style.display = 'none';

        } else if (select.value == '6Plima') {
            chile4[i].style.display = 'none';
            lima5[j].style.display = 'none';
            lima6[k].style.display = 'inline-block';
        }
      }
    }
  }
}
