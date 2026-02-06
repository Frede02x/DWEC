let productos = [
    {id: 1, nombre: "Laptop", precio: 1000},
    {id: 2, nombre: "Teléfono", precio: 500},
    {id: 3, nombre: "Tablet", precio: 300}
];

function buscarProductoPorNombre(nombre){
    for(let i = 0; i < productos.length; i++){
        if(productos[i].nombre === nombre ){
            return productos[i].precio;
        }
    }
    return "Producto no encontrado"
}

console.log(buscarProductoPorNombre("Tablet"));