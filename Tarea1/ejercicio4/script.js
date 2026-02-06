function numParImpar(num){
    if(isNaN(num)){
        console.log("No es un numero");
    }
    else if(num % 2 === 0){
        console.log("PAR");
    }
    else{
        console.log("IMPAR")
    }
}

console.log(parImpar(4));
console.log(parImpar(7));
console.log(parImpar("hola"));
