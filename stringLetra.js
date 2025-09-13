//almacenar cada letra de la palabra "galleta" en un arreglo

console.log("---- el string escogido es galleta  ----");

const palabra = "galleta"
const arregloLetras = palabra.split("");

console.log(arregloLetras);

//comprimir cadena de letras

console.log("---- vector de letras repetidas comprimido ----");

function comprimir(cadena) {
  if (!cadena) {
    return "";
  }
  let resultado = "";
  let contador = 1;

  for (let i = 0; i < cadena.length; i++) {
    if (i + 1 < cadena.length && cadena[i] === cadena[i + 1]) {
      contador++;
    } else {
      resultado += cadena[i] + (contador > 1 ? contador : "");
      contador = 1;
    }
  }
  return resultado;
}

const cadenaOriginal = arregloLetras;
const cadenaComprimida = comprimir(cadenaOriginal);

console.log(cadenaComprimida);

// descomprimir string galleta

console.log("---- string descomprimido ----");

function descomprimir(cadenaComprimida) {
  if (!cadenaComprimida) {
    return "";
  }
  let resultado = "";
  let i = 0;

  while (i < cadenaComprimida.length) {
    let caracter = cadenaComprimida[i];
    i++;
    let numeroStr = "";
    while (i < cadenaComprimida.length && !isNaN(parseInt(cadenaComprimida[i]))) {
      numeroStr += cadenaComprimida[i];
      i++;
    }
    const repeticiones = numeroStr ? parseInt(numeroStr) : 1;
    resultado += caracter.repeat(repeticiones);
  }
  return resultado;
}

const cadenaComprimida2 = cadenaComprimida;
const cadenaDescomprimida = descomprimir(cadenaComprimida2);

console.log(cadenaDescomprimida);


