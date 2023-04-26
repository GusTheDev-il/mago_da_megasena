document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault()
        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio) 

        document.getElementById('resultado').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'
    })
})