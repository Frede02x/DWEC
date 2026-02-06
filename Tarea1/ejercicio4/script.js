let num = parseInt(prompt("Escribe un numero: "));

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

numParImpar(num);