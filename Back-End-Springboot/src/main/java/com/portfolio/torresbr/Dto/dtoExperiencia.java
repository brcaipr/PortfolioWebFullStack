
package com.portfolio.torresbr.Dto;

import javax.validation.constraints.NotBlank;


public class dtoExperiencia {
    @NotBlank
   private String nombreE;
    @NotBlank
    private String sedeE;
    @NotBlank
    private String anio_inicioE;
    @NotBlank
    private String anio_finE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    
    //Constructores

    public dtoExperiencia() {
    }

    public dtoExperiencia(String nombreE, String sedeE, String anio_inicioE, String anio_finE, String descripcionE) {
        this.nombreE = nombreE;
        this.sedeE = sedeE;
        this.anio_inicioE = anio_inicioE;
        this.anio_finE = anio_finE;
        this.descripcionE = descripcionE;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getSedeE() {
        return sedeE;
    }

    public void setSedeE(String sedeE) {
        this.sedeE = sedeE;
    }

    public String getAnio_inicioE() {
        return anio_inicioE;
    }

    public void setAnio_inicioE(String anio_inicioE) {
        this.anio_inicioE = anio_inicioE;
    }

    public String getAnio_finE() {
        return anio_finE;
    }

    public void setAnio_finE(String anio_finE) {
        this.anio_finE = anio_finE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }
    
    
    

    
}
