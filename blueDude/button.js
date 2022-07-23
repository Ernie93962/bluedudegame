document.getElementById('butt').onclick = function(){
  let pp = document.getElementById('pp')
  if(pp.innerHTML == ''){
    pp.innerHTML = 'enemies are red squares and will kill you if they touch you,<br> treasure is a blue square and you will gain points when you touch it,<br> use the arrow keys to move the black square(you!), and have fun!'
  }else{
    pp.innerHTML = null
  }
}
