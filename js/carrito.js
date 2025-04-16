// carrito.js - Lógica del carrito de compras para QFC

const productos = [
  { id: 1, nombre: "Hamburguesa Clásica", precio: 5.00 },
  { id: 2, nombre: "Papas Fritas", precio: 2.50 },
  { id: 3, nombre: "Refresco", precio: 1.75 }
];

let carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    carrito.push(producto);
    actualizarVistaCarrito();
  }
}

function actualizarVistaCarrito() {
  const lista = document.getElementById("listaPedido");
  const total = document.getElementById("total");
  lista.innerHTML = "";

  let suma = 0;
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    lista.appendChild(li);
    suma += item.precio;
  });

  total.textContent = suma.toFixed(2);
}

function finalizarPedido() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  alert("¡Pedido enviado! Total: $" + document.getElementById("total").textContent);
  carrito = [];
  actualizarVistaCarrito();
}

function mostrarMenu() {
  const menu = document.getElementById("menu");
  productos.forEach(prod => {
    const div = document.createElement("div");
    div.innerHTML = `
      ${prod.nombre} - $${prod.precio.toFixed(2)}
      <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>
    `;
    menu.appendChild(div);
  });
}
