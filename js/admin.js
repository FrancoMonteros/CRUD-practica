let inputproducto = document.getElementById('inputproducto');
let inputcodigo = document.getElementById('inputcodigo');
let inputdescripcion = document.getElementById('inputdescripcion');
let inputprecio = document.getElementById('inputprecio');
let inputURL = document.getElementById('inputURL');
let form = document.getElementById('form');
import { Productos } from "../interfaces/producto.js";
let arrPruducto = JSON.parse(localStorage.getItem('listaProductos')) || [];
let tbodyListado = document.getElementById('tbodyListado');
console.log(tbodyListado);



const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = new Productos(
        inputproducto.value,
        inputcodigo.value,
        inputdescripcion.value,
        inputprecio.value,
        inputURL.value)
    arrPruducto.push(nuevoProducto);
    localStorage.setItem('listaProductos', JSON.stringify(arrPruducto));
    form.reset();
    listaProductos(nuevoProducto)
}
form.addEventListener('submit', handleSubmit);


const listaProductos = (producto) => {
    tbodyListado.innerHTML += `
    <tr>
    <th>${producto.producto}</th>
    <th>${producto.precio}</th>
    <th>${producto.codigo}</th>
    <th>${producto.descripcion}</th>
    <th>${producto.URL}</th>
    <th>
        <button class="btn btn-danger">borrar</button>
        <button class="btn btn-warning">editar</button>
    </th>
</tr>`
}
arrPruducto.forEach(element => {
    listaProductos(element)
});