export class educacion{
    id?: number;
    nombre: String;
    anio_ingreso: String;
    anio_fin: String;
    detalle: String;
    img: String;

    constructor(nombre: String, anio_ingreso:String, anio_fin:String,detalle:String,img:String ){
        this.nombre =nombre;
        this.anio_ingreso = anio_ingreso;
        this.anio_fin=anio_fin;
        this.detalle=detalle;
        this.img=img;
    }

}