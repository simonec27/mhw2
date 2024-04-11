function onCuoreClick(event) {
    document.body.classList.add('noscroll');
    modalsection.classList.remove('hidden');
}

const cuori = document.querySelectorAll(".cuore");

cuori.forEach(cuore => {
    cuore.addEventListener('click', onCuoreClick);
})

const login = document.querySelector('#login.black');
login.addEventListener('click', onCuoreClick);

function onExternalClick(event) {    
    document.body.classList.remove('noscroll');
    const modalsection = event.target;
    modalsection.classList.add('hidden');
    event.stopPropagation();
}

const sezioneesterna = document.querySelector('#modalsection');
sezioneesterna.addEventListener('click', onExternalClick);

function onXClick(event) {
    document.body.classList.remove('noscroll');
    const modalsection = document.querySelector('#modalsection');
    modalsection.classList.add('hidden');
    event.stopPropagation();
}

const xinterna = document.querySelector('#closebutton');
xinterna.addEventListener('click', onXClick);

function tendinaScopri(event) {
    const altretendine=document.querySelectorAll('#tendinaALtro,#tendinaRecensioni');
    for(let item of altretendine){
        item.classList.add('hidden');
    }
    const tendina = document.querySelector('#tendinaScopri');
    tendina.classList.remove('hidden');
    event.stopPropagation();
}

const clickscopri=document.querySelector('#scopri');
clickscopri.addEventListener('click', tendinaScopri);

function tendinaRecensioni(event) {
    const altretendine=document.querySelectorAll('#tendinaALtro,#tendinaScopri');
    for(let item of altretendine){
        item.classList.add('hidden');
    }
    const tendina = document.querySelector('#tendinaRecensioni');
    tendina.classList.remove('hidden');
    event.stopPropagation();
}

const clickrecensioni=document.querySelector('#recensioni');
clickrecensioni.addEventListener('click', tendinaRecensioni);

function tendinaAltro(event) {
    const altretendine=document.querySelectorAll('#tendinaRecensioni,#tendinaScopri');
    for(let item of altretendine){
        item.classList.add('hidden');
    }
    const tendina = document.querySelector('#tendinaAltro');
    tendina.classList.remove('hidden');
    event.stopPropagation();
}

const clickaltro=document.querySelector('#altro');
clickaltro.addEventListener('click', tendinaAltro);

function onbodyclick(event){
    const tendina=document.querySelectorAll('#tendinaAltro,#tendinaScopri,#tendinaRecensioni');
    for(let item of tendina){
        if(item!=event.target){
            item.classList.add('hidden');
        }
    }
}

document.body.addEventListener('click',onbodyclick);

function inthotel(event){
    const int=document.createElement('h1');
    int.textContent='Prenota un soggiorno unico';
    int.classList.add('welcome2');
    const container = document.querySelector('.welcome');
    container.innerHTML = '';
    container.appendChild(int);
}

const hotel=document.querySelector('#hotel');
hotel.addEventListener('click', inthotel);

function intattività(event){
    const int=document.createElement('h1');
    int.textContent='Dedicati a qualcosa di divertente';
    int.classList.add('welcome2');
    const container = document.querySelector('.welcome');
    container.innerHTML = '';
    container.appendChild(int);
}

const attività=document.querySelector('#attività');
attività.addEventListener('click', intattività);

function intristoranti(event){
    const int=document.createElement('h1');
    int.textContent='Trova ristoranti';
    int.classList.add('welcome2');
    const container = document.querySelector('.welcome');
    container.innerHTML = '';
    container.appendChild(int);
}

const ristoranti=document.querySelector('#ristoranti');
ristoranti.addEventListener('click', intristoranti);

function intcasevacanza(event){
    const int=document.createElement('h1');
    int.textContent='Scopri alloggi in locazione';
    int.classList.add('welcome2');
    const container = document.querySelector('.welcome');
    container.innerHTML = '';
    container.appendChild(int);
}

const casevacanza=document.querySelector('#casevacanza');
casevacanza.addEventListener('click', intcasevacanza);

function intcercatutto(event){
    const int=document.createElement('h1');
    int.textContent='Dove vuoi andare?';
    int.classList.add('welcome2');
    const container = document.querySelector('.welcome');
    container.innerHTML = '';
    container.appendChild(int);
}

const cercatutto=document.querySelector('#cercatutto');
cercatutto.addEventListener('click', intcercatutto);

function transition(event){
    const newbannerimage=document.querySelectorAll('.imgbanner');
    for(let item of newbannerimage){
        item.src='img/borse-da-viaggio-orig.avif';
    }
}

const bannerimage=document.querySelectorAll('.imgbanner');
for(let item of bannerimage){
    item.addEventListener('click', transition);
}

