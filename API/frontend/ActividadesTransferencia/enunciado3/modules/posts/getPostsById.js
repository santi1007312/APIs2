/**
 * @fileoverview Módulo para consultar una publicación específica
 * y validar sus comentarios asociados.
 * @module modules/posts/getPostsById
 */
import { get } from "../helpers/index.js";

/**
 * Busca una publicación por su identificador único y consulta
 * los comentarios relacionados. Valida si existen o no comentarios
 * asociados a dicha publicación.
 *
 * @async
 * @function getPostsById
 * @param {number|string} id - Identificador único de la publicación a consultar.
 * @returns {Promise<void>} No retorna valor. Imprime los resultados en consola.
 * @throws {Error} Si el ID no existe o la petición falla.
 */
export const getPostsById = async (id) => {
    
    /** @type {Array} Lista completa de publicaciones */
    const posts = await get (`posts`);
    
    /**
     * @type {{id: number, userId: number, title: string, body: string}}
     * Publicación encontrada por ID
     */

    const post = await get(`posts/${id}`);
    
    /**
     * @type {Array<{id: number, postId: number, body: string}>}
     * Comentarios asociados a la publicación
     */
    const comments = await get (`comments?postId=${id}`);

    // Construir mensaje de comentarios
    let mensajeComentarios = '';

    

    if (comments.length===0){
        mensajeComentarios= ("Esta publicacion no tiene comentarios");
    }else{
        mensajeComentarios= (`\nNumero de comentarios: ${comments.length} \nInformacion de los comentarios: `);
        comments.forEach((comment, index) => {
            mensajeComentarios += `\n${index + 1}. ${comment.body}`;
        });
        
    }
    
    // Mostrar todo en una sola ventana emergente
    alert(
        `Total de publicaciones: ${posts.length}\n` +
        `\nINFORMACIÓN DE LA PUBLICACIÓN\n` +
        `Título:    ${post.title}\n` +
        `Contenido: ${post.body}\n` +
        mensajeComentarios
    );
}

