/**
 * @fileoverview Módulo para consultar comentarios asociados
 * a una publicación específica.
 * @module modules/comments/getCommentsByID
 */

import { getCommets } from "../helpers/index.js";

/**
 * Obtiene todos los comentarios relacionados con una publicación
 * filtrando por el identificador del post.
 *
 * @async
 * @function getCommentsByID
 * @param {number|string} id - Identificador de la publicación cuyos comentarios se desean consultar.
 * @returns {Promise<Array<{id: number, postId: number, body: string}>>}
 * Arreglo de comentarios asociados a la publicación.
 * @throws {Error} Si la petición al endpoint de comentarios falla.
 */
export const getCommentsByID = async (id) => {
    const data = await getCommets (`posts/${id}/comments`);
    return data; 
}