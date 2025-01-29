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


