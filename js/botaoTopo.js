window.onscroll = function() {
    mostrarBotao()
};

function mostrarBotao() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("VoltarAoTopo").style.display = "block";
    } else {
        document.getElementById("VoltarAoTopo").style.display = "none";
    }
}