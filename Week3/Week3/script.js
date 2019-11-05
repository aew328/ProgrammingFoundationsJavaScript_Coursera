function dolime() {
  var dd1 = document.getElementById('d1');
  dd1.style.backgroundColor = "lime";
}

function doyellow(){
  var dd1 = document.getElementById('d1');
  dd1.style.backgroundColor = "white";
  var ctx = dd1.getContext('2d');
  ctx.fillStyle = "yellow";
  ctx.fillRect(10, 10, 40, 40); 
  ctx.fillRect(100, 10, 40, 40);
}