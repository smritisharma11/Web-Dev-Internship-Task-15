# Mini Single-Page Application (SPA) - Vanilla JS

This project is a lightweight Single-Page Application built using pure JavaScript, HTML, and CSS. It demonstrates client-side routing and browser history management without any external frameworks.

## Features
- **Client-Side Routing**: Navigates between Home, About, and Contact views without page reloads.
- **History API**: Uses `pushState` and `popstate` to maintain clean URLs and support the browser's back/forward buttons.
- **Loading Indicators**: Simulates asynchronous data fetching with a visual loader during transitions.
- **Modular Code**: Separated view logic and routing logic.

## How to Run
1. Clone the repository.
2. Open `index.html` in your browser (preferably using a local server like VS Code's "Live Server" to ensure the History API functions correctly with pathnames).

## Learning Outcomes (Interview Prep)
- **SPA vs MPA**: Unlike Multi-Page Applications, SPAs load a single HTML page and dynamically update the DOM.
- **History API**: Allows manipulation of the browser session history, enabling URL changes without refreshing.
- **Performance**: SPAs are faster because they only fetch the necessary data/templates rather than re-downloading entire CSS/JS assets on every click.
