// ==== CARRITO (lo que ya tenías) ====
let total = 0;
let cantidad = 0;
let productos = [];

const botones = document.querySelectorAll(".btn-comprar");
const spanCantidad = document.getElementById("cantidad");
const spanTotal = document.getElementById("total");
const btnVerCarrito = document.getElementById("ver-carrito");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const card = boton.closest(".card");
    const precioSpan = card.querySelector(".precio");
    const nombreSpan = card.querySelector(".nombre-producto");

    const precio = Number(precioSpan.dataset.precio);
    const nombre = nombreSpan.textContent;

    total += precio;
    cantidad++;

    productos.push({ nombre, precio });

    spanCantidad.textContent = cantidad;
    spanTotal.textContent = total;
  });
});

btnVerCarrito.addEventListener("click", () => {
  localStorage.setItem("carritoCantidad", cantidad);
  localStorage.setItem("carritoTotal", total);
  localStorage.setItem("carritoProductos", JSON.stringify(productos));

  window.location.href = "carrito.html";
});

// ==== BUSCADOR ====
const inputBuscar = document.getElementById("buscar");
const cards = document.querySelectorAll(".card");

inputBuscar.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase();

  cards.forEach((card) => {
    const nombre = card
      .querySelector(".nombre-producto")
      .textContent.toLowerCase();

    // si el nombre incluye el texto buscado, se muestra, sino se oculta
    if (nombre.includes(texto)) {
      card.style.display = "block";  // o "flex" según tu diseño
    } else {
      card.style.display = "none";
    }
  });
});

