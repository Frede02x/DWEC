function factorial(n){
    if (n < 0 || !Number.isInteger(n)){
        throw new Error("El número debe ser un entero positivo");
    }
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));