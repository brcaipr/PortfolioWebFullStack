package com.portfolio.torresbr.Dto;

import javax.validation.constraints.NotBlank;

public class dtoAcercaDe {

    @NotBlank
    private String nombre;
    @NotBlank
    private String titulo;
    @NotBlank
    private String acercaDe;
    @NotBlank
    private String fotoUrl;

    public dtoAcercaDe() {
    }

    public dtoAcercaDe(String nombre, String titulo, String acercaDe, String fotoUrl) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.acercaDe = acercaDe;
        this.fotoUrl = fotoUrl;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAcercaDe() {
        return acercaDe;
    }

    public void setAcercaDe(String acercaDe) {
        this.acercaDe = acercaDe;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }

    

}
