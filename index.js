const ratingPage=document.querySelector(".container")
const thanksPage=document.querySelector(".thanks-container")
const submitBtn=document.getElementById("submit")
const rateAgain=document.getElementById("rate-again")
const rating=document.getElementById("rating")
const rates=document.querySelectorAll(".rate")

submitBtn.addEventListener("click", () =>{
    thanksPage.classList.remove("hidden")
    ratingPage.setAttribute("style", "display:none")
})

rateAgain.addEventListener("click", () =>{
    thanksPage.classList.add("hidden")
    ratingPage.setAttribute("style", "display:block")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML=rate.innerHTML
    })
});