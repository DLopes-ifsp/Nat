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


tempoJuntos();
setInterval(tempoJuntos, 1000);

console.log('✅ Contador do Dia dos Namorados iniciado com sucesso!');