//QUE DESAPAREZCA EL SIGNO DE BAJAR DPS DE 6 SEGUNDOS
const signoBajar = document.getElementById('signoBajar');

eventoSigno();
function eventoSigno() {
    document.addEventListener('DOMContentLoaded',function() {
        setTimeout(function() {
            signoBajar.classList.add('borrarSigno')
        },6000);
    });
}