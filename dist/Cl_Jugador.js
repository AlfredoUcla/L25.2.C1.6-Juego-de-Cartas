export default class CL_Jugador {
    constructor(n, c1, c2, c3) {
        this._nombre = n;
        this._carta1 = c1;
        this._carta2 = c2;
        this._carta3 = c3;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set carta1(c1) {
        this._carta1 = c1;
    }
    get carta1() {
        return this._carta1;
    }
    set carta2(c2) {
        this._carta2 = c2;
    }
    get carta2() {
        return this._carta2;
    }
    set carta3(c3) {
        this._carta3 = c3;
    }
    get carta3() {
        return this._carta3;
    }
    puntuacion() {
        return this._carta1 + this._carta2 + this._carta3;
    }
}
