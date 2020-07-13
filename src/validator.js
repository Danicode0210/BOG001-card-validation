const validator = {
   isValid:(creditCardNumber)=>{
    let suma = 0;
    let restar=0;
    let inverso = Array.from(creditCardNumber)
    inverso.reverse();
  for(let i = 0 ;i < inverso.length ; i++){
  let elemento = inverso[i];
 
   if( i % 2 !== 0){
       let multiplicar = elemento*2;
       
    if(multiplicar >=10)
    { 
       restar = multiplicar - 9;
         suma =suma + restar;
   
      }else{ suma = suma + multiplicar; 
}
  }else{
    suma=suma+parseInt(elemento);
   
  }
  
    }
    if(suma%10==0){
      //console.log(suma);
        return true;
    }else{
      // console.log(suma); 
      return false;
      

    }
    
    },    
    maskify:function mask (creditCardNumber) {
      let newNumber = creditCardNumber.replace(/\d(?=\d{4})/g,"#");
      return newNumber;      
  }  
 
};
 export default validator;