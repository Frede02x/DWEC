function calcularSuma(arr){
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            console.log("El array contiene numeros negativos");
            return;
        }
        suma += arr[i]
    }
    return suma;
}

let resultado = calcularSuma([1,2,-3,4]);
console.log("La suma es: ", resultado)