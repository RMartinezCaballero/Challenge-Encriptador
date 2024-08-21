let botonEncriptar = document.getElementById("button_encrypt"); // recibe la accion de boton encriptar
let botonDesencriptar = document.getElementById("button_decrypt"); // recibe la accion de boton desencriptar
let botonCopiar = document.getElementById("button_copiar");// recibe la accion de boton Copiar
let textoEntrada = document.getElementById("input_text_encrypt"); //recibe el texto a encriptar
let textoSalida = document.getElementById("output_text_decrypt"); //recibe el texto a desencriptar
let contenedorPadre = document.querySelector(".result"); // contenedor principal par textos

window.addEventListener('load', function() {
  // Simular un retardo de carga de 2 segundos
  setTimeout(function() {
      document.getElementById('loading-container').style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }, 2000);
});


//Habilita y  deshabilita los botones si no hay texto
function habilitarBotones() {
    botonEncriptar.disabled = false;
    botonDesencriptar.disabled = false;
    
}


// Habilita el Boton de Copiado cuando el recuadro de texto esta con texto copiado
function habilitarCopiado() {
    botonCopiar.disabled = false;
}


//Verificador de texto vacio o lleno para poder darle funcion a los botones
function actualizarPagina() {
    if(textoEntrada.value !== ""){
        contenedorPadre.classList.remove("no_texto")
    }
    textoEntrada.focus();
}


//mensaje modificado de alerta
function myAlert(message) {
    var alert = document.getElementById('custom-alert');
    alert.innerHTML = message;
    alert.style.display = 'block';
    setTimeout(function() {
      alert.style.display = 'none';
    }, 2000); // Oculta el alert después de 3 segundos
}


// Actia y desactiva el Campo de Texto para ingresar
function focusTextArea() {
    var textarea = document.getElementById("input_text_encrypt");
    textarea.focus();
}


// funcion Encriptar mensaje
function encriptarMensaje() {
  if (textoEntrada.value != "") {
    // expresión regular para verificar minúsculas y espacios
    let regExp = /^[a-z\s]+$/;

    if (regExp.test(textoEntrada.value)) {
      let mensajeEncriptado = textoEntrada.value;
      mensajeEncriptado = mensajeEncriptado.replace(/e/gim, "enter");       // busca y remplaza todo los textos 'e' por el texto 'enter'          teniendo en cuanta el orden 
      mensajeEncriptado = mensajeEncriptado.replace(/i/gim, "imes");        // busca y remplaza todo los textos 'i' por el texto 'imes'           para que no se dañe el texto 
      mensajeEncriptado = mensajeEncriptado.replace(/a/gim, "ai");          // busca y remplaza todo los textos 'a' por el texto 'ai'             a encriptar o desencriptar
      mensajeEncriptado = mensajeEncriptado.replace(/o/gim, "ober");        // busca y remplaza todo los textos 'o' por el texto 'ober'
      mensajeEncriptado = mensajeEncriptado.replace(/u/gim, "ufat");        // busca y remplaza todo los textos 'u' por el texto 'ufat'
      textoSalida.innerHTML = mensajeEncriptado;
      textoSalida.value = mensajeEncriptado;
      actualizarPagina();
    } else {
      myAlert("Por favor escribe un texto válido, solo debe ingresar letras minúsculas y espacios.");
      focusTextArea();
    }
  } else {
    myAlert("Por favor escribe un texto a Encriptar");
    focusTextArea();
  }
}


// funcion desecncriptar
function desencriptarMensaje() {
    if (textoEntrada.value != "") {
        let mensajeDesencriptado = textoEntrada.value;
        mensajeDesencriptado = mensajeDesencriptado.replace(/enter/gim, "e");       // busca y remplaza todo los textos 'enter' por el texto 'e'          teniendo en cuanta el orden 
        mensajeDesencriptado = mensajeDesencriptado.replace(/imes/gim, "i");        // busca y remplaza todo los textos 'imes' por el texto 'i'           para que no se dañe el texto 
        mensajeDesencriptado = mensajeDesencriptado.replace(/ai/gim, "a");          // busca y remplaza todo los textos 'ai' por el texto 'a'           a encriptar o desencriptar 
        mensajeDesencriptado = mensajeDesencriptado.replace(/ober/gim, "o");        // busca y remplaza todo los textos 'ober' por el texto 'o'
        mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/gim, "u");        // busca y remplaza todo los textos 'ufat' por el texto 'u'
        textoSalida.innerHTML = mensajeDesencriptado;
        textoSalida.value = mensajeDesencriptado;
        actualizarPagina();
    }
    else {
        myAlert("Para desencriptar un mensaje, usa la caja de texto"); // mensaje cuando no hay texto
        focusTextArea();
    }
}


// funcion de Copia de texto a clipboard
function copiarMensaje() {
    if (textoSalida.value != "") {
        navigator.clipboard.writeText(textoSalida.value);
        myAlert("Mensaje copiado al clipboard");
    }
    else {
        myAlert("Nada que copiar");
    }
}


// llamado de las funciones de cada boton
botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;
textoEntrada.onclick = habilitarBotones;