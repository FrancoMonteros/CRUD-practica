let inputproducto = document.getElementById('inputproducto');
let inputcodigo = document.getElementById('inputcodigo');
let inputdescripcion = document.getElementById('inputdescripcion');
let inputprecio = document.getElementById('inputprecio');
let inputURL = document.getElementById('inputURL');
let form = document.getElementById('form');
import { Productos } from "../interfaces/producto.js";
let arrPruducto = JSON.parse(localStorage.getItem('listaProductos')) || [];


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
}
form.addEventListener('submit', handleSubmit);