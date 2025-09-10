import React from 'react'
import MainContent from '../components/project_1/MainContent_1';
import GoBackButton from '../components/GoBackButton';
import Navbar_1 from '../components/project_1/Navbar_1';
import Footer from '../components/project_1/Footer';
const FirstProject = () => {
  
  return (
     <div className="relative min-h-screen flex flex-col items-start justify-start bg-slate-950 text-white">
      <Navbar_1 />
      <MainContent />
      <GoBackButton />
      <Footer />
    </div>
  )
}

export default FirstProject


/*

check for node and npm versions
node -v
npm -v

How to install nvm (node version manager)

How to install react using vite
npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev

code .  (to open vs code from terminal)

🔹 Difference between JavaScript Libraries and Frameworks

1. Libraries

Libraries are collections of reusable code that provide specific functionalities (like DOM manipulation, HTTP requests, or UI components).

They help developers by reducing the need to write repetitive code.

When using a library, you control the flow of the application — you call library functions when and where you need them.

Example: React, Lodash, jQuery, Axios.

2. Frameworks

Frameworks are more opinionated and complete structures for building applications.

They provide a skeleton or architecture where your code “fills in the gaps.”

In a framework, the framework controls the flow — it calls your code at the right time (this is often described as Inversion of Control).

Frameworks often include built-in solutions for routing, state management, and sometimes even testing.

Example: Angular, Next.js, Vue (when used as a full framework), Express.js.

👉 A simple way to remember:

Library = You are in charge, you call it.

Framework = It’s in charge, it calls you.

📜 History of JavaScript Libraries and Frameworks
1. Early Days (1995 – 2005)

1995: JavaScript was created by Brendan Eich at Netscape in just 10 days.

Early JavaScript was mostly used for simple browser tasks like form validation, image rollovers, and basic interactivity.

Different browsers (Netscape, Internet Explorer) implemented JavaScript differently → causing cross-browser issues.

Developers needed tools to simplify DOM manipulation and handle inconsistencies.

2. Rise of Libraries (2006 – 2010)

2006: jQuery was released by John Resig → became the most popular JavaScript library ever.

Simplified DOM manipulation ($(selector)), animations, AJAX requests.

Solved cross-browser problems with a single, easy API.

Other notable libraries:

Prototype.js (2005) → added OOP-style features.

MooTools (2006) → modular and object-oriented utility library.

Dojo Toolkit (2004) → introduced UI components and data handling.

💡 In this era, libraries dominated because they made web development faster and consistent.

3. Birth of Frameworks (2010 – 2015)

As apps grew bigger, libraries alone weren’t enough → devs needed structured ways to build complex applications.

2010: AngularJS (by Google) → introduced 2-way data binding, MVC architecture.

2011: Backbone.js → gave structure with models, views, and routers.

2012: Ember.js → convention-over-configuration, ambitious framework.

2013: React (by Facebook) → not a framework, but a UI library that introduced the virtual DOM and component-based architecture.

Sparked a new era of declarative, component-driven UIs.

4. Modern Framework Era (2015 – Today)

2016: Angular 2+ → complete rewrite of AngularJS, now TypeScript-based.

2014: Vue.js (by Evan You) → lightweight, progressive framework → quickly gained popularity.

Next.js (2016) → React-based framework with server-side rendering (SSR).

Nuxt.js (2016) → Vue-based equivalent for SSR apps.

Svelte (2016) → compiles at build time, resulting in faster apps.

💡 Today, we see hybrid solutions:

Libraries like React + frameworks like Next.js.

Frameworks like Angular and Vue that give both flexibility and structure.

5. Current & Future Trends (2020 – …)

Full-stack frameworks: Next.js, Remix, Nuxt, RedwoodJS.

Server Components & Edge Computing → rendering closer to users.

JavaScript fatigue slowing down → stability in ecosystem.

Increasing adoption of TypeScript for safety and maintainability.

Growth of meta-frameworks that combine frontend + backend in one ecosystem.

✅ In short:

2000s → Libraries solved DOM & browser issues (jQuery).

2010s → Frameworks solved app structure issues (Angular, Backbone, Ember).

2013+ → Component-based UIs & hybrid solutions (React, Vue, Next.js).

2020s → Full-stack frameworks & server-first approaches.

Would you like me to also make a timeline infographic (visual) of this history so you can use it for notes or presentations?

Why to use React?
 - Highest job demand
 - Large community and ecosystem
 - Less magic
 - Composable / Declarative
 - Active development 

Do I really need to learn JavaScript before React?
Yes, having a solid understanding of JavaScript is essential before diving into React. React is a JavaScript library, so you'll be using JavaScript extensively while working with React. Here are some key JavaScript concepts you should be comfortable with before learning React:


When you might NOT want a framework?

    - Simple static websites
    - Small projects with minimal interactivity
    - Network load concerns
    - Learning curve considerations
    - Maintenance concerns
    - Incompatibility with existing codebase


Why React? It's Composable!
Composable means you can build complex UIs by combining small, reusable pieces called components.

Each component is like a Lego block 🧱 — you build a big structure by putting blocks together.

Example: A Button component can be reused in multiple places (forms, modals, navbars).

function Button({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <div>
      <Button text="Login" />
      <Button text="Signup" />
    </div>
  );
}

Benefits of composability:

Reusability → no need to rewrite the same UI code everywhere.

Maintainability → smaller, focused components are easier to manage.

Scalability → large apps are just compositions of smaller parts.

🌟 Why React is Declarative

Declarative means you describe what the UI should look like, and React handles the how.

Instead of manually updating the DOM step by step (imperative), you tell React the final state and it updates the UI for you.

Example – Imperative (Vanilla JS)
const button = document.createElement("button");
button.textContent = "Click Me";
button.addEventListener("click", () => {
  button.textContent = "Clicked!";
});
document.body.appendChild(button);


👉 You control every step of creating and updating the UI.

Example – Declarative (React)
import { useState } from "react";

function Button() {
  const [clicked, setClicked] = useState(false);

  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? "Clicked!" : "Click Me"}
    </button>
  );
}


👉 You just declare:

“If clicked is true, show ‘Clicked!’ else show ‘Click Me’.”
React takes care of updating the DOM.

✅ In short:

React is Composable → Build big apps from small components.

React is Declarative → Describe the desired UI, React updates the DOM for you.
*/ 