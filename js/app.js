//declaro la variable con el contenido del LS o array vacio
let listaProductosLS = JSON.parse(localStorage.getItem('listaProductos')) || [];
console.log(listaProductosLS);
//tomo el contenedor de las cards del index.html
let contenedor = document.getElementById('contenedor');
console.log(contenedor);
//creamos un arrow function para las creaciones de las cards de los productos
const renderCard = (producto) => {
    contenedor.innerHTML += `<div class="card mx-3 my-3" style="width: 18rem;">
    <img src="${producto.URL}" class="card-img-top" alt="imagen">
    <div class="card-body">
        <h5 class="card-title">${producto.producto}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">$ ${producto.precio}</p>
        <p class="card-text">${producto.codigo}</p>        
    </div>
</div>`
}
// recorro el array del listado
listaProductosLS.forEach(element => {renderCard(element)});