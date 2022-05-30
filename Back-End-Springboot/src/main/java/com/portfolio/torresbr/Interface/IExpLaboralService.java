package com.portfolio.torresbr.Interface;

import com.portfolio.torresbr.Entity.ExpLaboral;
import java.util.List;


public interface IExpLaboralService {
    public List<ExpLaboral> getExpLaboral();
    public void saveExpLaboral(ExpLaboral explaboral);
    public void deleteExpLaboral(Long id);
    public ExpLaboral findExpLaboral(Long id);
    
}
