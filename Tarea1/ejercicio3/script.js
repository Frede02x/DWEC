let objetoCompleto = {
    configuracion : {
        modo: "producción",
        version: 1.2,
        activo: true,
    },
    usuarios: [
        {nombre: "Juan", edad: 30},
        {nombre: "María", edad: 25}
    ],
    productos: [
        {id: 1, nombre: "Producto 1", precio: 100},
        {id: 2, nombre: "Producto 2", precio: 200}
    ]
};

console.log(objetoCompleto.productos[0].nombre);