// Unidad 3
// Ejercicio 1

let distancia = parseInt(prompt("Ingresa la distancia que vas a recorrer (metros):"));

if (distancia < 0) {
    console.log("La distancia no puede ser negativa.");
} else if (distancia <= 1000) {
    console.log("Mejor caminar, algo de ejercicio es saludable.");
} else if (distancia <= 10000) {
    console.log("Es algo lejos para caminar, lo recomendable sería usar una bicicleta.");
} else if (distancia <= 30000) {
    console.log("Este viaje es largo. Sería ideal usar el transporte público y proteger al medio ambiente.");
} else if (distancia <= 100000) {
    console.logconsole.log("El viaje que se describe abarca una gran distancia. De ser posible, lo más apropiado sería usar su propio vehículo.");
} else {
    console.log("Este viaje abarca una gran distancia y es posible que no pueda ser realizado por tierra. La forma más rápida de llegar a destino podría ser con un vuelo.");
}

// Ejercicio 2

const numeros = [
    parseInt(prompt("Escribe un número entero")),
    parseInt(prompt("Escribe un número entero")),
    parseInt(prompt("Escribe un número entero"))
];

let mayor = 0;
let i = 0;

while (i < numeros.length) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
    i++;
}
console.log("El número más grande es: " + mayor)

//Unidad 4
// Ejercicio 1
function cambiar_color_de_fondo(color) {
    document.body.style.backgroundColor = color;
}

// Ejercicio 2
function contar_caracteres(event) {
    event.preventDefault();
    const textarea = document.getElementById('textarea');
    const contador = textarea.value.length;
    console.log("Caracteres: " + contador);
}

// Ejercicio 3
var alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    },
    {
      nombre: 'Pedro Rodriguez',
      nota: 4
    },
    {
      nombre: 'Roxana García',
      nota: 8
    },
    {
      nombre: 'Luciano Lopez',
      nota: 5
    },
    {
      nombre: 'Fernanda Gimenez',
      nota: 6
    },
    {
      nombre: 'Florencia Martinez',
      nota: 10
    },
    {
      nombre: 'Raul Sanchez',
      nota: 7
    },
    {
      nombre: 'Sandra Figueroa',
      nota: 8
    }
  ];
  
  var alumnos_aprobados = alumnos.filter(function(alumno) {
    return alumno.nota >= 7;
  });
  
  console.log(alumnos_aprobados);