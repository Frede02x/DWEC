let empresa = {
    nombre: "TechCorp",
    departamentos: [
        {
            nombre: "Desarrollo",
            empleados: [
                {
                    nombre: "Carlos",
                    proyectos: [
                        {
                            titulo: "App Web",
                            detalles: {
                                responsables: ["Carlos", "Ana"]
                            }
                        }
                    ]
                }
                
            ]
        }
    ]
}

console.log(empresa.departamentos[0].empleados[0].proyectos[0].detalles.responsables[1]);