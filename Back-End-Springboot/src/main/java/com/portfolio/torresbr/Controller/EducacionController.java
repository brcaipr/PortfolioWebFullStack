package com.portfolio.torresbr.Controller;

import com.portfolio.torresbr.Entity.Educacion;
import com.portfolio.torresbr.Interface.IEducacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EducacionController {
    @Autowired IEducacionService ieducacionService;
    
       @GetMapping("/educacion/traer")
    public List<Educacion> getEducacion(){
        return ieducacionService.getEducacion();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/educacion/crear")
    public String createEducacion(@RequestBody Educacion educacion){
        ieducacionService.saveEducacion(educacion);
        return "Educacion agregada con exito";
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/educacion/eliminar/{id}")
    public String deleteEducacion(@PathVariable Long id){
        ieducacionService.deleteEducacion(id);
        return "La educacion fue borrada on exito";
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/educacion/editar/{id}")
    public Educacion editEducacion(@PathVariable Long id,
                                   @RequestParam("nombre") String NewNombre,
                                   @RequestParam("anio_inicio") String NewAnio_inicio,
                                   @RequestParam("anio_fin") String NewAnio_fin,
                                   @RequestParam("detalle") String NewDetalle,
                                   @RequestParam("img") String NewImg){
        
        Educacion educacion = ieducacionService.findEducacion(id);
        
        educacion.setNombre(NewNombre);
        educacion.setAnio_inicio(NewAnio_inicio);
        educacion.setAnio_fin(NewAnio_fin);
        educacion.setDetalle(NewDetalle);
        educacion.setImg(NewImg);
        
        ieducacionService.saveEducacion(educacion);
        return educacion;
       
    
    }
    
      @GetMapping("/educacion/traer/datos")
    public Educacion findEducacion(){
        return ieducacionService.findEducacion((long)4);
    }

}
