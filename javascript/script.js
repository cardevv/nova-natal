
 // menu mobile

const menumobile = document.getElementById('mobile_menu');
const mobilebotao = document.getElementById('btn-mobile');
const icone = mobilebotao.querySelector('i');

mobilebotao.addEventListener('click', function() {

    mobilebotao.classList.toggle('active' , 'fa-x');
    menumobile.classList.toggle('active');
    icone.classList.toggle('fa-bars');
    icone.classList.toggle('fa-x');




})






// Seleciona os elementos
const abrirMapa = document.getElementById('abrir-mapa');
const modal = document.getElementById('modal-mapa');
const fechar = document.querySelector('.fechar');

// Função para abrir a modal
abrirMapa.onclick = function () {
    modal.style.display = 'block';
}

// Função para fechar a modal
fechar.onclick = function () {
    modal.style.display = 'none';
}

// Fecha a modal se o usuário clicar fora do conteúdo
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

