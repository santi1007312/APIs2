/**
 * @fileoverview Módulo para consultar todas las publicaciones disponibles.
 * @module modules/posts/getPosts
 */

import { get } from "../helpers/index.js";

/**
 * Obtiene el listado completo de publicaciones desde la API.
 *
 * @async
 * @function getPosts
 * @returns {Promise<Array<{id: number, userId: number, title: string, body: string}>}
 * Arreglo con todas las publicaciones registradas.
 * @throws {Error} Si la petición al endpoint /posts falla.
 */

export const getPosts = async () => {
    return get('posts')
}