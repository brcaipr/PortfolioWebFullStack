
package com.portfolio.torresbr.Dto;

import javax.validation.constraints.NotBlank;


public class dtoProyectos {
    @NotBlank
    private String nombre;
    @NotBlank
    private String detalle;
    @NotBlank
    private String img;

    public dtoProyectos() {
    }

    public dtoProyectos(String nombre, String detalle, String img) {
        this.nombre = nombre;
        this.detalle = detalle;
        this.img = img;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDetalle() {
        return detalle;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    
    
    
}
