let loaderTexto = document.getElementById("loaderTexto")
let loader = document.getElementById("loader")

class materia {
    constructor(Nombre, Profesor, Dia, Promedio) {
        this.Nombre = Nombre,
            this.Profesor = Profesor,
            this.Dia = Dia,
            this.Promedio = Promedio
    }


}

const libreta = []



let guardarMateria = document.getElementById("Semantico2")

guardarMateria.addEventListener("click", ()=>(materias(libreta)))

function materias(array) {
let inputnombre = document.getElementById(inputNombre)
let inputprofesor = document.getElementById(inputProfesor)
let inputpromedio = document.getElementById(inputPromedio)
let inputcursada = document.getElementById(inputCursada)




 
const MateriaNueva = new materia(libreta.length+1, inputNombre.value, inputProfesor.value, inputCursada.value, inputPromedio.value)
    //Agregarlo a la estanteria
    libreta.push(MateriaNueva)
    console.log(libreta)
    }
    
    localStorage.setItem("libreria", JSON.stringify(libreta))

   const libretas = async ()=>{
        const response = await fetch("materias.json")
       const data = await response.json() 
    }


botonsemantico2 = document.getElementById("Semantico2")
botonsemantico2.onclick = () => MateriaNueva(inputNombre.value, inputProfesor.value, inputCursada.value, inputPromedio.value)


materias()


//Find

function ProfesorBuscado() {
    prompt("Ingrese nombre del profesor")
    let ProfesorEncontrado = libreta.find((Profesor) => Profesor.Profesor == ProfesorBuscado)

    if (ProfesorEncontrado == undefined) {
        console.log(`No tenes clases con ${ProfesorBuscado}`)
    }
    else {
        console.log(ProfesorEncontrado)
    }
}



let TituloDOM = document.getElementById("Titulo")
console.log(TituloDOM)


const eventoFuturo = (valor) => {
    return new Promise((resolve, reject) => {
        if (valor == true) {
            resolve("Somos campeones")
        } else {
            reject("No somos campeones :(")
        }

    })
}
console.log(eventoFuturo(true))







