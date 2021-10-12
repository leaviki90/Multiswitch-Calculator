// Test IF LocalStorage is accessible
function lsTest() {
  let test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

//
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
  if (stariUnos !== "") {
    let unos = eval(stariUnos);
    setInputValue(unos);
  }
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
    if (lsTest() === true) {
      localStorage.setItem("dataTheme", "classic");
    }
  }
});

switcher2.addEventListener("change", function () {
  if (this.checked === true) {
    document.documentElement.setAttribute("data-theme", "light");
    if (lsTest() === true) {
      localStorage.setItem("dataTheme", "light");
    }
  } else {
    document.documentElement.removeAttribute("data-theme", "light");
  }
});
switcher3.addEventListener("change", function () {
  if (this.checked === true) {
    document.documentElement.setAttribute("data-theme", "dark");
    if (lsTest() === true) {
      localStorage.setItem("dataTheme", "dark");
    }
  } else {
    document.documentElement.removeAttribute("data-theme", "dark");
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  // check if browser or system set theme exists
  const checkLightTheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const checkDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // if local storage saved theme exists
  const dataTheme = localStorage.getItem("dataTheme");
  if (dataTheme) {
    document.documentElement.setAttribute("data-theme", dataTheme);
    if (dataTheme === "light") {
      switcher2.setAttribute("checked", "checked");
      document.documentElement.setAttribute("data-theme", "light");
    } else if (dataTheme === "dark") {
      switcher3.setAttribute("checked", "checked");
      document.documentElement.setAttribute("data-theme", "dark");
    }
    // if local storage saved theme doesnt exist but browser or system set theme exists
  } else if (checkLightTheme) {
    switcher2.checked = true;
    document.documentElement.setAttribute("data-theme", "light");
  } else if (checkDarkTheme) {
    switcher3.checked = true;
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const dataTheme = localStorage.getItem("dataTheme");
    if (e.matches && !dataTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.getElementById("switch3").checked = true;
    }
  });

window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", (e) => {
    const dataTheme = localStorage.getItem("dataTheme");
    if (e.matches && !dataTheme) {
      document.documentElement.setAttribute("data-theme", "light");
      document.getElementById("switch2").checked = true;
    }
  });
