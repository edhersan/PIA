async function obtenerTiendas() {
    try {
        const respuesta = await fetch('http://localhost:3000/tiendas');
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud');
        }
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
    } catch (error) {
        console.error('Error al obtener las tiendas:', error);
    }
}

obtenerTiendas();

async function obtenerProductos() {
    try {
        const respuesta = await fetch('http://localhost:3000/productos');
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud');
        }
        const productos = await respuesta.json();
        const contenedorProductos = document.getElementById('productos-container');

        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>Tienda: ${producto.tienda}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Disponible: ${producto.disponible}</p>
            `;
            contenedorProductos.appendChild(productoDiv);
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

obtenerProductos();
