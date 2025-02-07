// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Función para agregar amigos
function agregarAmigo() { // Obtener el valor ingresado en el campo de texto
    let nombreIngresado = document.getElementById("amigo").value.trim(); // Validar que no esté vacío
    if (nombreIngresado === "") {
        alert("Debe ingresar un nombre");
        return;
    } // Agregar el nombre al array de amigos
    amigos.push(nombreIngresado); // Limpiar el campo de texto
    document.getElementById("amigo").value = ""; // Llamar a la función para actualizar la lista de amigos en la página
    actualizarLista();
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos"); // Limpiar la lista antes de agregar los nuevos elementos
    listaAmigos.innerHTML = ""; // Recorrer el array de amigos y agregar cada uno como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i]; // Crear un nuevo <li>
        let li = document.createElement("li");
        li.textContent = amigo; // Establecer el nombre como texto del <li>

        // Agregar el <li> a la lista
        listaAmigos.appendChild(li);
    }
}

// Función para obtener un amigo aleatorio
function obtenerElementoAleatorio(array) {
    if (array.length === 0) {
        return null; // Si el array está vacío, devolvemos null
    }
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

// Función para mostrar el resultado en la página
function mostrarResultado(mensaje, idContenedor) {
    // Obtener el elemento donde se debe mostrar el resultado
    let contenedor = document.getElementById(idContenedor);
    
    // Limpiar el contenido anterior
    contenedor.innerHTML = "";

    // Crear un nuevo <li> con el mensaje
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = mensaje;

    // Agregar el nuevo <li> al contenedor
    contenedor.appendChild(nuevoElemento);
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    // Llamar a la función obtenerElementoAleatorio para obtener un amigo aleatorio
    let amigoSorteado = obtenerElementoAleatorio(amigos);

    // Validar si hay amigos disponibles
    if (amigoSorteado === null) {
        mostrarResultado("No hay amigos para sortear. Por favor, añade algunos.", "resultado");
        return;
    }

    // Mostrar el nombre sorteado en el HTML
    mostrarResultado(`¡El amigo secreto es: ${amigoSorteado}!`, "resultado");
}
