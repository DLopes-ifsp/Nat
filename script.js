function criarPetala() {
    const petala = document.createElement('div');
    petala.className = 'petala';
    petala.innerHTML = ['❤️', '💖', '💕', '🌸', '🌹'][Math.floor(Math.random() * 5)];
    petala.style.left = Math.random() * 100 + '%';
    petala.style.animationDuration = Math.random() * 3 + 3 + 's';
    petala.style.fontSize = Math.random() * 20 + 15 + 'px';
    document.body.appendChild(petala);
    
    setTimeout(() => {
        petala.remove();
    }, 5000);
}




const frases = [
    "Euteamo mais que ontem e menos que amanhã!",
    "Você é a melhor coisa que me aconteceu!",
    "Interlinked!",
    "Meu maior e mais necessário efeito borboleta!",
    "Ai como eu queria uma namorada que elogiasse o presente que eu dei pra ela!",
    "Seu sorriso é tãaaaaao lindo!",
    "Me da um beijo??",
    "Abre o olho mulher, se não, não vai escolher direito!",
    "Nem parece que a gente se conmheceu num sabado qualquer, e que viramos oque somos hoje!",
    "Meu roteiro favorito de filme é o nosso!",
    "Você é a unica estrela que eu paro pra olhar todo santo dia.",
];

function mostrarFrase() {
    const random = Math.floor(Math.random() * frases.length);
    document.getElementById('frasesinhas').innerHTML = `"${frases[random]}" 💭`;
}

const fotos = [
    "imagem/caixa.jpg",
    "imagem/pordosol.JPG", 
    "imagem/nataldedo.JPG",
    "imagem/destaque.JPG",
    "imagem/melaomorango.jpeg",
    "imagem/beijoroxo.jpg",
    "imagem/natafeliz.JPG",
    "imagem/bantuknots.jpeg",
    "imagem/primeirosabado.jpg",
    "imagem/piscinasafada.jpeg",
    "imagem/miranhahellokitty.jpeg",
    "imagem/amulhermaisbeladomundo.jpg",
    "imagem/gostosa.jpg",
    "imagem/muck.jpg",
    "imagem/azul.jpg",
    "imagem/viagem.jpeg",
    "imagem/saliente.jpg",
    "imagem/colinho.jpg",
    "imagem/cabelos.jpg",
    "imagem/princesa.jpeg",
    "imagem/calmacalabreso.jpeg",
    "imagem/mercado.jpeg",
    "imagem/patricks.jpeg",
    "imagem/shopping.jpeg",
    "imagem/retiro.jpeg"
];
let fotoAtual = 0;

function trocarFoto(direcao) {
    fotoAtual += direcao;
    if(fotoAtual < 0) fotoAtual = fotos.length - 1;
    if(fotoAtual >= fotos.length) fotoAtual = 0;
    document.getElementById('foto').src = fotos[fotoAtual];
}

 
function tempoJuntos(){
    const dataHoje = new Date();
    const dataInicio = new Date(2025,3,8,0,34,0);

    const msJuntos = dataHoje - dataInicio;

    if (msJuntos < 0){
        document.getElementById('anos').textContent = '0';
        document.getElementById('meses').textContent = '0';
        document.getElementById('dias').textContent = '0';
        document.getElementById('horas').textContent = '0';
        document.getElementById('minutos').textContent = '0';
        document.getElementById('segundos').textContent = '0';
        return;
    }

    let anos = dataHoje.getFullYear() - dataInicio.getFullYear();
    let meses = dataHoje.getMonth() - dataInicio.getMonth();
    let dias = dataHoje.getDate() - dataInicio.getDate();

    
    const horasTotais = Math.floor(msJuntos / (1000 * 60 * 60));
    const horas = horasTotais % 24;  // Resto da divisão por 24
    const minutos = Math.floor((msJuntos % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((msJuntos % (1000 * 60)) / 1000);

    // Ajustar dias quando o dia atual é menor que o dia de início
    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += ultimoDiaMesAnterior.getDate();
    }

    // Ajustar meses quando o mês atual é menor que o mês de início
    if (meses < 0) {
        anos--;
        meses += 12;
    }
                
    // Calcular total de dias (incluindo horas)
    const totalDias = Math.floor(msJuntos / (1000 * 60 * 60 * 24));


    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
 }

 let contador = 0;
function mostrarAmor() {
    contador++;
    const amor = document.getElementById('mensagem-amor');
    amor.innerHTML += `Euteamo! ❤️ `;
}

criarPetala();
tempoJuntos();
mostrarFrase();
setInterval(criarPetala, 1000);
setInterval(tempoJuntos, 1000);
setInterval(mostrarFrase, 5000);


console.log('✅ Contador do Dia dos Namorados iniciado com sucesso!');