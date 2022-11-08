const shareBtnOne = document.getElementById("shareBtnOne");
const shareBtnTwo = document.getElementById("shareBtnTwo");
const shareDiv = document.getElementById("shareDiv");
const authorDiv = document.getElementById("authorDiv");

shareDiv.style.display = "none";

shareBtnOne.addEventListener("click", () => {
    shareDiv.style.display = "flex"
    authorDiv.style.display = "none"
})
shareBtnTwo.addEventListener("click", () => {
    shareDiv.style.display = "none"
    authorDiv.style.display = "flex"
})