class producto{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
    }
}

let totalCarrito = 0

let gomitas = new producto (1,"Gomitas", 800);
let chocolates = new producto (2,"Chocolates", 1500);
let alfajores = new producto (3,"Alfajores", 3000);
let gomitasVar = new producto (4,"Gomitas Surtidas", 1200);
let chocolatesVar = new producto (4,"Chocolates Surtidos", 2250);
let alfajoresVar = new producto (6,"Alfajores Surtidos", 4500);


const productos = [gomitas, gomitasVar, chocolates,chocolatesVar, alfajores,alfajoresVar]

function surtido(item){
    itemsurtido = item.precio*1.5;
    return itemsurtido
}

const addGomitas = document.getElementById("gom-cla");
const addGomitasVar = document.getElementById("gom-var");
const addAlfa = document.getElementById("alfa-cla");
const addAlfaVar = document.getElementById("alfa-var");
const addChoc = document.getElementById("choc-cla");
const addChocVar = document.getElementById("choc-var");
const pedir = document.getElementById("finCompra");
const addCarrito = document.getElementById("carrito");
const addCantCarrito = document.getElementById("cantCarrito");
const addPrecio = document.getElementById("precio");

let carrito = []


if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                        <h5>${producto.nombre}</h5>
                        <p> $${producto.precio} </p>
                        <p> ${producto.cantidad} </p>
                        <button class="btn colorBoton" id="eliminar${producto.id}" > Eliminar Producto </button>
                    </div>
                </div>
                        `
        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })

    })
    calcularTotal();
}


const mostrarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> $${producto.precio} </p>
                        <button class="btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
                    </div>
                </div>
                        `
        contenedorProductos.appendChild(card);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();


const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}
const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}
const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
}

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = ` $${totalCompra}`;
}

function actualizarTotal(){
    addPrecio.textContent = `${totalCarrito}`
}

fetch("https://dolarapi.com/v1/dolares")
  .then(response => response.json())
  .then(data => console.log(data));