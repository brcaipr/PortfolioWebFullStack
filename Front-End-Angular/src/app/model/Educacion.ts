export class Educacion {
    id? : number;
    nombreE : string;
    sedeE:string
    anio_inicioE:string;
    anio_finE:string;
    descripcionE : string;

    constructor(nombreE: string, sedeE:string,anio_inicioE:string,anio_finE:string, descripcionE: string){
        this.nombreE = nombreE;
        this.sedeE= sedeE;
        this.anio_inicioE=anio_inicioE;
        this.anio_finE=anio_finE;
        this.descripcionE = descripcionE;
    }
}

