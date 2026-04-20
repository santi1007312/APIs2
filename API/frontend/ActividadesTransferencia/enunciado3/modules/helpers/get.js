/**
 * @fileoverview Módulo helper para realizar peticiones HTTP GET.
 * @module helpers/get
 */
/**
 * Realiza una petición HTTP GET a la API local.
 *
 * @async
 * @function get
 * @param {string} url - Ruta del endpoint a consultar (ej: "posts", "posts/3", "comments?postId=3").
 * @returns {Promise<Object|Array>} Datos obtenidos del servidor en formato JSON.
 * @throws {Error} Si la petición falla o el servidor no responde.
 */

export const get = async(url) => {
  const solicitud= await  fetch(`http://localhost:3000/${url}`);
  const data = await solicitud.json()
  return data; 
}