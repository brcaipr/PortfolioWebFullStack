
package com.portfolio.torresbr.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
   
    private String nombreE;
    private String sedeE;
    private String anio_inicioE;
    private String anio_finE;
    private String descripcionE;

    public Experiencia() {
    }

    public Experiencia( String nombreE,String sedeE, String anio_inicioE, String anio_finE, String descripcionE) {
        
        this.nombreE = nombreE;
        this.sedeE = sedeE;
        this.anio_inicioE = anio_inicioE;
        this.anio_finE = anio_finE;
        this.descripcionE = descripcionE;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSedeE() {
        return sedeE;
    }

    public void setSedeE(String sedeE) {
        this.sedeE = sedeE;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
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
