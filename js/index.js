//Formulario
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-contacto');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe de inmediato
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (nombre === "" || email === "" || mensaje === "") {
                mostrarModal("Por favor, llena todos los campos.");
                return;
            } else {
                document.getElementById("modal_encabezado").innerHTML = "Gracias por tu mensaje!";
                mostrarModal("Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto contigo pronto.");
            }

            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('email', email);
            formData.append('mensaje', mensaje);

            fetch('enviar-correo.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log('Correo enviado:', data);
            })
            .catch(error => {
                console.error('Error al enviar el correo:', error);
            });
        });
    } else {
        console.error('Formulario no encontrado');
    }
});


//____________________________________________________________________________________

//Contador de caracteres en contacto
const mensaje_contacto = document.getElementById("mensaje");
mensaje_contacto.addEventListener("keyup", ()=>{
    const contador_carcteres_contacto = document.getElementById("contador_carcteres_contacto");
    const maxLength_contacto = mensaje_contacto.maxLength; 
    let tamano_actual_contacto = mensaje_contacto.value.length; 
    contador_carcteres_contacto.textContent = `${maxLength_contacto - tamano_actual_contacto} caracteres restantes`;
})



