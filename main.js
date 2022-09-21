

const lista=['juan','german','sergio','john','robinson','karl','dayanna','farit','nasly']



function generarlista(vec){

    function inicio(){
        list="<ol>"
    }
   let list=''
    inicio()
    function fin(){
        list=list+'</ol>'

    }

    for(let i=0;i<vec.length;i++){
        list=list+'<li>'+vec[i]+'</li>'
    }
    fin()
    return list

}

document.getElementByI ('lista') .innerHTML= generarlista