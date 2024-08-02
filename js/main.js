// let acc = document.querySelectorAll(".faq-button")

// for(let i = 0; i <acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         this.parentElement.classList.toggle("active");

//         let pannel = this.nextElementSibling;

//         if(pannel.style.display === "block") {
//             pannel.style.display = "none";
//         } else {
//             pannel.style.display = "block";
//         }
//     });
// }

const faqs = document.querySelectorAll(".faq-wrap"),
  icon = document.querySelectorAll("i");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    faq.childNodes.forEach((child) => {
      if (child.nodeName === "BUTTON") {
        // child.childNodes[1].classList.toggle("fa-solid chevron-up")
        if (faq.classList.contains("active")) {
          // icon.addClass = "fa-solid chevron-up"
          console.log(child.childNodes);
          child.childNodes[1].classList.remove("fa-chevron-down");
          child.childNodes[1].classList.add("fa-chevron-up");
        } else {
          child.childNodes[1].classList.remove("fa-chevron-up");
          child.childNodes[1].classList.add("fa-chevron-down");
        }
      }
    });
  });
});

//  Hamburger

// const hamburgerBtn = document.querySelector(".header__hamburger-btn"),
//     nav = document.querySelector(".header-navbar")

// hamburgerBtn.forEach(btn => {
//     btn.addEventListener("click", () => {
//         nav.classList.add("show")
//         nav.classList.remove("hide")
//         document.body.style.overflow = "hidden"
//     })
// })

// \\ //

const navbar = document.querySelector(".header-navbar"),
  burgerBtn = document.querySelector(".header__hamburger-btn"),
  closeImg = document.querySelector(".close-img"),
  hamburgerImg = document.querySelector(".hamburger-img");

burgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("block");
  closeImg.classList.toggle("block");
  hamburgerImg.classList.toggle("none");

  // animation //
  navbar.classList.add("fade");
  navbar.classList.remove("fade");
});

// // Error validation button
// const errorButton = document.querySelector("error-wrap");

// // Form submit buttons
// const appSubmitBtn = document.querySelector("#app-submit-btn");
// const otpSubmitBtn = document.querySelector("#otp-submit-btn");

// // Form elements
// const appForm = document.querySelector("#app-table");
// const otpForm = document.querySelector("#otp-table");

// function onSubmitForm(e) {
//   e?.preventDefault();

//   appForm.classList.add("hidden");
//   otpForm.classList.remove("hidden");
// }

// appForm.addEventListener("submit", onSubmitForm);

// Error validation button
const errorButton = document.querySelector("error-wrap");

// Form submit buttons
const appSubmitBtn = document.querySelector("#app-submit-btn");
const otpSubmitBtn = document.querySelector("#otp-submit-btn");

// Form elements
const appForm = document.querySelector("#app-table");
const otpForm = document.querySelector("#otp-table");

function onSubmitForm(e) {
  e?.preventDefault();

  appForm.classList.add("hidden");
  otpForm.classList.remove("hidden");
}

appForm.addEventListener("submit", onSubmitForm);
