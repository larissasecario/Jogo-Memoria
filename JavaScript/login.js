const entradaNome = document.querySelector(".entrada-login");
const btnJogar = document.querySelector(".btn-login");
const formulario = document.querySelector(".formulario")


entradaNome.addEventListener("input",(event)=>{
        if(event.target.value.length >2){
            btnJogar.removeAttribute("disabled")
           

        }else{
            btnJogar.setAttribute('disabled','')
           
        }
    }
);

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    localStorage.setItem('jogador',entradaNome.value);
    window.location = '/html/jogo.html';

}) 