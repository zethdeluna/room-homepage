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

There are 3 total slider pages. If the user clicks the "next" button (right arrow), the slider will move from page 1 to page 2. If they click again the slider will move from page 2 to page 3. And another click would move from page 3 to page 1. Thanks to React's ```useState```, I can update the current state of the slider and set its initial state using

```javascript
const [page, setPage] = useState(1);
```

With that, the "next" button was then given an ```onClick``` attribute which calls a function that contains the following code:

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

To update the content of the page, I used ```useEffect``` (similar to ```componentDidMount()```) combined with ```useRef```. For example, the hero image was referenced with

```javascript
const heroRef = useRef();
...
<img ref={heroRef} ...>
```

and was updated within the ```useEffect``` function based on what the current slider page number was:

```javascript
useEffect(() => {
    if (page === 1) {
        heroRef.current.src = hero1;
    } else if (page === 2) ...
});
```

The same idea was applied to the text elements.

Now, to get the transition fade effects I just added and removed the following CSS to each slider element:

```css
.out {
    opacity: 0;
}
```

That combined with a ```transition``` attribute in each element's CSS would give that fade effect.

Clicking next (or previous) will add ```.out```, thus fading the slider elements out. We'll then fade the elements back in after the content is updated within the ```useEffect``` function. The current code would look something like this:

```javascript
const nextPage = () => {
    heroRef.current.classList.add("out");
    page < 3 ? setPage(page + 1) : setPage(1);
};

const previousPage = ... ;

useEffect(() => {
    heroRef.current.classList.remove("out");
    if (page === 1) ...
});
```

However, if you run this code you would notice that the slider pages still switch instantly, with no transition effects. This is because the ```out``` class is being added and then immediately being removed. To address this, I placed the page-update code within a ```setTimeout``` function and added a 200ms delay:

```javascript
const nextPage = () => {
    heroRef.current.classList.add("out");
    setTimeout(() => {
        page < 3 ? setPage(page + 1) : setPage(1);
    }, 200);
};
```

This would allow the elements to fade out first, then after 200ms the page number would increment (or decrement if pressing the "previous" button), and then fade back in with the new content. 

If you'd like to take a closer look at how I did it, the complete code is available above in ```/src/components/Slider/Slider.js```.

#### The Scroll
This achievement was far simpler, yet to me, so much more satisfying. Here's a bit of background information: 
- On the mobile version of the website, there is a hamburger menu button at the top left corner (see screenshots). 
- When clicking that button, a navigation menu will open, and the button is replaced with an "X". 
- Clicking that "X" will close the menu.

What I wanted to do was have the navigation bar seamlessly close if the user decides to scroll through the page so that they have more screen space for the main content.

Going back to the "X" button, closing the navigation menu was achieved using a ```closeMenu()``` function which was assigned to the ```onClick``` attribute for the button (see complete code in ```/src/components/Navigation/NavigationMobile.js```). To get the menu to close when the user scrolls, all it took was the following:

```javascript
useEffect(() => {
    window.onscroll = (e) => {
        closeMenu(e);
    };
});
```

Essentially, every time a scroll action is detected, the menu will close. It's a very simple solution, but I found it so satisfying when I was testing it out on my phone.

## Author

- Website - [Zeth De Luna](https://zethdeluna.com)
- Frontend Mentor - [@zethdeluna](https://www.frontendmentor.io/profile/zethdeluna)