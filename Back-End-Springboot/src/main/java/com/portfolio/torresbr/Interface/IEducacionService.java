/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.torresbr.Interface;

import com.portfolio.torresbr.Entity.Educacion;
import java.util.List;


/**
 *
 * @author braia
 */
public interface IEducacionService {
    //trae lista de educacion
    public List<Educacion> getEducacion();
    
    //guardar
    public void saveEducacion(Educacion educacion);
    
    //eliminar
    public void deleteEducacion(Long id);
    
    //buscar por id
    public Educacion findEducacion(Long id);
    
}
