async function listaVideos(){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
/*     console.log(conexion);
    console.log(conexionConvertida); */
    return conexionConvertida;
}

async function crearVideo(titulo,descripcion,url,imagen){
    const conexion = await fetch ("http://localhost:3001/videos",{
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
        })
    })

    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }
    
    return conexionConvertida;
}

async function buscarVideo(palabraClave){
    const conexion = await fetch (`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}


export const conexionAPI={
    listaVideos,crearVideo,buscarVideo
}
