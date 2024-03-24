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


const arrayProductos = [gomitas, chocolates, alfajores]

function bienvenida(){
    pedido = prompt("Bienvenido! Esta listo para hacer su pedido? SI/NO");
    if(pedido.toLowerCase() === "no"){
        alert("Gracias, vuelva pronto!")
    } else{
        comprar()
    }
}

function comprar(){

    orden = parseInt(prompt(`Que desea comprar:\n1) ${arrayProductos[0].nombre} \n2) ${arrayProductos[1].nombre}\n3) ${arrayProductos[2].nombre}`));

    switch(orden){
        case 1:
            tipo = prompt("Quiere gomitas simples o surtidas?")
            if(tipo.toUpperCase() === "SIMPLES"){
                totalCarrito += gomitas.precio;
                let sigue = confirm("Desea comprar algo mas?");
                        if (sigue === false){
                            alert(`Gracias por su compra! Su total es de $${totalCarrito}`)
                }else{
                    comprar()
                }
            }else{
                totalCarrito += surtido(gomitas)
                let sigue = confirm("Desea comprar algo mas?");
                        if (sigue === false){
                            alert(`Gracias por su compra! Su total es de $${totalCarrito}`)
                }else{
                    comprar()
                }
            }
        break

            case 2:
                tipo = prompt("Quiere chocolates simples o surtidos?")
                if(tipo.toUpperCase() === "SIMPLES"){
                    totalCarrito += chocolates.precio;
                    let sigue = confirm("Desea comprar algo mas?");
                        if (sigue === false){
                            alert(`Gracias por su compra! Su total es de $${totalCarrito}`)
                    }else{
                        comprar()
                    }
                }else{
                    totalCarrito += surtido(alfajores)
                    let sigue = confirm("Desea comprar algo mas?");
                        if (sigue === false){
                            alert(`Gracias por su compra! Su total es de $${totalCarrito}`)
                    }else{
                        comprar()
                    }
                }
            break

                case 3:
                    tipo = prompt("Quiere alfajores simples o surtidos?")
                    if(tipo.toUpperCase() === "SIMPLES"){
                        totalCarrito += alfajores.precio;
                        let sigue = confirm("Desea comprar algo mas?");
                        if (sigue === false){
                            alert(`Gracias por su compra! Su total es de $${totalCarrito}`)
                            break
                        }else{
                            comprar()
                        }
                    }else{
                        totalCarrito += surtido(alfajores)
                        let sigue = confirm("Desea comprar algo mas?");
                        if (sigue === false){
                            alert(`Gracias por su compra! Su total es de $${totalCarrito}`)
                        }else{
                            comprar()
                        }
                    }
                break
    }
    }

function surtido(item){
    itemsurtido = item.precio*1.4;
    return itemsurtido
}

bienvenida()
