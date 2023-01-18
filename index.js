const url = 'https://images-api.nasa.gov/search?q=apollo%2011'
const columnas = 2
const filas = 9
var tabla = document.getElementById('tabla')

//Traer los datos de la API, transformarlos en un objeto Javascript y guardarlo en la constante 'datos'.
async function traerDatos(){
    try{
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
        mostrarDatos(datos)
    } catch (error){
        console.log(error)
    }
}

 //Poner los datos obtenidos en el documento HTML.
function mostrarDatos(datos){
    //Crear n filas en la tabla, donde n está definido por la constante 'filas'
    for (n = 0; n <= filas; n++) {
        var fila = tabla.insertRow(-1)
        //Para cada fila crear i celdas, donde i está definido por la constante 'columnas'
        for (i = 0; i <= columnas; i++) {
            var campo = fila.insertCell(i)
            switch (i){
                //Columna Título
                case 0: campo.innerHTML = datos.collection.items[n].data[0].title
                break
                //Columna Descripción
                case 1: campo.innerHTML = datos.collection.items[n].data[0].description
                break
                //Columna Imagen
                case 2: 
                //Es necesario tomar pasos adicionales para guardar una imagen en la tabla, creando el 
                //elemento 'img' y luego adjuntarlo a la celda.
                var img = document.createElement('img')
                img.src = datos.collection.items[n].links[0].href
                campo.appendChild(img)
                break
            }
        }
    }
}

traerDatos()