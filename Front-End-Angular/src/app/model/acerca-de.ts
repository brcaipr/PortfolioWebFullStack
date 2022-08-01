export class AcercaDe {
    id?: number;
    nombre: string;
    titulo: string;
    acercaDe: string;
    fotoUrl: string;

    constructor(nombre:string,titulo:string,acercaDe:string,fotoUrl:string){
        this.nombre=nombre;
        this.titulo=titulo;
        this.acercaDe=acercaDe;
        this.fotoUrl=fotoUrl;

    }
}
