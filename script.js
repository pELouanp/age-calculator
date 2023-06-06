const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const labelYear = document.querySelector(".year");
const labelMonth = document.querySelector(".month");
const labelDay = document.querySelector(".day");
const resultDay = document.querySelector(".dayRes");
const resultMonth = document.querySelector(".monthRes");
const resultYear = document.querySelector(".yearRes");
const result = document.querySelector("img");
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");

inputDay.addEventListener("keydown", (event) => {
  const number = event.key;

  const formatNb = (inputNb) => {
    if (number > 48 || number < 57) {
      inputNb.maxLength = 2;
    } else {
      inputNb.maxLength = 0;
    }
  };
  formatNb(inputDay);
});
inputMonth.addEventListener("keydown", (event) => {
  const number = event.key;

  const formatNb = (inputNb) => {
    if (number > 48 || number < 57) {
      inputNb.maxLength = 2;
    } else {
      inputNb.maxLength = 0;
    }
  };
  formatNb(inputMonth);
});
inputYear.addEventListener("keydown", (event) => {
  const number = event.key;

  const formatNb = (inputNb) => {
    if (number > 48 || number < 57) {
      inputNb.maxLength = 4;
    } else {
      inputNb.maxLength = 0;
    }
  };
  formatNb(inputYear);
});

let laDate = new Date();
const inputVide = (vide) => {
  vide.textContent = "this field is required";
};
const classInput = (list) => {
  list.classList.add("visibleInput");
};
const classLabel = (list) => {
  list.classList.add("visibleLabel");
};

result.addEventListener("click", () => {
  if (inputDay.value == false) {
    inputVide(error1);
    classInput(inputDay);
    classLabel(labelDay);
  } else if (inputDay.value < 0 || inputDay.value > 31) {
    error1.textContent = "Must be a valid day";
    classInput(inputDay);
    classLabel(labelDay);
  } else {
    inputDay.classList.remove("visibleInput");
    labelDay.classList.remove("visibleLabel");
    inputVide(error1);
    error1.style.color = "#FFF";
  }

  if (inputMonth.value == false) {
    inputVide(error2);
    classInput(inputMonth);
    classLabel(labelMonth);
  } else if (inputMonth.value < 0 || inputMonth.value > 12) {
    error2.textContent = "Must be a valid month";
    classInput(inputMonth);
    classLabel(labelMonth);
  } else {
    inputMonth.classList.remove("visibleInput");
    labelMonth.classList.remove("visibleLabel");
    inputVide(error1);
    error1.style.color = "#FFF";
    inputVide(error2);
    error2.style.color = "#FFF";
  }

  if (inputYear.value == false) {
    inputVide(error3);
    classInput(inputYear);
    classLabel(labelYear);
  } else if (inputYear.value < 1900 || inputYear.value > laDate.getFullYear()) {
    error3.textContent = "Must be a valid year";
    classInput(inputYear);
    classLabel(labelYear);
  } else {
    inputYear.classList.remove("visibleInput");
    labelYear.classList.remove("visibleLabel");
    error3.textContent = "";
  }

  if (inputDay.value > 29 && inputMonth.value == 4) {
    error4.textContent = "Must be a valide date";
    classInput(inputDay);
    classLabel(labelDay);
    classInput(inputMonth);
    classLabel(labelMonth);
    classInput(inputYear);
    classLabel(labelYear);
  } else {
    error4.textContent = "";
  }

  if (
    inputMonth.value <= laDate.getMonth() &&
    inputDay.value > laDate.getDay() + 4
  ) {
    resultYear.textContent = laDate.getFullYear() - inputYear.value;
    resultMonth.textContent = laDate.getMonth() - inputMonth.value;
    resultDay.textContent = 35 + (laDate.getDay() - inputDay.value);
  } else if (
    inputMonth.value <= laDate.getMonth() + 1 &&
    inputDay.value <= laDate.getDay() + 4
  ) {
    resultYear.textContent = laDate.getFullYear() - inputYear.value;
    resultMonth.textContent = laDate.getMonth() + 1 - inputMonth.value;
    resultDay.textContent = laDate.getDay() + 4 - inputDay.value;
  } else if (
    inputMonth.value > laDate.getMonth() &&
    inputDay.value <= laDate.getDay() + 4
  ) {
    resultYear.textContent = laDate.getFullYear() - 1 - inputYear.value;
    resultMonth.textContent = 12 + (laDate.getMonth() + 1 - inputMonth.value);
    resultDay.textContent = laDate.getDay() + 4 - inputDay.value;
  } else if (
    inputMonth.value > laDate.getMonth() &&
    inputDay.value > laDate.getDay()
  ) {
    resultYear.textContent = laDate.getFullYear() - 1 - inputYear.value;
    resultMonth.textContent = 12 + (laDate.getMonth() - inputMonth.value);
    resultDay.textContent = 35 + (laDate.getDay() - inputDay.value);
  }
});
