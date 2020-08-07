import validator from './validator.js';

// Cambio de pantallas
const buttonBuy = document.getElementById('btnBuy'); //Botón comprar
const instrumentsPage = document.getElementById('instruments'); //pantalla 1
const paymentPage = document.getElementById('payment'); //pantalla 2

buttonBuy.addEventListener('click', showPayment);

function showPayment() {
  paymentPage.classList.remove('hidden');
  instrumentsPage.classList.add('hidden');
}

// Alerta de no stock para botón "Agotado"
const buttonDisabled = document.querySelector('.btnDisabled'); //Botón agotado, solo selecciona el primer elemento de la clase

buttonDisabled.addEventListener('click', noStock);

function noStock() {
  alert('Muy pronto lo tendremos en stock');
}

// Menú desplegable en el select mes
const form = document.getElementById('formCard'); //Formulario

for (let i = 1; i <= 12; i++) {
  let optionMonths = document.createElement('option');
  optionMonths.value = i;
  optionMonths.textContent = i;
  form.selectMonth.appendChild(optionMonths);
}

// Menú desplegable en el select año
const yearActual = new Date().getFullYear();

for(let i = yearActual; i <= yearActual + 4; i++){
  let optionYears = document.createElement('option');
	optionYears.value = i;
	optionYears.textContent = i;
	form.selectYear.appendChild(optionYears);
}

// Reflejar Número en TC, no admitir letras en el campo
const numberCreditCard = document.getElementById('dataNumber');
const inputNumberTC = document.getElementById('inputNumberCard');

inputNumberTC.addEventListener('keyup', e => {
  let numberValue = e.target.value;//Guardar el valor del input para abajo generar método replace con expresiones regulares
  inputNumberTC.value = numberValue.replace(/\D/g, '');// \D = Busca las letras y las reemplaza por string vacío
  numberCreditCard.textContent = validator.maskify(inputNumberTC.value); //Enmascarar el número en TC 
  if(numberValue == ''){
    numberCreditCard.textContent = '#### #### #### ####';
  }
});

// Validación tarjeta
const errorValidation = document.getElementById('errorValidation')

inputNumberTC.addEventListener('blur', function(){
  const isValid = validator.isValid(inputNumberTC.value);
  
  if (isValid == false) {
    errorValidation.textContent = "El numero de tarjeta ingresado es inválido"
  } else {
    errorValidation.textContent = ""
  }
});

// Reflejar Nombre en TC 
const nameCreditCard = document.getElementById('dataName');
const inputNameTC = document.getElementById('inputName');

inputNameTC.addEventListener('keyup', e => {
  let nameValue = e.target.value;
  inputNameTC.value = nameValue.replace(/\d/g,'').replace(/\+/g,'');// \d= Dígitos \+= Caracteres reservados menos (-,],\) \W= Ni letra, ni dígito
  // inputNameTC.value = nameValue.replace(/[^A-Za-z\s]/g,'');// ^Negated set
  nameCreditCard.textContent = nameValue;
  if (nameValue == ''){
    nameCreditCard.textContent = 'Nombre titular';
  } 
});

// Reflejar Mes en TC
const monthCreditCard = document.getElementById('month');
const inputMonthTC = document.getElementById('selectMonth');

inputMonthTC.addEventListener('change', e => monthCreditCard.textContent = e.target.value);

// Reflejar año en TC
const inputYearTC = document.getElementById('selectYear');
const yearCreditCard = document.getElementById('year');

inputYearTC.addEventListener('change', e => yearCreditCard.textContent = e.target.value.slice(2));

// Mensaje para tarjeta válida
const btnSubmit = document.getElementById('validDataCard');

btnSubmit.addEventListener('click', showValid);

function showValid() {
  const isValid = validator.isValid(inputNumberTC.value);
  
  if (isValid == false) {
    alert("Ingresa un número de tarjeta que sea válido.");
  } else {
    alert("Tu pago ha sido exitoso");
  }
}