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
//----------------------form-oprava----------------//

// const openBtn = document.getElementById("open-button");

// openBtn.addEventListener("click", function () {
//   document.querySelector("Form").style.display = "block";
//   document.querySelector(".open-button").style.display = "none";
// });

// const closeBtn = document.getElementById("close-button");

// closeBtn.addEventListener("click", function () {
//   document.querySelector("Form").style.display = "none";
//   document.querySelector(".open-button").style.display = "block";
// });

// const form = document.querySelector("#form");
// const emailInput = document.querySelector(".email");
// const resultText = document.querySelector(".email");

//-------------------password-match----------------------//

function checkForm() {
  const p1 = document.getElementById("pass");
  const p2 = document.getElementById("repass");
  const message = document.getElementById("message-psw");
  if (p1.value.length < 6) {
    message.textContent = "heslo musi obsahovat alespon 6 znaku";
    return false;
  }
  if (p1.value != p2.value) {
    message.textContent = "hesla se neshoduji";
    return false;
  }
  message.textContent = "hesla jsou stejna";
  return true;
}
