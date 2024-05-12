import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo=document.querySelector("[data-titulo]").value;
    const descripcion = Math.floor(Math.random()*10).toString();
    try{
    await conexionAPI.crearVideo(titulo,descripcion,url,imagen)

    window.location.href="../pages/envio-concluido.html"
    }catch(e){
        alert(e)
    }
}

formulario,addEventListener("submit",evento=>crearVideo(evento));