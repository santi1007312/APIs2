/**
 * @fileoverview Punto de entrada principal de la aplicación.
 * Solicita al usuario el ID de una publicación, consulta todas
 * las publicaciones disponibles y muestra la información detallada
 * de la publicación seleccionada junto con sus comentarios.
 * @module app
 */

import { getPostsById, getPosts } from "./modules/posts/index.js";

/**
 * @type {string} Identificador ingresado por el usuario
 * para consultar una publicación específica.
 */
let idPosts = prompt("Ingrese el ID de la publicacion que desea consultar: ");
// Buscar publicación específica y validar comentarios
await getPostsById(idPosts);
