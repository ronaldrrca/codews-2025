const icono_menu_header = document.getElementById("icono_menu_header");
const icono_cerrarMenu_header = document.getElementById("icono_cerrarMenu_header");
const nav = document.getElementById("nav");

icono_menu_header.addEventListener("click", ()=> {
    nav.classList.add('mostrar');
    icono_menu_header.classList.add('ocultar');
    icono_cerrarMenu_header.classList.add('mostrar');
})

icono_cerrarMenu_header.addEventListener("click", ()=> {
    nav.classList.remove('mostrar');
    icono_menu_header.classList.remove('ocultar');
    icono_cerrarMenu_header.classList.remove('mostrar');
})