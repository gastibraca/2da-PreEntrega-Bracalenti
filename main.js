let gomitas = 135;
let chocolates = 1400;
let alfajores = 6000;

pedido = prompt("Bienvenido! Esta listo para hacer su pedido?");
if (pedido.toUpperCase()==="NO") {
    alert("Gracias, vuelva pronto!")
}else{
    orden = prompt("Que desea comprar: gomitas/alfajores/chocolates");
}

switch(orden){
    case "gomitas":
        tipo = prompt("Quiere gomitas simples o surtidas?")
        if(tipo.toUpperCase() === "SIMPLES"){
            alert("Gracias por su compra! Su total es de: $"+gomitas)
        }else{
            alert("Gracias por su compra! Su total es de: $"+surtido(gomitas))
        }
    break

        case "chocolates":
            tipo = prompt("Quiere chocolates simples o surtidos?")
            if(tipo.toUpperCase() === "SIMPLES"){
                alert("Gracias por su compra! Su total es de: $"+chocolates)
            }else{
                alert("Gracias por su compra! Su total es de: $"+ surtido(chocolates))
            }
        break

            case "alfajores":
                tipo = prompt("Quiere alfajores simples o surtidos?")
                if(tipo.toUpperCase() === "SIMPLES"){
                    alert("Gracias por su compra! Su total es de: $"+alfajores)
                }else{
                    alert("Gracias por su compra! Su total es de: $"+surtido(alfajores))
                }
            break
}


function surtido(item){
    itemsurtido = item*1.4;
    return itemsurtido
}