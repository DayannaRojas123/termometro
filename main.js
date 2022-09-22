let boton = document.getElementById('send')


function conversion() {

  



    let fin = document.getElementById('ingreso').value
    let r = ((fin - 32) * 5 / 9).toFixed(1)

  
 
    document.getElementById('cuadro').innerText = r


    if(r>0 && r<100){
    document.getElementById('mercurio').style.height = r + '%'}

    else if (r>100){

      document.getElementById('mercurio').style.height = '250px'



    }

    else if(r<0){

      document.getElementById('mercurio').style.height = '10px' 
      
      document.getElementById('mercurio').style.color = '#FFF'

    }
 






   }




boton.addEventListener('click', conversion)