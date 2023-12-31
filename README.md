# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![intro component](images/frontend-intro-component.jpeg)

### Links

- Solution URL: [github](https://github.com/atikahnaz/intro-component-with-signup-form-master/blob/main/index.html)
- Live Site URL: [Intro component with signup form](https://atikahnaz.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

1. to prevent the form auto reload as original after submitting the form. This will display any error message from the input field.
```js
event.preventDefault();
```

2. edit input placeholder and and add image icon.
```js
function showImage(inputContainer) {
    inputContainer.placeholder = '';
    inputContainer.style.backgroundImage = "url('images/icon-error.svg')";
    inputContainer.style.backgroundRepeat = "no-repeat";
    inputContainer.style.backgroundPosition = "right 20px center";
}
```
3. display error message below input container by 
  creating empty div in html and use textContent to display message
```html
<input type="text" id="firstName" placeholder="First Name">
<div id="errorFirst" class="error"></div>
```
```js
errorContainer.textContent = message;
```
4. Fill the box in div (to ensure consistent sizing and layout)
```css
* {
    box-sizing: border-box;
}
```

### Useful resources

- [Wrappping flex items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items) - This is an amazing article which helped me finally understand flex wrap

## Author

- Github - [atikah](https://github.com/atikahnaz)
- Frontend Mentor - [@atikahnaz](https://www.frontendmentor.io/profile/atikahnaz)

