function GeneradorPalabras() {
    this.palabras = ["hola", "amigo", "mundo", "inteligente"];

    this.generar = function () {
        let indice = Math.floor(Math.random() * this.palabras.length);
        let palabra = this.palabras[indice];

        let prob = Math.random();

        if (prob < 0.8) {
            return palabra.toUpperCase();
        } else {
            return palabra.toLowerCase();
        }
    };
}

let generador = new GeneradorPalabras();
console.log(generador.generar());
