import React from 'react'

var check = '0'
export class togle{
    
    

    static changevalue(name1){
        if(name1 == '0'){
            check = '0' 
        }
        else{
            check = '1' 
            
            
        }
        
        
    }

    static checked(){
        return check
    }


}


