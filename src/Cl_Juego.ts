import Cl_Jugador from "./Cl_Jugador";

export default class Cl_Juego {
private _cntJug: number = 0;
private _cntTotalJug: number = 0;
private _auxganador: number = 0;
public _ganador: string = "";

constructor() {}
    ProcesarJug(j: Cl_Jugador) {
        this._cntTotalJug++;
        if (j.puntuacion() > this._auxganador) {
            this._auxganador = j.puntuacion();
            this._ganador = j.nombre;
        }
        
        if (j.puntuacion() < 10) {
            this._cntJug++;
        }
        console.log("Jugador: " + j.nombre + " - Puntuacion: " + j.puntuacion());
        let salida : HTMLElement | null = document.getElementById("salida-actual");
        if (salida) {
            salida.innerHTML += "<p>Jugador: " + j.nombre + " - Puntuacion: " + j.puntuacion() + "</p>";
        }
    }
    PorcJug(): number {
        return Math.round((this._cntJug / this._cntTotalJug) *100) ;
    }
}
