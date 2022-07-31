package com.portfolio.torresbr.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
public class ExpLaboral {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min=1, max=50)
    private String nombre;
    @NotNull
    @Size(min=1, max=50)
    private String anio_inicio;
    @NotNull
    @Size(min=1, max=50)
    private String anio_fin;
    @NotNull
    private String detalle;
    @NotNull
    @Size(min=1, max=50)
    private String img;
    
}
