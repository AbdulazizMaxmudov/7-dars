var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elEuro = document.querySelector(".euro");
var elDollor = document.querySelector(".dollar");
var elRubil = document.querySelector(".rubl");
var elButton = document.querySelector(".btn");
var elText = document.querySelector(".tittle");
var elSelect = document.querySelector(".select");
var doolar = 11000;
var yevro = 11700;
var rubl = 150;
elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var pul = elInput.value.trim();
  var selectValue = elSelect.value;
  var kurslar = 0;
  if (selectValue == "EURO"){
    kurslar = `yevro almashinuvi ${pul * yevro} so'm`;
  } else if ( selectValue == "USD") {
    kurslar = `dollar almashinuvi ${pul * doolar} so'm`;
  } else if ( selectValue == "RUB"){
    kurslar = `rubl almashinuvi ${pul * rubl} so'm`;
  } else {
    kurslar = " qayta dan urining"
  }
  elText.textContent = `${kurslar}`;
  
})