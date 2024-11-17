async function obtenerTiendas() {
    try {
        const respuesta = await fetch('https://localhost:3000/tiendas');
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud');
        }
        const tiendas = await respuesta.json();
        const contenedorTiendas = document.getElementById('menu1');

        const fragment = document.createDocumentFragment();
        tiendas.forEach(tienda => {
            const tiendaDiv = document.createElement('div');
            tiendaDiv.classList.add('tienda');
            tiendaDiv.innerHTML = `
                <h4>${tienda.nombre}</h4>
                <p>Actividad: ${tienda.actividad}</p>
                <p>Dirección: ${tienda.direccion}</p>
            `;
            fragment.appendChild(tiendaDiv);
        });
        contenedorTiendas.appendChild(fragment);
    } catch (error) {
        console.error('Error al obtener las tiendas:', error);
    }
}

obtenerTiendas();

async function obtenerProductos() {
    try {
        const respuesta = await fetch('https://localhost:3000/productos');
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud');
        }
        const productos = await respuesta.json();
        const contenedorProductos = document.getElementById('productos-container');

        const fragment = document.createDocumentFragment();
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>Tienda: ${producto.tienda}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Disponible: ${producto.disponible}</p>
            `;
            fragment.appendChild(productoDiv);
        });
        contenedorProductos.appendChild(fragment);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

obtenerProductos();

async function buscarTiendas(query) {
    try {
        const respuesta = await fetch(`https://localhost:3000/buscar/tiendas?query=${query}`);
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud');
        }
        const tiendas = await respuesta.json();
        const contenedorTiendas = document.getElementById('tiendas-container');
        contenedorTiendas.innerHTML = ''; // Limpiar resultados anteriores

        const fragment = document.createDocumentFragment();
        tiendas.forEach(tienda => {
            const tiendaDiv = document.createElement('div');
            tiendaDiv.classList.add('tienda');
            tiendaDiv.innerHTML = `
                <h4>${tienda.nombre}</h4>
                <p>Actividad: ${tienda.actividad}</p>
                <p>Dirección: ${tienda.direccion}</p>
            `;
            fragment.appendChild(tiendaDiv);
        });
        contenedorTiendas.appendChild(fragment);
    } catch (error) {
        console.error('Error al buscar las tiendas:', error);
    }
}

async function buscarProductos(query) {
    try {
        const respuesta = await fetch(`https://localhost:3000/buscar/productos?query=${query}`);
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud');
        }
        const productos = await respuesta.json();
        const contenedorProductos = document.getElementById('productos-container');
        contenedorProductos.innerHTML = ''; // Limpiar resultados anteriores

        const fragment = document.createDocumentFragment();
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>Tienda: ${producto.tienda}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Disponible: ${producto.disponible}</p>
            `;
            fragment.appendChild(productoDiv);
        });
        contenedorProductos.appendChild(fragment);
    } catch (error) {
        console.error('Error al buscar los productos:', error);
    }
}
