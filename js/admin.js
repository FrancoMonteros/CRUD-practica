class Productos {
    constructor(producto, codigo, descripcion, precio, URL) {
        this.producto = producto;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.URL = URL;
    }
}

let inputproducto = document.getElementById('inputproducto');
let inputcodigo = document.getElementById('inputcodigo');
let inputdescripcion = document.getElementById('inputdescripcion');
let inputprecio = document.getElementById('inputprecio');
let inputURL = document.getElementById('inputURL');
let form = document.getElementById('form');

let arrPruducto = JSON.parse(localStorage.getItem('listaProductos')) || [];

let tbodyListado = document.getElementById('tbodyListado');
console.log(tbodyListado);



const handleSubmit = (e) => {
    e.preventDefault();
    if (inputproducto.value === "" || inputcodigo.value === "" || inputdescripcion.value === "" || inputprecio.value === "" || inputURL.value === "") {
        alert("todos los campos son obligatorios")
        return;
    }
    const nuevoProducto = new Productos(
        inputproducto.value,
        inputcodigo.value,
        inputdescripcion.value,
        inputprecio.value,
        inputURL.value)
    arrPruducto.push(nuevoProducto);
    localStorage.setItem('listaProductos', JSON.stringify(arrPruducto));
    window.location.reload();
    listaProductos()
}
form.addEventListener('submit', handleSubmit);


const listaProductos = () => {
    arrPruducto.forEach(producto => {
        return tbodyListado.innerHTML += `
            <tr>
                <th>${producto.producto}</th>
                <th>${producto.precio}</th>
                <th>${producto.codigo}</th>
                <th>${producto.descripcion}</th>
                <th>${producto.URL}</th>
                <th>
                    <button onclick="borrarProducto(${producto.codigo})" class="btn btn-danger">borrar</button>
                    <button onclick="editarProducto(${producto.codigo})" class="btn btn-warning">editar</button>
                </th>
            </tr>`
    });
}
const borrarProducto = (codigo) => {
    console.log(codigo);
    const arrNuevoProducto = arrPruducto.filter(producto => {
        return producto.codigo !== codigo.toString();
    })
    console.log(arrNuevoProducto);
    arrPruducto = arrNuevoProducto;
    localStorage.setItem('listaProductos', JSON.stringify(arrPruducto));
    window.location.reload();
}

const editarProducto = (codigo) => {
    console.log(codigo);
    const producto = arrPruducto.find(producto => {
        return producto.codigo === codigo.toString();
    })
    console.log(producto);
    inputproducto.value = producto.producto,
        inputcodigo.value = producto.codigo,
        inputdescripcion.value = producto.descripcion,
        inputprecio.value = producto.precio,
        inputURL.value = producto.URL

    const arrNuevoProducto = arrPruducto.filter(producto => {
        return producto.codigo !== codigo.toString();
    })
    arrPruducto = arrNuevoProducto;
    localStorage.setItem('listaProductos', JSON.stringify(arrPruducto));
}

listaProductos()