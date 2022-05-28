export class Educacion{
    id?: number;
    nombre: String;
    anio_inicio: String;
    anio_fin: String;
    detalle: String;
    img: String;

    constructor(nombre:String,anio_inicio:String,anio_fin:String,detalle:String,img:String){
        this.nombre=nombre;
        this.anio_inicio=anio_inicio;
        this.anio_fin=anio_fin;
        this.detalle=detalle;
        this.img=img;
    }
}

