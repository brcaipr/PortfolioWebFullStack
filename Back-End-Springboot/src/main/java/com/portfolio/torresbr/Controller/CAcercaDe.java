
package com.portfolio.torresbr.Controller;

import com.portfolio.torresbr.Dto.dtoAcercaDe;
import com.portfolio.torresbr.Entity.AcercaDe;
import com.portfolio.torresbr.Security.Controller.Mensaje;
import com.portfolio.torresbr.Service.SAcercaDe;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/acercade")
@CrossOrigin(origins = "http://localhost:4200")
public class CAcercaDe {
    @Autowired
    SAcercaDe sAcercaDe;
     @GetMapping("/lista")
    public ResponseEntity<List<AcercaDe>> list(){
        List<AcercaDe> list = sAcercaDe.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<AcercaDe> getById(@PathVariable("id") int id){
        if(!sAcercaDe.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        AcercaDe acercade = sAcercaDe.getOne(id).get();
        return new ResponseEntity(acercade, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sAcercaDe.existsById(id)) {
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        }
        sAcercaDe.delete(id);
        return new ResponseEntity(new Mensaje("eliminado"), HttpStatus.OK);
        
        
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoAcercaDe dtoacercade){      
        if(StringUtils.isBlank(dtoacercade.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(sAcercaDe.existsByNombreE(dtoacercade.getNombre()))
            return new ResponseEntity(new Mensaje("Esa experiencia existe"), HttpStatus.BAD_REQUEST);
            
         AcercaDe acercade = new AcercaDe(dtoacercade.getNombre(),dtoacercade.getTitulo(),dtoacercade.getAcercaDe(),dtoacercade.getFotoUrl());
        sAcercaDe.save(acercade);
        
        return new ResponseEntity(new Mensaje("persona agregada"), HttpStatus.OK);
      
        
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoAcercaDe dtoacercade){
        //Validamos si existe el ID
        if(!sAcercaDe.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
      
        //No puede estar vacio
        if(StringUtils.isBlank(dtoacercade.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
         AcercaDe acercade = sAcercaDe.getOne(id).get();
        acercade.setNombre(dtoacercade.getNombre());
        acercade.setTitulo(dtoacercade.getTitulo());
        acercade.setAcercaDe(dtoacercade.getAcercaDe());
        acercade.setFotoUrl(dtoacercade.getFotoUrl());
        
         sAcercaDe.save(acercade);
        return new ResponseEntity(new Mensaje("Experiencia actualizada"), HttpStatus.OK);
    }
}
