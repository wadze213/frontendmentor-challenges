# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This challenge allowed me to apply what I learnt about SaSS. It is a powerful tool that allows you to write css in a more efficient way. It also supports variables and functions which is quite helpful.  

SaSS variables make dealing with a lot of colors easy. Altough it was not that helpful in this challenge, I can see how variables makes CSS easier.
```scss
//Primary colors
$red : hsl(0, 78%, 62%);
$cyan : hsl(180, 62%, 55%);
$orange : hsl(34, 97%, 64%);
$blue: hsl(212, 86%, 64%);
//Neutral tones
$veryDarkBlue : hsl(234, 12%, 34%);
$grayishBlue : hsl(229, 6%, 66%);
$veryLightGray : hsl(0, 0%, 98%);
```

I also took some time to test out @mixin and @include 
```scss
@mixin pm($padding-x, $padding-y, $margin-x, $margin-y){
    padding: $padding-x $padding-y;
    margin: $margin-x $margin-y;
}
.p-margin{
    @include pm(0, 0, 1rem, 2rem)
}
```
Again, the syntax of SaSS is quite pleasing and much less confusing that regular css
```scss
.card{
    border-radius: .25rem;
    padding: 1rem;
    width: 300px;
    min-height: 200px;
    box-shadow: (0px 5px 10px $grayishBlue);
    position: relative;
    img{
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
    &:hover{
        background-color: $veryLightGray;
    }
}
```

### Continued development

Next, I will take on another newbie challenge that involves Javacript as well. I also decided to use SaSS for all my projects, unless I go for tailwind.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

