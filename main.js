let boton = document.getElementById('send')

let boton2 = document.getElementById('reinicio')


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




   function reinicio(){

    document.getElementById('mercurio').style.height = '0px' 
      
    document.getElementById('cuadro').innerText=''
    document.getElementById('ingreso').value=''



   }




boton2.addEventListener('click' , reinicio)

boton.addEventListener('click', conversion)