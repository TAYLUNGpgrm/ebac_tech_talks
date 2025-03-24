AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStempDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStempAgora = agora.getTime();
    const timeStempRestante = timeStempDoEvento - timeStempAgora;
    
    const segundos = Math.floor((timeStempRestante % (1000 * 60)) / 1000);
    const minutos = Math.floor((timeStempRestante % (1000 * 60 * 60)) / (1000 * 60));
    const horas = Math.floor((timeStempRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dias = Math.floor(timeStempRestante / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML = `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}, 1000)