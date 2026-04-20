import {get,destroy} from './modules/untils/index.js';

export const eliminarPostSeguro = async() =>{
    const comentarios = await get("comments");
    console.table(comentarios);
    alert("Se mostraron los comentarios en la consola. !!Revise si el post que desea eliminar tiene comentarios asociados.!!");
    const postId = prompt("Ingrese el ID del post que desea eliminar:");

    const tieneComentarios = comentarios.some(coment => Number(coment.postId) === Number(postId));

    if (tieneComentarios) {
        alert("No se puede eliminar el post porque tiene comentarios asociados.");
    }else{
        const eliminado = await destroy("posts", postId);
        if (eliminado){
            alert(`El post ${postId} ha sido eliminado exitosamente.`);
        }else{
            alert(`Error al eliminar el post ${postId}.`);
        }
    }
}

eliminarPostSeguro();