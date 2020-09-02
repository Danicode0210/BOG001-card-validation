import validator from "./validator.js";

// Cambio de pantallas
const buttonBuy = document.getElementById("btnBuy"); //Botón comprar
const payPage = document.getElementById("Pay"); //pantalla 1
const paymentPage = document.getElementById("payment"); //pantalla 2

buttonBuy.addEventListener("click", showPayment);

function showPayment() {
  paymentPage.classList.remove("hidden");
  payPage.classList.add("hidden");
}

// Alerta de no stock para botón "Agotado"
const buttonDisabled = document.querySelector(".btnDisabled");

buttonDisabled.addEventListener("click", noDisponible);

function noDisponible() {
  alert("Ups! parece que nuestro producto esta agotado");
}

// Menú desplegable en el select mes
const form = document.getElementById("formCard"); //Formulario

for (let i = 1; i <= 12; i++) {
  let optionMonths = document.createElement("option");
  optionMonths.value = i;
  optionMonths.textContent = i;
  form.selectMonth.appendChild(optionMonths);
}

const yearActual = new Date().getFullYear();

for (let i = yearActual; i <= yearActual + 4; i++) {
  let optionYears = document.createElement("option");
  optionYears.value = i;
  optionYears.textContent = i;
  form.selectYear.appendChild(optionYears);
}


const numberCreditCard = document.getElementById("dataNumber");
const inputNumberTC = document.getElementById("inputNumberCard");

inputNumberTC.addEventListener("keyup", (e) => {
  let numberValue = e.target.value;
  inputNumberTC.value = numberValue.replace(/\D/g, "");
  numberCreditCard.textContent = validator.maskify(inputNumberTC.value);
  if (numberValue == "") {
    numberCreditCard.textContent = "#### #### #### ####";
  }
});

// Validación tarjeta
const errorValidation = document.getElementById("errorValidation");

inputNumberTC.addEventListener("blur", function () {
  const isValid = validator.isValid(inputNumberTC.value);

  if (isValid == false) {
    errorValidation.textContent = "El numero de tarjeta ingresado es inválido";
  } else {
    errorValidation.textContent = "";
  }
});

// Reflejar Nombre en TC
const nameCreditCard = document.getElementById("dataName");
const inputNameTC = document.getElementById("inputName");

inputNameTC.addEventListener("keyup", (e) => {
  let nameValue = e.target.value;
  inputNameTC.value = nameValue.replace(/\d/g, "").replace(/\+/g, "");
  nameCreditCard.textContent = nameValue;
  if (nameValue == "") {
    nameCreditCard.textContent = "Nombre titular";
  }
});


const monthCreditCard = document.getElementById("month");
const inputMonthTC = document.getElementById("selectMonth");

inputMonthTC.addEventListener(
  "change",
  (e) => (monthCreditCard.textContent = e.target.value)
);


const inputYearTC = document.getElementById("selectYear");
const yearCreditCard = document.getElementById("year");

inputYearTC.addEventListener(
  "change",
  (e) => (yearCreditCard.textContent = e.target.value.slice(2))
);


const btnSubmit = document.getElementById("validDataCard");

btnSubmit.addEventListener("click", showValid);

function showValid() {
  const isValid = validator.isValid(inputNumberTC.value);

  if (isValid == false) {
    alert("Ingresa un número de tarjeta que sea válido.");
  } else {
    alert("!Perfecto hemos recibido tu pago, por favor revisa tu Email para ver los detalles de tu envío!");
  }
}
