
# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview


### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile screenshot](./screenshots/mobile.png)  
![Tablet screenshot](./screenshots/tablet.png)  
![Desktop screenshot](./screenshots/desktop.png)

## My process
At first I felt a bit overwhelmed because it had been a while since I worked with **TypeScript** in a real project. To get started, I carefully reviewed the challenge requirements to make sure I understood what the UI needed to do.  

From there, I:  
1. **Studied the requirements** and planned how to structure the app in React.  
2. **Built the basic structure** of the project with React + TypeScript and set up Tailwind CSS.  
3. Focused on the **layout** using Flexbox and Tailwind utility classes to get the design as close to the mockups as possible.  
4. Implemented the **toggle functionality** for enabling/disabling extensions and theme switching (light/dark mode).  
5. Added **responsiveness** (mobile-first approach) and ensured hover/focus states for interactive elements.  
6. Finished by refining the **styling** and customizing Tailwind deeply to match the design.  


### Built with

- [React](https://react.dev/) – Library for building user interfaces  
- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework  
- Flexbox – For layout structure  
- Mobile-first workflow – Ensuring responsive design

### What I learned

This project helped me go deeper into **Tailwind CSS**, customizing styles more profoundly and understanding how to structure classes effectively depending on the layout.  

I also learned how to implement a **theme toggle (light/dark mode)** in React with TypeScript, managing state and accessibility attributes.  

```tsx
const [theme, setTheme] = useState<"light" | "dark">("light");

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};
```


### Useful resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – Clear and well-organized reference for utility classes and customization.  
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/) – Helped me with typing props, hooks, and components in TypeScript.  


## Author
- Frontend Mentor - [@tabathamor](https://www.frontendmentor.io/profile/tabathamor)
- Github - [@tabathamor](https://github.com/tabathamor)


## Acknowledgments
Don’t get overwhelmed by the requirements — take a breath and go step by step. You can do it! 💪  
