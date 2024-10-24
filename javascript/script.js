const menumobile = document.getElementById('mobile_menu');
const mobilebotao = document.getElementById('btn-mobile');
const icone = mobilebotao.querySelector('i');

mobilebotao.addEventListener('click', function() {

    mobilebotao.classList.toggle('active' , 'fa-x');
    menumobile.classList.toggle('active');
    icone.classList.toggle('fa-bars');
    icone.classList.toggle('fa-x');




})


const ctx = document.getElementById('grafico-paes').getContext('2d');

const graficoPaes = new Chart(ctx, {
    type: 'bar', // Gráfico de barras
    data: {
        labels: [
            'Média', 
            'Hambúrguer', 
            'Hotdog',
            'Cara', 
            'Milho', 
            'Coco'
        ],
        datasets: [{
            label: 'Quantidade Vendida',
            data: [300, 220, 120, 90, 60, 40], // Dados correspondentes aos pães
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)', 
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3 // Espessura da borda
        }]
    },
    options: {
        responsive: true, // Ajusta o gráfico para telas diferentes
        scales: {
            y: {
                beginAtZero: true, // O eixo Y começa no zero
                title: {
                    display: true,
                    text: 'Quantidade Vendida'
                }
            },
            x: {
                title: {
                    display: true,
                    text: ''
                }
            }
        },
        plugins: {
            legend: {
                display: true, // Mostra a legenda do gráfico
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Vendas: ${context.raw}`; // Exibe o valor correto na tooltip
                    }
                }
            }
        }
    }
});




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

