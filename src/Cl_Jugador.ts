export default class CL_Jugador {
    private _nombre: string;
    private _carta1: number;
    private _carta2: number;
    private _carta3: number;

    constructor(n:string, c1: number, c2: number, c3: number) {
        this._nombre = n;
        this._carta1 = c1;
        this._carta2 = c2;
        this._carta3 = c3;
    }

    set nombre(n: string) {
        this._nombre = n;
    }

    get nombre(): string {
        return this._nombre;
    }

    set carta1(c1: number) {
        this._carta1 = c1;
    }

    get carta1(): number {
        return this._carta1;
    }

    set carta2(c2: number) {
        this._carta2 = c2;
    }

    get carta2(): number {
        return this._carta2;
    }

    set carta3(c3: number) {
        this._carta3 = c3;
    }

    get carta3(): number {
        return this._carta3;
    }

    puntuacion(): number {
        return this._carta1 + this._carta2 + this._carta3;
    }
}