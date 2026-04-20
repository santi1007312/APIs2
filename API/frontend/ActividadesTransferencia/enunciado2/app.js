import { getPosts } from "../enunciado2/modules/posts/index.js";
import {get  } from "./modules/helpers/index.js";

const listadoPubli = await get(`posts`);
const totalComentsGen= await get(`comments`);

let mensajePublicacion='';
let hola=1;

for (const [index, listadoP] of
    listadoPubli.entries()) {
        const comentariosDelPost = totalComentsGen.filter(coment =>
            Number(coment.postId)===
            Number(listadoP.id)
        );
        const cantidad = comentariosDelPost.length;

        if (cantidad>0) {
            mensajePublicacion+= `\n${index+1}. ${listadoP.title}` +(`\nTiene ${cantidad} comentario(s)\n`+ `Estado: Con comentarios\n`);
        }else{
            mensajePublicacion+= `\n${index+1}. ${listadoP.title}` +(`\n0 comentarios`+`\nEstado: Sin comentarios\n`);
        }

}





console.log(`total comentarios: ${totalComentsGen.length}\n`+mensajePublicacion)
