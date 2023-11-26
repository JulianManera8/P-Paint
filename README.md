# P-Paint

Arrancar con los estilos de css, buscar como hacer ese header:
    - como darle esa terminacion asi media ondulada
    - como difuminar el bottom del header
    - las font para los titulos y el resto d la pag
    - elegir los colores


Ver como hacer las card d los productos
    -  eso de mitad un color y mitad otro y ver como difuminar la separacion
    -  hover q haga un mini zoom en el producto


Ver como hace lo de cada producto
    - la separacion a la mitad que se difumine
    - buscar si 
        - poner un slider como el de ofertas pero que solo aparezca y desaparezca (sin translate)
        - si simplemente tocar como en 1producto y  que cambie la imagen con un efecto piola, sin las flechas al costado
        - los dos combinados
    - ver como hacer funcionalidad wsp:
        - que te tire una alerta cuando tocas el boton de QUIERO ESTE, diciendote que te va a llevar a wsp para pedir cotizacion y atencion personalizada
        - que en wsp te ponga ya un mensaje con el link del producto y con un msj de quiero info sobre esto


    <button id="whatsappButton">Enviar mensaje a WhatsApp</button>

    document.getElementById('whatsappButton').addEventListener('click', function() {
    // Número de teléfono y mensaje predefinido
    var phoneNumber = 3413076880;  // Reemplaza con el número de teléfono al que deseas enviar el mensaje
    var message = 'Hola, tirame mas info gracias.';
  
    // Crear el enlace con el protocolo whatsapp
    var whatsappLink = 'whatsapp://send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
  
    // Redirigir a WhatsApp
    window.location.href = whatsappLink;
    });






