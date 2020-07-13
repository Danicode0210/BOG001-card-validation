import validator from './validator.js';
let Compra = document.getElementById('Comprar');
Compra.addEventListener('click' , DarComprar);
let Compra1 = document.getElementById('Comprar1');
Compra1.addEventListener('click' , DarComprar);
function DarComprar()
{
  alert("Recuerda que solo aceptamos tarjeta de credito como medio de pago")
  document.getElementById('vista0').style.display="none";
  document.getElementById('vista2').style.display="none";
  document.getElementById('vista1').style.display="block";
}

 let valid=document.getElementById('validacion');
valid.addEventListener('click',ContinuaValidacion);
function ContinuaValidacion()
{ 
  document.getElementById('vista1').style.display="none";
  document.getElementById('vista2').style.display="block";
}
  

let volver = document.getElementById('volver');
volver.addEventListener('click' ,Regresar);

function Regresar() 
{ 
  document.getElementById('vista0').style.display="none";
  document.getElementById('vista2').style.display="none";
document.getElementById('vista1').style.display="block";
} 
let resultado=document.getElementById('result');
resultado.addEventListener('click',Validar);
function Validar(){
  document.getElementById('vista0').style.display="none";
  document.getElementById('vista2').style.display="none";
  document.getElementById('vista1').style.display="none";
  document.getElementById('vista3').style.display='block';
 /*  let vista3 = document.getElementById('vista3');
  vista3.style.display="block"; */

let numero = document.formtarjeta.number.value;
let numMasky= validator.maskify(numero);
let inputNombre=document.getElementById('inputNombre');
let esValida= validator.isValid(numero);
if (numero === '') {
  alert ( 'Por favor complete los campos correspondientes para continuar')
}else {
   esValida= validator.isValid(numero);
    
}
if(esValida){
    numero = document.formtarjeta.number.value;
    document.getElementById('vista 3').innerHTML=inputNombre.value +' '+ 'Tu tarjeta de credito'+ ' ' + numMasky +' '+ 'es valida' ;
    
}else{
   numero = document.formtarjeta.number.value;
   document.getElementById('vista3').innerHTML= inputNombre.value +' '+ 'Tu tarjeta de credito'+ ' ' + numMasky +' '+ 'es invalida ,por favor verifica los datos e intenta nuevamente';
}
}