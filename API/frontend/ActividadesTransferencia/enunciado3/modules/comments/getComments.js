/**
 * @fileoverview Módulo helper para realizar peticiones HTTP GET
 * orientadas a la consulta de comentarios.
 * @module modules/comments/getComments
 */

/**
 * Realiza una petición HTTP GET para obtener comentarios desde la API local.
 *
 * @async
 * @function getComments
 * @param {string} url - Ruta del endpoint a consultar (ej: "comments", "comments?postId=3").
 * @returns {Promise<Array<{id: number, postId: number, body: string}>>}
 * Arreglo de comentarios obtenidos del servidor.
 * @throws {Error} Si la petición falla o el servidor no responde.
 */
export const getCommets = async (url) => {
    const solicitud = await fetch (`http://localhost:3000/${url}`);
    const data = await solicitud.json()
    return data; 
}