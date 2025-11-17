// ===========================
// LISTA DE JUEGOS (AGREGÁ MÁS)
// ===========================

const juegos = [
    { nombre: "Resident Evil 4", caratula: "caratulas/re4.jpg" },
    { nombre: "Devil May Cry 3", caratula: "caratulas/dmc3.jpg" },
    { nombre: "Dragon Ball Z Budokai Tenkaichi 3", caratula: "caratulas/dbzbt3.jpg" },
    { nombre: "God of War", caratula: "caratulas/gow.jpg" },
    { nombre: "God of War 2", caratula: "caratulas/gow2.jpg" }
  ];
  
  // ===========================
  // VARIABLES DEL CARRITO
  // ===========================
  
  let carrito = [];
  
  // ===========================
  // MOSTRAR JUEGOS
  // ===========================
  
  function cargarJuegos() {
    const lista = document.getElementById("lista-juegos");
    lista.innerHTML = "";
  
    juegos.forEach((juego, index) => {
      lista.innerHTML += `
        <div class="card">
          <img src="${juego.caratula}" class="portada">
          <h3>${juego.nombre}</h3>
          <button onclick="agregarCarrito(${index})" class="btn-add">Agregar</button>
        </div>
      `;
    });
  }
  
  // ===========================
  // AGREGAR AL CARRITO
  // ===========================
  
  function agregarCarrito(id) {
    var nombre = juegos[id].nombre;
  
    // Evitar repetidos
    if (carrito.indexOf(nombre) !== -1) {
      alert("Ya agregaste este juego.");
      return;
    }
  
    carrito.push(nombre);
    actualizarCarrito();
  }
  
  
  // ===========================
  // MOSTRAR CARRITO
  // ===========================
  
  function actualizarCarrito() {
    var div = document.getElementById("carrito");
  
    if (carrito.length === 0) {
      div.innerHTML = "<p class='sub'>El carrito está vacío.</p>";
      return;
    }
  
    div.innerHTML = "";
  
    for (var i = 0; i < carrito.length; i++) {
      div.innerHTML +=
        "<p><strong>" + (i + 1) + ".</strong> " + carrito[i] +
        " <button onclick='eliminarItem(" + i + ")' class='btn-del'>X</button></p>";
    }
  }

  function eliminarItem(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }
  


  
  // ===========================
  // ENVIAR POR WHATSAPP
  // ===========================
  
  document.addEventListener("DOMContentLoaded", () => {
    cargarJuegos();
    actualizarCarrito();
  
    document.getElementById("btnWhatsApp").onclick = () => {
      if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
      }
  
      const numero = "549XXXXXXXXXX";  
      const texto = encodeURIComponent("Hola! Quiero estos juegos:\n\n" + carrito.join("\n"));
  
      window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
    };
  });
  