# P-Paint

Arrancar con los estilos de css, buscar como hacer ese header:
    - las font para los titulos y el resto d la pag


Ver como hacer las card d los productos
    -  hover q haga un mini zoom en el producto
    - terminar el responsive


Ver como hace lo de CADA FIGURA (1producto ej)

    - buscar si 
        - poner un slider como el de ofertas pero que solo aparezca y desaparezca (sin translate)
        - si simplemente tocar como en 1producto y  que cambie la imagen con un efecto piola, sin las flechas al costado
        - los dos combinados
    
    - poner para poder hacer zoom en las imagenes, o tocar la que este como principal y que se  agrande y que ahi tmb se pueda hacer zoom.

    - arreglar los otros html de cada figura y pasarles el css de figura

    -terminar el responsive de figura

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






