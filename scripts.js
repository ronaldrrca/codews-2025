//Header
const icono_menu = document.getElementById("icono_menu");
const icono_cerrar_menu = document.getElementById("icono_cerrar_menu");
const dropDown_menu = document.getElementById("dropDown_menu");

icono_menu.addEventListener("click", ()=>{
    dropDown_menu.style.display = "flex";
    icono_menu.style.display = "none";
})

icono_cerrar_menu.addEventListener("click", ()=>{
    dropDown_menu.style.display = "none";
    icono_menu.style.display = "block";
})

let pathname = window.location.pathname;
let pageName = pathname.substring(pathname.lastIndexOf('/') + 1);

switch (pageName) {
    case "servicios.php":
        document.getElementById("menu_inicio").classList.remove("item_menu_activo");
        document.getElementById("menu_proyectos").classList.remove("item_menu_activo");
        document.getElementById("menu_servicios").classList.add("item_menu_activo");
        break;

    case "proyectos.php":
        document.getElementById("menu_inicio").classList.remove("item_menu_activo");
        document.getElementById("menu_servicios").classList.remove("item_menu_activo");
        document.getElementById("menu_proyectos").classList.add("item_menu_activo");
        break;
    default:
        document.getElementById("menu_servicios").classList.remove("item_menu_activo");
        document.getElementById("menu_proyectos").classList.remove("item_menu_activo");
        document.getElementById("menu_inicio").classList.add("item_menu_activo");
        break;
}


//____________________________________________________________________________________

//Formulario
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de inmediato

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar los campos
    if (nombre === "" || email === "" || mensaje === "") {
        mostrarModal("Por favor, llena todos los campos.");
        return;
    } else {
        // Si todos los campos son correctos
        document.getElementById("modal_encabezado").innerHTML = "Gracias por tu mensaje!";
        mostrarModal("Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto contigo pronto.");
    }

    

    // Enviar el formulario por AJAX (sin recargar la página)
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

// Mostrar el modal
function mostrarModal(mensaje) {
    document.getElementById('modalMensaje').textContent = mensaje;
    document.getElementById('modalContenido').style.display = 'block';
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add('no-scroll'); // Bloquear el scroll
}

// Cerrar el modal
function cerrarModal() {
    document.getElementById('modalContenido').style.display = 'none';
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove('no-scroll'); // Restaurar el scroll
}

//____________________________________________________________________________________

//Contador de caracteres en contacto
const mensaje_contacto = document.getElementById("mensaje");
mensaje_contacto.addEventListener("keyup", ()=>{
    const contador_carcteres_contacto = document.getElementById("contador_carcteres_contacto");
    const maxLength_contacto = mensaje_contacto.maxLength; 
    let tamano_actual_contacto = mensaje_contacto.value.length; 
    contador_carcteres_contacto.textContent = `${maxLength_contacto - tamano_actual_contacto} caracteres restantes`;
})



