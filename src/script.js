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