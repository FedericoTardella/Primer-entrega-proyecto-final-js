let precioFinal = 0
let productoElegido = parseInt(prompt(`Ingresa el número del producto que deseas comprar 1.Termo Stanley($16999) - 2.Termo Acero($3900) - 3.Termo Plastico($1500) - 4.Termo Terere($3600) - 5.Mate Stanley($11500) - 6.Mate Calabaza($9500) - 7.Mate Plastico($700) - 8.Mate Autocebante($630)`))
let seguirComprando = true 
let decision
let descuento
let productos = []
const carrito = []

const termoStanley = {
    nombre: 'Termo Stanley',
    precio: 16999
}
productos.push(termoStanley)

const termoAcero = {
    nombre: 'Termo Acero',
    precio: 3900
}
productos.push(termoAcero)

const termoPlastico = {
    nombre: 'Termo Plastico',
    precio: 1500
}
productos.push(termoPlastico)

const termoTerere = {
    nombre: 'Termo Terere',
    precio: 3600
}
productos.push(termoTerere)

const MateStanley = {
    nombre: 'Mate Stanley',
    precio: 11500
}
productos.push(MateStanley)

const MateCalabaza = {
    nombre: 'Mate Calabaza',
    precio: 9500
}
productos.push(MateCalabaza)

const MatePlastico = {
    nombre: 'Mate Plastico',
    precio: 700
}
productos.push(MatePlastico)

const MateAutocebante = {
    nombre: 'Mate Autocebante',
    precio: 630
}
productos.push(MateAutocebante)





    while(seguirComprando===true) {
if(productoElegido === 1) {
    precioFinal = precioFinal + 16999
} else if(productoElegido === 2) {
    precioFinal = precioFinal + 3900
} else if(productoElegido === 3) {
    precioFinal = precioFinal + 1500
} else if(productoElegido === 4) {
    precioFinal = precioFinal + 3600
} else if(productoElegido === 5) {
    precioFinal = precioFinal + 11500
} else if(productoElegido === 6) {
    precioFinal = precioFinal + 9500
} else if(productoElegido === 7) {
    precioFinal = precioFinal + 700
} else if(productoElegido ===8) {
    precioFinal = precioFinal + 630
}

    decision = parseInt(prompt(`¡Quieres seguir comprando? 1.Si - 2.No`))
    if (decision ===1){
        productoElegido = parseInt(
            prompt(
                `Ingresa el número del producto que deseas comprar 1.Termo Stanley($16999) - 2.Termo Aluminio($3900) - 3.Termo Plastico($1500) - 4.Termo Terere($3600) - 5.Mate Stanley($11500) - 6.Mate Calabaza($9500) - 7.Mate Plastico($700) - 8.Mate Autocebante($630)`
            )
        )
    } else if (decision === 2) {
        seguirComprando = false
    }
}

alert(`El precio de la compra realizada sin descuento es de: $` + precioFinal)

    function calcularDescuento(valor){
let descuento= 0
if(valor>=19000){
    descuento = 10
}
let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor
}
let valorDescuento = calcularDescuento(precioFinal)
alert ('El precio final de la compra realizada es de: $' + valorDescuento)

