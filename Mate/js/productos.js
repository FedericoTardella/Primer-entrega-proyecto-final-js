/*
let precioFinal = 0
let productoElegido = parseInt(prompt(`Ingresa el número del producto que deseas comprar 1.Termo Stanley($16999) - 2.Termo Acero($3900) - 3.Termo Plastico($1500) - 4.Termo Terere($3600) - 5.Mate Stanley($11500) - 6.Mate Calabaza($9500) - 7.Mate Plastico($700) - 8.Mate Autocebante($630)`))
let seguirComprando = true 
let decision
let descuento


/*
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


const parrafo = document.createElement ('h1')
parrafo.innerText = "Gracias por elegirnos"
const div = document.getElementById ('divp')
div.append (parrafo)*/


const productos = []
const carrito = []
class producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    
}

let mateStanley = new producto ("Mate Stanley", 11500)
let mateCalabaza = new producto ("Mate Calabaza", 9500)
let matePlasttico = new producto ("Mate Plastico", 700,)
let mateAutocebante = new producto ("mate Autocebante", 630)
let termoStanley = new producto ("Termo Stanley", 16999)
let termoAcero = new producto ("Termo Acero", 3900)
let termoPlastico = new producto ("Termo Plastico", 1500)
let termoTerere = new producto ("Termo Terere", 3600)

productos.push (mateStanley, mateCalabaza, matePlasttico, mateAutocebante, termoStanley, termoAcero, termoPlastico, termoTerere)

const AddMateStanley = document.getElementById ("1")
AddMateStanley.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div1')
    div.append (parrafo)
}
const AddMateCalabaza = document.getElementById ("2")
AddMateCalabaza.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div2')
    div.append (parrafo)
}

const AddMatePlastico = document.getElementById ("3")
AddMatePlastico.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div3')
    div.append (parrafo)
}

const AddMateAuto = document.getElementById ("4")
AddMateAuto.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div4')
    div.append (parrafo)
}

const AddTermoStanley = document.getElementById ("5")
AddTermoStanley.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div5')
    div.append (parrafo)
}

const AddTermoAcero = document.getElementById ("6")
AddTermoAcero.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div6')
    div.append (parrafo)
}

const AddTermoPlastico = document.getElementById ("7")
AddTermoPlastico.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div7')
    div.append (parrafo)
}

const AddTermoTerere = document.getElementById ("8")
AddTermoTerere.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div8')
    div.append (parrafo)
}

const AddBombillaEspiral = document.getElementById ("9")
AddBombillaEspiral.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div9')
    div.append (parrafo)
}

const AddBombillaMetal = document.getElementById ("10")
AddBombillaMetal.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div10')
    div.append (parrafo)
}

const AddBombillaAlpa = document.getElementById ("11")
AddBombillaAlpa.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div11')
    div.append (parrafo)
}

const AddBombillaPlana = document.getElementById ("12")
AddBombillaPlana.onclick = () => {
    const parrafo = document.createElement ('p')
    parrafo.innerText = "Producto agregado al carrito correctamente"
    const div = document.getElementById ('div12')
    div.append (parrafo)
}

