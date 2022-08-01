/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.torresbr.Repository;

import com.portfolio.torresbr.Entity.Educacionn;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface REducacion extends JpaRepository<Educacionn, Integer>{
    public Optional<Educacionn> findByNombreE(String nombreE);
    public boolean existsByNombreE(String nombreE);
}
