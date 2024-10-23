//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato 
//accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi


const lampadina = document.getElementById('lampadina');
const button = document.getElementById('AccendiButton');


button.addEventListener("click",() => {
    if(lampadina.src.includes('white_lamp.png')){
        lampadina.src = 'yellow_lamp.png';
        button.textContent = 'spengni';
    } else {
        lampadina.src = 'white_lamp.png';
        button.textContent = 'Accendi';
    }
});