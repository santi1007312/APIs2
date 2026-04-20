import {get} from './modules/untils/index.js';

const generarReporte  = async () => {

    const users = await get("users");
    const posts = await get("posts");

    const reporte = users
    .filter(user => user.active)
    .map(user => {
        const total = posts.filter(p => p.userId==user.id).length;
        return {
            nombre: user.name,
            cantidadPublicaciones: total
        };
    });
    console.log("------Resultado------");
    console.table(reporte);
    alert("Reporte generado, revise la consola");
}

generarReporte();