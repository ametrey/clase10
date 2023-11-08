function concatenar(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return false;
  } else {
    return a + b;
  }
}

function extraerSubstring(cadena, inicio, longitud) {
  if (
    typeof cadena !== "string" ||
    isNaN(inicio) ||
    (longitud !== undefined && isNaN(longitud))
  ) {
    return false;
  } else {
    return cadena.substr(inicio, longitud);
  }
}

function aMayusculas(cadena) {
  if (typeof cadena !== "string") {
    return false;
  } else {
    return cadena.toUpperCase();
  }
}

function aMinusculas(cadena) {
  if (typeof cadena !== "string") {
    return false;
  } else {
    return cadena.toLowerCase();
  }
}

function manipularCadena(cadena1, cadena2, operacion) {
  let result = "";
  switch (operacion) {
    case "concatenar":
      result = concatenar(cadena1, cadena2);
      break;
    case "extraerSubstring":
      result = extraerSubstring(
        cadena1,
        parseInt(cadena2),
        parseInt(arguments[2])
      );
      break;
    case "aMayusculas":
      result = aMayusculas(cadena1);
      break;
    case "aMinusculas":
      result = aMinusculas(cadena1);
      break;
    default:
      console.log("Error: No es una operación válida con strings");
      return;
  }

  if (result === false) {
    console.log(
      "Error: no es posible realizar la operación con los datos proporcionados."
    );
  } else {
    console.log(
      " Cadena1: " +
        cadena1 +
        (cadena2 ? "\n Cadena2: " + cadena2 : "") +
        "\n Operacion: " +
        operacion +
        "\n Resultado: " +
        result
    );
  }
}

// Ejemplos de uso:
let operacionConcatenar = manipularCadena("Hola", " Mundo", "concatenar");
let operacionExtraer = manipularCadena("Hola Mundo", "2", "5");
let operacionMayusculas = manipularCadena("Hola Mundo", null, "aMayusculas");
let operacionMinusculas = manipularCadena("Hola Mundo", null, "aMinusculas");
let operacionInvalida = manipularCadena(123, null, "aMinusculas");
