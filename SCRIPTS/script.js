async function obtenerTiendas() {
    const respuesta = await fetch('http://localhost:3000/tiendas');
    const tiendas = await respuesta.json();
    const contenedorTiendas = document.getElementById('menu1');

    tiendas.forEach(tienda => {
        const tiendaDiv = document.createElement('div');
        tiendaDiv.classList.add('tienda');
        tiendaDiv.innerHTML = `
            <h4>${tienda.nombre}</h4>
            <p>Actividad: ${tienda.actividad}</p>
            <p>Dirección: ${tienda.direccion}</p>
        `;
        contenedorTiendas.appendChild(tiendaDiv);
    });
}

obtenerTiendas();

