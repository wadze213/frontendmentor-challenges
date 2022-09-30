# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://interactive-rating-component-phi-ten.vercel.app/](https://interactive-rating-component-phi-ten.vercel.app/)

## My process

### Built with

- HTML5
- CSS preProcessor Sass
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

This was a very interesting excercise. It helped me practice the usage of SaSS as a preProcessor, and this new css syntax proved to be very intuitive.
This was the first time I used JavaScript for interactions. I practiced selecting elements from the documents, interact with them and had to write a handful of simple functions.


SaSS variables for easy editing:
```scss
$primary: hsl(25, 97%, 53%);
$white: hsl(0, 0%, 100%);
$lightGrey: hsl(217, 12%, 63%);
$mediumGrey: hsl(216, 12%, 54%);
$darkBlue: hsl(213, 19%, 18%);
$veryDarkBlue: hsl(216, 12%, 8%);
$modalbg: #191E27;
$black: hsl(0, 0%, 0%);
$overpass-font: 'Overpass', sans-serif;
```

SaSS syntax is similar to HTML which makes it intuitive:
```scss
.rating-card{
background-color: $modalbg;
width: 350px;
height: 350px;
padding: 30px;
border-radius: 20px;

position: absolute;
top:0;
bottom: 0;
left: 0;
right: 0;

margin: auto;

display: flex;
flex-direction: column;
justify-content: space-between;

  svg{
      padding: 10px;
  }
  .circle{
      background-color: $darkBlue;
      border-radius: 100%;
  }
  h1{
      color: $white;
      margin: 0;
  }
  p{
      color: $lightGrey;
      margin: 0;
      font-size: 15px;
  }
  .buttons{
      display: flex;
      justify-content: space-between;
      button{
          background-color: $darkBlue;
          border: none;
          height: 3rem;
          width: 3rem;
          border-radius: 50%;
          color: $mediumGrey;
          font-size: 18px;
          &:hover{
              background-color: $primary;
              color: $white;
              cursor: pointer;
          }
          &:focus{
              background-color: $lightGrey;
              color: $white;
              cursor: pointer;
          }
      }
  }
  @media screen and (max-width: 450px) {
      width: 70%;
      min-height: 400px;
  }
}
```

The main challenge for me was using JavaScript, since I am still in the process of learning it properly. My approach to:

- Change modal when button is clicked  
Select Rating and Thank You card and Submit and Rate Again button using their ID.
```javascript
const ratingCard = document.querySelector(".rating-card")
const thankYouCard = document.querySelector(".thankyou-card")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rateAgain")
```
Add and remove the .hidden Class to the Card elements accordingly.
```javascript
submitButton.addEventListener("click", () => {
    thankYouCard.classList.remove("hidden")
    ratingCard.classList.add("hidden")
})
rateAgain.addEventListener("click", () => {
    ratingCard.classList.remove("hidden")
    thankYouCard.classList.add("hidden")
})
```

- Listen to Rating Button selected and display it in Thank You Modal  
First select the Rating Buttons from the Rating Card and Span containing rating in Thank You Modal
```javascript
const rating = document.getElementById("rating")
const ratings = document.querySelectorAll(".rating-btn")
```
Display inner HTML of selected button in the span
```javascript
ratings.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
```

### Continued development

This challenge helped me feel more confident about my HTML and CSS skills and I will be looking forward for larger scales challenges.  
This challenge also served as a good introduction to Javascript and I look forward to learning more. 

For my next project, I am considering using tailwind css.

## Author

- Github - [Danil Rayan Cristales(wadze213)](https://github.com/wadze213)


