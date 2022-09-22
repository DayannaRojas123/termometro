
let boton=document.getElementById('send')



function conversion(){

   let fin=document.getElementById('i').value
    let r= ((fin-32)*5/9).toFixed(1)
  
    document.getElementById('cuadro').innerText=r
    document.getElementById('mercurio').style.height=r+'%'
  
    

  

}







boton.addEventListener('click', conversion)
