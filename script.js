// v2
// Selección de elementos del DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Función para encriptar el texto ingresado por el usuario.
function btnEncriptar() {
    if (textArea.value.trim() === '') {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }

    // Validación: permite solo letras minúsculas sin acentos ni números.
    const regexConAcentoONumeros = /^[a-z]+$/;
    if (regexConAcentoONumeros.test(textArea.value)) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    } else {
        alert("Solo se permiten letras minúsculas (sin acentos) y sin números.");
    }
}

// Función para desencriptar el texto ingresado por el usuario.
function btnDesencriptar() {
    if (textArea.value.trim() === '') {
        alert("Por favor, ingresa un texto para desencriptar.");
        return;
    }

    // Validación: permite letras minúsculas del alfabeto español, espacios y signos de puntuación comunes.
    const regex = /^[a-zñáéíóúü\s.,;!?]+$/;
    if (!regex.test(textArea.value)) {
        alert("Solo se permiten letras minúsculas del alfabeto español.");
        return;
    }

    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

// Función de encriptado
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Función de desencriptado
function desencriptar(stringDesencriptada) {
    // Matriz de códigos de desencriptación: invierte el proceso de encriptación.
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    // Reemplaza cada código con su letra correspondiente.
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles.
function btnCopiar() {
    const textarea = document.querySelector('.mensaje');
    const texto = textarea.value;
  
    if (texto.trim() === '') {
      alert('No hay texto para copiar.');
      return;
    }
  
    textarea.select();
    document.execCommand('copy');
    alert('¡Texto copiado al portapapeles!');
}

    // Selecciona el texto en el área de mensaje y lo copia al portapapeles.
    textarea.select();
    document.execCommand('copy');
    alert('¡Texto copiado al portapapeles!');
}
