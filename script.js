// Selección de elementos del DOM
// - textArea: campo donde el usuario ingresa el texto.
// - mensaje: campo donde se muestra el texto encriptado/desencriptado.
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Función para encriptar el texto ingresado por el usuario.
function btnEncriptar() {
    // Validación: se asegura que el campo de texto no esté vacío.
    if (textArea.value.trim() === '') {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }

    // Validación: verifica que el texto contenga solo letras minúsculas sin acentos ni números.
    const regexConAcentoONumeros = /^[a-z]+$/;
    if (regexConAcentoONumeros.test(textArea.value)) {
        // Si la validación es exitosa, encripta el texto.
        const textoEncriptado = encriptar(textArea.value);
        // Muestra el texto encriptado en el área de mensaje.
        mensaje.value = textoEncriptado;
        // Limpia el campo de entrada.
        textArea.value = "";
    } else {
        // Si la validación falla, muestra un mensaje de alerta.
        alert("Solo se permiten letras minúsculas (con o sin acento) y números.");
    }
    return;
}

// Función para desencriptar el texto ingresado por el usuario.
function btnDesencriptar() {
    // Validación: se asegura que el campo de texto no esté vacío.
    if (textArea.value.trim() === '') {
        alert("Por favor, ingresa un texto para desencriptar.");
        return;
    }

    // Validación: verifica que el texto contenga solo letras minúsculas del alfabeto español.
    const regex = /^[a-zñáéíóúü]+$/;
    if (!regex.test(textArea.value)) {
        // Si la validación falla, muestra un mensaje de alerta.
        alert("Solo se permiten letras minúsculas del alfabeto español.");
        return;
    }

    // Si la validación es exitosa, desencripta el texto.
    const textoDesencriptado = desencriptar(textArea.value);
    // Muestra el texto desencriptado en el área de mensaje.
    mensaje.value = textoDesencriptado;
}

// Función de encriptado
// - Reemplaza cada vocal en el texto con un código específico.
function encriptar(stringEncriptada) {
    // Matriz de códigos de encriptación: cada vocal tiene un código asignado.
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    // Reemplaza cada letra correspondiente con su código.
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Función de desencriptado
// - Reemplaza cada código en el texto con la vocal correspondiente.
function desencriptar(stringDesencriptada) {
    // Validación adicional para asegurar que el texto solo contenga letras válidas.
    const regex = /^[a-zñáéíóúü]+$/;
    if (!regex.test(stringDesencriptada)) {
        alert("Solo se permiten letras minúsculas del alfabeto español.");
        return stringDesencriptada;
    }

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
  
    // Validación: se asegura que haya texto para copiar.
    if (texto.trim() === '') {
      alert('No hay texto para copiar.');
      return;
    }
  
    // Selecciona el texto en el área de mensaje y lo copia al portapapeles.
    textarea.select();
    document.execCommand('copy');
    alert('¡Texto copiado al portapapeles!');
}
