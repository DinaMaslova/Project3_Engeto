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

// const header = document.querySelector("header");
// const ul = document.querySelector("ul");
// const logo = document.querySelector("img");

// header.style.height = "70px";
// ul.style.fontSize = "16px";

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 150) {
//     header.style.height = "60px";
//     ul.style.fontSize = "14px";
//     logo.style.width = "140px";
//   } else {
//     header.style.height = "70px";
//     ul.style.fontSize = "16px";
//     logo.style.width = "160px";
//   }
// });

const body = document.body;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
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

  if (Math.ceil(scrolled) > 900) {
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

const openBtn = document.getElementById("open-button");

openBtn.addEventListener("click", function () {
  document.querySelector("Form").style.display = "block";
  document.querySelector(".open-button").style.display = "none";
});

const closeBtn = document.getElementById("close-button");

closeBtn.addEventListener("click", function () {
  document.querySelector("Form").style.display = "none";
  document.querySelector(".open-button").style.display = "block";
});

const form = document.querySelector("#form");
const emailInput = document.querySelector(".email");
const resultText = document.querySelector(".email");

//-------------------password-match----------------------//

function checkPassword(form) {
  psw1 = form.psw1.value;
  psw2 = form.psw2.value;

  if (psw2 == "") resultText.textContent = "";
  else if (psw1 != psw2) {
    resultText.textContent = "Heslo je nesprávné: Zkuste prosím znovu...";
  } else {
    alert("Heslo je správné");
    return true;
  }
}
