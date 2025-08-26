/**6. JUEGO DE CARTAS 
En el juego a cada participante se le entregan 3 cartas numeradas del 1 al 12, gana quien 
sume mayor puntuación. Se desea conocer a) la puntuación de cada participante, b) el nombre 
del ganador, c) el porcentaje de jugadores con menos de 10 puntos. 
Se tiene que el formato para la salida de los requerimientos solicitados es: 
El participante Juan tiene una puntuación de 8 
El participante José tiene una puntuación de 14 
El participante Rosa tiene una puntuación de 27 
Nombre del ganador: Rosa 
Porcentaje de jugadores con menos de 10 puntos:33.33% 
La salida corresponde a los siguientes datos del participante (nombre, carta1, carta2, carta3): 
(Juan,1,5,2) (José, 12,1,1) (Rosa, 10,9,8).  */

import Cl_Juego from "./Cl_Juego.js";
import Cl_Jugador from "./Cl_Jugador.js";

let juego = new Cl_Juego();

juego.ProcesarJug(new Cl_Jugador("Juan", 1, 5, 2));
juego.ProcesarJug(new Cl_Jugador("Jose", 12, 1, 1));
juego.ProcesarJug(new Cl_Jugador("Rosa", 10, 9, 8));

console.log("Porcentaje de jugadores con menos de 10 puntos: " + juego.PorcJug() + "%");
console.log("El ganador es: " + juego._ganador);

let salida : HTMLElement | null = document.getElementById("salida");
if (salida) {
    salida.innerHTML = "<p>Porcentaje de jugadores con menos de 10 puntos: " + juego.PorcJug() + "%</p>";
    salida.innerHTML += "<p>El ganador es: " + juego._ganador + "</p>";
}
