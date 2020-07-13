/* let inputNumero=document.getElementById('inputNumero');
inputNumero.addEventListener("keyup" , (e) =>{
  let valorInput= e.target.value
//eliminamos los espacios en blanco
  inputNumero.value = valorInput.replace(/\s/g, '')
  //Eliminar las letras 
  .replace(/\D/g, '')
  //Ponemos espacio cada cuatro numeros, trim elimina el ultimo espacio
  .replace(/([0-9]{4})/g, '$1 ').trim();
   
})  */

let inputNombre=document.getElementById('inputNombre');
inputNombre.addEventListener("keyup" , (e) =>{
  let valorInput= e.target.value

 inputNombre.value = valorInput.replace(/[0-9]/g, '');
 
 })

//vamos a poner la opcion de Seleccion en Mes y Año de Expiración

let selectMes= document.getElementById('selectMes');
let selectYear= document.getElementById('selectYear');


for(let i=1; i <= 12; i++)

{ let opcion= document.createElement('option');
  opcion.value= i;
  opcion.innerText= i;
  selectMes.appendChild(opcion);
}
const yearActual= new Date().getFullYear();

for(let i = yearActual; i<= yearActual + 10; i++)
{
  let opcion= document.createElement('option');
  opcion.value= i;
  opcion.innerText= i;
  selectYear.appendChild(opcion);
}