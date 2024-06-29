//----------------------------menu---------------------------//

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.classList.remove("hidden");
    menuList.classList.add("visible");
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.classList.remove("visible");
    menuList.classList.add("hidden");
  }
});

//-----------------------------header------------------------//

const header = document.querySelector("header");
const ul = document.querySelector("ul");
const logo = document.querySelector("img");

header.style.height = "70px";
ul.style.fontSize = "16px";

window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    header.style.height = "60px";
    ul.style.fontSize = "14px";
    logo.style.width = "140px";
  } else {
    header.style.height = "70px";
    ul.style.fontSize = "16px";
    logo.style.width = "160px";
  }
});

//-----------------------------Mode---------------------------//

const chng = document.getElementById("mode");

chng.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// ---------------------------------scroll----------------------------------

window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;

  if (Math.ceil(scrolled) > 1000) {
    let toTop = document.querySelector(".top-page");
    toTop.style.display = "block";

    toTop.addEventListener("click", function () {
      toTop.style.display = "none";
    });
  }
});

window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;

  if (Math.ceil(scrolled) < 600) {
    let toTop = document.querySelector(".top-page");
    toTop.style.display = "none";

    toTop.addEventListener("click", function () {
      toTop.style.display = "hidden";
    });
  }
});

function openForm() {
  document.querySelector("Form").style.display = "block";
  document.querySelector(".open-button").style.display = "none";
}

function closeForm() {
  document.querySelector("Form").style.display = "none";
  document.querySelector(".open-button").style.display = "block";
}

const form = document.querySelector("#form");
const emailInput = document.querySelector(".email");
const resultText = document.querySelector(".text");
const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;

  if (emailValue.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    resultText.textContent = "Váš email je ve správném formátu";
    resultText.style.color = "#00ff00";
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Váš email není ve správném formátu";
    resultText.style.color = "#ff0000";
  }

  if (emailValue === "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
    resultText.textContent = "";
  }
});

//-------------------password-match----------------------//

// Function to check Whether both passwords
// is same or not.
function checkPassword(form) {
  psw1 = form.psw1.value;
  psw2 = form.psw2.value;

  // If password not entered
  if (psw1 == "") alert("");
  // If confirm password not entered
  else if (psw2 == "") alert("");
  // If Not same return False.
  else if (psw1 != psw2) {
    alert("Heslo je nesprávné: Zkuste prosím znovu...");
    return false;
  }

  // If same return True.
  else {
    alert("Heslo je správné");
    return true;
  }
}
