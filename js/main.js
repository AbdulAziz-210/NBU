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

// Error validation button
const errorButton = document.querySelector("error-wrap");

// Form submit buttons
const appSubmitBtn = document.querySelector("#app-submit-btn");
const otpSubmitBtn = document.querySelector("#otp-submit-btn");

//back button
const backBtn = document.querySelector("#back-button");
//responsiv back img (Button)
const backImg = document.querySelector("#back-img");

// Form elements
const appForm = document.querySelector("#app-table");
const otpForm = document.querySelector("#otp-table");
const doneSuccess = document.querySelector("#success-modal");

function onSubmitForm(e) {
  e?.preventDefault();

  appForm.classList.add("hidden");
  otpForm.classList.remove("hidden");
}
appForm.addEventListener("submit", onSubmitForm);

// back button onclick function
function onBackClick(e) {
  e?.preventDefault();

  appForm.classList.remove("hidden");
  otpForm.classList.add("hidden");
}
backBtn.addEventListener("click", onBackClick);
backImg.addEventListener("click", onBackClick);

// done btn function
function successForm(e) {
  e?.preventDefault();

  otpForm.classList.add("hidden");
  doneSuccess.classList.remove("hidden");
}
otpForm.addEventListener("submit", successForm);
