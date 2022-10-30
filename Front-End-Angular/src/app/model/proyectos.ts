export class Proyectos {
    id?: number;
    nombre:string;
    detalle:string;
    img:string;

    constructor(nombre:string, detalle: string, img: string){
        this.nombre=nombre;
        this.detalle=detalle;
        this.img=img;

    }

}
