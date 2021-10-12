//pomocne funkcije
function getInputValue() {
  return document.getElementById("unos").value.trim();
}
function setInputValue(data) {
  return (document.getElementById("unos").value = data);
}

function onClick(value) {
  let stariUnos = getInputValue();
  let unos = stariUnos + value;
  setInputValue(unos);
}
function calculateValue() {
  let stariUnos = getInputValue();
  let unos = eval(stariUnos);
  setInputValue(unos);
}
function clearLastInput() {
  let stariUnos = getInputValue();
  let unos = stariUnos.substr(0, stariUnos.length - 1);
  setInputValue(unos);
}

const switcher1 = document.getElementById("switch1");
const switcher2 = document.getElementById("switch2");
const switcher3 = document.getElementById("switch3");

switcher1.addEventListener("change", function () {
  if (this.checked === true) {
    document.documentElement.removeAttribute("data-theme", "light");
    document.documentElement.removeAttribute("data-theme", "dark");
  }
});

switcher2.addEventListener("change", function () {
  if (this.checked === true) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme", "light");
  }
});
switcher3.addEventListener("change", function () {
  if (this.checked === true) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme", "dark");
  }
});
