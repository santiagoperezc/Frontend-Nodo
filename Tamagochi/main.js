const button_name =document.querySelector("#click-name")
const tittle_name=document.querySelector("#name")
const inpunt_name=document.querySelector("#newNam")
let hambre = 0;
let vida = 100;
const barra_hambre = document.querySelector(".progress-bar-hunger")
const barra_vida = document.querySelector(".progress-bar-health")
const button_alimentar = document.querySelector("#feed-button")
const button_limpiar = document.querySelector("#clean-button")
const button_jugar = document.querySelector("#play-button")
const imagen = document.querySelector(".face")



button_name.addEventListener("click", function(){
    tittle_name. innerHTML=inpunt_name.value;
});

let intervaloHambre =  setInterval( function() {
    hambre = hambre + 10;
    if (hambre > 100) {
         hambre = 100;
         clearInterval();
    }
    updateHambre();
}, 2000);


let intervalovida= setInterval(function(){
     vida= vida-5;
     if(vida < 0){
         vida=0
         clearInterval();
     }
     updateVida()

 },2000);


 button_alimentar.addEventListener("click", function(){
    hambre= hambre - 10;
    if (hambre < 0){
        hambre=0;
    }
    updateHambre()
 });
 
function updateHambre(){
    barra_hambre.style.width = hambre + "%";
    if (hambre <=50) {
        barra_hambre.style.width = hambre + "%";
        barra_hambre.style.backgroundColor = "green";
    }
    else if (hambre > 50 && hambre <=80) {
        barra_hambre.style.width = hambre + "%";
        barra_hambre.style.backgroundColor = "yellow"; 
    }
    else if ( hambre >80) {
        barra_hambre.style.width = hambre + "%";
        barra_hambre.style.backgroundColor = "red"; 
    }
}



button_limpiar.addEventListener("click", function(){
    vida = vida + 10;
    if (vida>100){
       vida=100;
    }
    updateVida()
});

function updateVida(){
    barra_vida.style.width = vida + "%";
    if (vida<=20) {
        barra_vida.style.width = vida + "%";
        barra_vida.style.backgroundColor = "red";
        imagen.src="/imagenes/crash-muerto.jpg"
        

    }
    else if (vida > 21 && vida <=50) {
        barra_vida.style.width = vida + "%";
        barra_vida.style.backgroundColor = "yellow"; 
        imagen.src="/imagenes/crash-asustado.jpg"
    }
    else if ( vida > 51) {
        barra_vida.style.width = vida + "%";
        barra_vida.style.backgroundColor = "green"; 
       imagen.src="/imagenes/crash-feliz.jpg"
}
}

button_jugar.addEventListener("click",function(){
    vida= vida-5
    hambre= hambre+10
    if (vida > 100){
        vida = 100;
     }
     if (hambre > 100){
        hambre = 100;
    }
    updateVida()
    updateHambre()
})


