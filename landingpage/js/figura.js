
//CAMBIAR FOTOS CUANDO TOCO UNA U OTRA

var imgPrincipal = document.getElementById('fotoPrincipal');
let otraFoto = document.getElementsByClassName('otraFoto');


otraFoto[0].onclick = function () {
    if (imgPrincipal.src != otraFoto[0].src) {
        entradaSalida(0)
        setTimeout(function () {
            imgPrincipal.src = otraFoto[0].src;
        }, 500);
    } else {
        mismaFoto(0);
    }
}
otraFoto[1].onclick = function () {
    if (imgPrincipal.src != otraFoto[1].src) {
        entradaSalida(1)
        setTimeout(function () {
            imgPrincipal.src = otraFoto[1].src;
        }, 500);
    } else {
        mismaFoto(1);
    }
}
otraFoto[2].onclick = function () {
    if (imgPrincipal.src != otraFoto[2].src) {
        entradaSalida(2)
        setTimeout(function () {
            imgPrincipal.src = otraFoto[2].src;
        }, 500);
    } else {
        mismaFoto(2);
    }
}
otraFoto[3].onclick = function () {
    if (imgPrincipal.src != otraFoto[3].src) {
        entradaSalida(3)
        setTimeout(function () {
            imgPrincipal.src = otraFoto[3].src;
        }, 500);
    } else {
        mismaFoto(3);
    }
}
otraFoto[4].onclick = function () {
    if (imgPrincipal.src != otraFoto[4].src) {
        entradaSalida(4)
        setTimeout(function () {
            imgPrincipal.src = otraFoto[4].src;
        }, 500);
    } else {
        mismaFoto(4);
    }
}




//EFECTOS PARA EL CAMBIO DE LAS FOTOS
function entradaSalida(indice) {
    imgPrincipal.classList.add("difuminar",  "achicar");
    otraFoto[indice].classList.add('achicarOtraFoto');

    setTimeout(function () {
        imgPrincipal.classList.remove("difuminar", "achicar");
        imgPrincipal.style.transition = '.5s'
        otraFoto[indice].classList.remove('achicarOtraFoto');
        otraFoto[indice].style.transition = '.5s'
    }, 500);

}


function mismaFoto(indice) {
    imgPrincipal.classList.add("achicarOtraFoto");
    otraFoto[indice].classList.add('achicarOtraFoto');

    setTimeout(function () {
        imgPrincipal.classList.remove("achicarOtraFoto");
        imgPrincipal.style.transition = '.5s'
        otraFoto[indice].classList.remove('achicarOtraFoto');
        otraFoto[indice].style.transition = '.5s'
    }, 500);
}



//FUNCIONALIDAD DE ABRIR WSP CON UN MENSAJE



const btnWsp = document.getElementById('btnWsp');
btnWsp.onclick = function() {

    var confirmar = confirm(`Te redigiremos a WhatsApp con la figura seleccionada, solo tienes que tocar Enviar!

    ¿Ir a WhatsApp?`);

    if (confirmar) {
        var numerowsp = 543413076880
        var nombreFigura = document.getElementById('nombreFigura').textContent;
        var mensaje = `Hola, quisiera información y cotizacion de la figura ${nombreFigura}. Espero respuesta, gracias.`;
        var whatsappLink = 'whatsapp://send?phone=' + numerowsp + '&text=' + encodeURIComponent(mensaje);
        window.location.href = whatsappLink;
    } 

}


//FUNCIONALIDAD DE ZOOM PARA LAS FIGURAS EN MOBILE
// const cerrarZoom = document.getElementById('cerrarZoom');
// const body = document.querySelector('body');
// var imgPrincipalFoto = document.querySelector('.fotoPrincipal img'); 

// imgPrincipal.onclick = function() {
//     imgPrincipalFoto.style.scale = '250%'
//     imgPrincipalFoto.style.transition = '0.3s ease'
//     imgPrincipalFoto.style.background = '#000000cd'

//     setTimeout(function () {
//         cerrarZoom.style.display = 'flex'
//     }, 500);

// }

// cerrarZoom.onclick = function() {
//     cerrarZoom.style.display = 'none'
//     imgPrincipalFoto.style.scale = '120%'
//     imgPrincipalFoto.style.background = 'transparent'
// }


//FUNCIONALIDAD SLIDER CUANDO ES MOBILE

// const flechaDer = document.getElementById('flechaDer');
// const flechaIzq = document.getElementById('flechaIzq');


//IDEA
// Cada vez que toque la flecha, que me lea el data-id de 
// la foto que esta en el imgPrincipal, porque ahi yo voy a 
// ir pasandole tambien el data-id junto con el src. 
// dependiendo del numero, que tenga, se pasa el siguiente 
// si toco la flecha derecha, o el anterior.


// flechaDer.onclick = function(e) {
//     imgPrincipal.src = otraFoto[0].src;
//     const dataId = imgPrincipalFoto.dataset.id;
//     console.log(dataId)
    
    
// }

// flechaIzq.onclick = function() {
//     console.log('flechaIzq clicked')
// }

