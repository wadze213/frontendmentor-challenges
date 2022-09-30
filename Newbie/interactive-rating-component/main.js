const ratingCard = document.querySelector(".rating-card")
const thankYouCard = document.querySelector(".thankyou-card")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rateAgain")

const rating = document.getElementById("rating")
const ratings = document.querySelectorAll(".rating-btn")

submitButton.addEventListener("click", () => {
    thankYouCard.classList.remove("hidden")
    ratingCard.classList.add("hidden")
})

rateAgain.addEventListener("click", () => {
    ratingCard.classList.remove("hidden")
    thankYouCard.classList.add("hidden")
})

ratings.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})