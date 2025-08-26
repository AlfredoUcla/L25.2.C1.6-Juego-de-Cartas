export default class Cl_Juego {
    constructor() {
        this._cntJug = 0;
        this._cntTotalJug = 0;
        this._auxganador = 0;
        this._ganador = "";
    }
    ProcesarJug(j) {
        this._cntTotalJug++;
        if (j.puntuacion() > this._auxganador) {
            this._auxganador = j.puntuacion();
            this._ganador = j.nombre;
        }
        if (j.puntuacion() < 10) {
            this._cntJug++;
        }
        console.log("Jugador: " + j.nombre + " - Puntuacion: " + j.puntuacion());
        let salida = document.getElementById("salida-actual");
        if (salida) {
            salida.innerHTML += "<p>Jugador: " + j.nombre + " - Puntuacion: " + j.puntuacion() + "</p>";
        }
    }
    PorcJug() {
        return Math.round((this._cntJug / this._cntTotalJug) * 100);
    }
}
