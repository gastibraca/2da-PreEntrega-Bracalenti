class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let totalCarrito = 0

let gomitas = new Producto ("Gomitas", 800);
let chocolates = new Producto ("Chocolates", 1500);
let alfajores = new Producto ("Alfajores", 3000);
let gomitasVar = new Producto ("Gomitas Surtidas", 1200);
let chocolatesVar = new Producto ("Chocolates Surtidos", 2250);
let alfajoresVar = new Producto ("Alfajores Surtidos", 4500);


const arrayProductos = [gomitas, chocolates, alfajores]

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

let itemsCarrito = []

addGomitas.addEventListener("click", () =>{
    agregarAlCarrito(gomitas);
});
addGomitasVar.addEventListener("click", () =>{
    agregarAlCarrito(gomitasVar);
});
addAlfa.addEventListener("click", () =>{
    agregarAlCarrito(alfajores);
});
addAlfaVar.addEventListener("click", () =>{
    agregarAlCarrito(alfajoresVar);
});
addChoc.addEventListener("click", () =>{
    agregarAlCarrito(chocolates);
});
addChocVar.addEventListener("click", () =>{
    agregarAlCarrito(chocolatesVar);
});

pedir.addEventListener("click", () =>{
    alert(`Pedido realizado! Tu total fue de $${totalCarrito}`)
    itemsCarrito = [];
    addCarrito.textContent = "";
    totalCarrito = 0
    actualizarTotal()
})

function agregarAlCarrito(item){
    totalCarrito += item.precio;
    itemsCarrito.push(item);
    addCarrito.textContent += "\n"+`${item.nombre}`
    actualizarTotal();
}

function actualizarTotal(){
    addPrecio.textContent = `${totalCarrito}`
}