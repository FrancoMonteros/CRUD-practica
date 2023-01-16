export class Productos {
    constructor (producto, codigo, descripcion, precio, URL) { 
        this.producto = producto;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.URL = URL;
}
get getProducto(){
    return this.producto;
}
get getCodigo(){
    return this.codigo;
}
get getDescripcion(){
    return this.descripcion;
}
get getPrecio(){
    return this.precio;
}
get getUrl(){
    return this.url;
}
set setProducto(producto){
    this.producto = producto;
}
set setCodigo(codigo){
    this.codigo = codigo;
}
set setDescripcion(descripcion){
    this.descripcion = descripcion;
}
set setPrecio(precio){
    this.precio = precio;
}
set setUrl(url){
    this.url = url;
}
}