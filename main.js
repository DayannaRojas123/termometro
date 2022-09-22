let boton = document.getElementById('send')


function conversion() {

   let fin = document.getElementById('ingreso').value
   let r = ((fin - 32) * 5 / 9).toFixed(1)

   document.getElementById('cuadro').innerText = r
   document.getElementById('mercurio').style.height = r + '%'


}


boton.addEventListener('click', conversion)