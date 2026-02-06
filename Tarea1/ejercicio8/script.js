function calcularPromedio(notas){
    let suma = 0;
    for (let i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    return suma / notas.length;
}

let resultado = calcularPromedio([]);
console.log(`El promedio es: ${resultado}`)