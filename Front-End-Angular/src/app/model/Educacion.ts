export class Educacion{
    id?: number;
    nombre: string;
    anio_inicio: string;
    anio_fin: string;
    detalle: string;
    img: string;

    constructor(nombre:string,anio_inicio:string,anio_fin:string,detalle:string,img:string){
        this.nombre=nombre;
        this.anio_inicio=anio_inicio;
        this.anio_fin=anio_fin;
        this.detalle=detalle;
        this.img=img;
    }
}

