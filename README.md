# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

<img src='./src/images/room-desktop-screenshot.png' alt='desktop version screenshot' >
<img src='./src/images/room-mobile-screenshot.png' alt='mobile version screenshot' width='300' >

### Links

- [Solution](https://www.frontendmentor.io/solutions/responsive-homepage-built-with-react-hooks-scss-Bqkg7RoV9)
- [Live Site](https://zethdeluna.github.io/room-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
    - React Hooks

### What I learned

While working on this project, I feel most accomplished from learning two things:
- creating a page slider with fade-in/fade-out effects
- closing the navigation menu when scrolling on the mobile site

#### The Slider
To achieve the transitions between pages in the slider, I utilized React's ```useState```, ```useEffect``` and ```useRef```.

The user is able to switch between the pages of a slider by clicking its left and right buttons (seen above in the screenshots). I utilized ```useState``` to update the current page of the slider as follows:

There are 3 total slider pages. If the user clicks the "next button" (right arrow), the slider will move from page 1 to page 2. If they click again the slider will move from page 2 to page 3. And another click would move from page 3 to page 1. Thanks to React's ```useState```, I can update the current state of the slider and set its initial state using

```javascript
const [page, setPage] = useState(1);
```

With that, the "next button" was then given an ```onClick``` attribute which calls a function that contains the following code:

```javascript
page < 3 ? setPage(page + 1) : setPage(1)
```

In the above code, (since there are only 3 pages in the slider) if the current page number is less than 3, then increment the page, but if the current page number is 3, then set the slider back to page 1. So, for now the "next page" function would look like this:

```javascript
const nextPage = () => {
    page < 3 ? setPage(page + 1) : setPage(1);
}
```

and the "previous page" button would perform the opposite:

```javascript
const previousPage = () => {
    page > 1 ? setPage(page - 1) : setPage(3);
}
```

Now, to get the transition fade effects I just added and removed the following CSS to each slider component:

```css
.out {
    opacity: 0;
}
```

For example, I referenced the hero image as such:

```javascript
const heroRef = useRef();
...
<img ref={heroRef} ...>
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
