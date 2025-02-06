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


