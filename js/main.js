
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

const faqs = document.querySelectorAll('.faq-wrap'),
    icon = document.querySelectorAll("i")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        faq.childNodes.forEach(child => {
            if(child.nodeName === 'BUTTON'){
                // child.childNodes[1].classList.toggle("fa-solid chevron-up")
                if (faq.classList.contains("active")) {
                        // icon.addClass = "fa-solid chevron-up"
console.log(child.childNodes)
                    child.childNodes[1].classList.remove("fa-chevron-down")
                    child.childNodes[1].classList.add("fa-chevron-up")
                } else {
                    child.childNodes[1].classList.remove("fa-chevron-up")
                    child.childNodes[1].classList.add("fa-chevron-down")
                }
            }
        })
        
    })
})



// let arr = document.querySelectorAll(".faq-button")
// arr.style.color = "red"