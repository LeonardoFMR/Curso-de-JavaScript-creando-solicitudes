import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento){
    console.log("Se está ejecutando filtrarVideo");
    evento.preventDefault();
    
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideo(datosDeBusqueda);
    
    const lista = document.querySelector("[data-lista]");
    
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video=>lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)))
    
    if(busqueda.length==0){
        console.log("No se encontraron elementos");
        lista.innerHTML=`<h2 class="mensaje__titulo">No se encontró ni un solo elemento para ${datosDeBusqueda} :(</h2>`
    }
    console.log(busqueda)

}

const boton = document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click",evento=>filtrarVideo(evento));