const views = {
    home: () => `<h1>Welcome Home</h1><p>This is the landing page of our Mini SPA.</p>`,
    about: () => `<h1>About Us</h1><p>We are building things with Vanilla JavaScript!</p>`,
    contact: () => `<h1>Contact</h1><p>Feel free to reach out at smritisharma@gmail.com</p>`,
    notFound: () => `<h1>404</h1><p>Page not found.</p>`
};

const routes = {
    "/": views.home,
    "/about": views.about,
    "/contact": views.contact
};

const render = (path) => {
    const app = document.getElementById("app");
    const loader = document.getElementById("loading-indicator");
    
    // Show loading indicator
    loader.classList.remove("hidden");
    app.innerHTML = "";

    // Simulate network delay for "Real Application" feel
    setTimeout(() => {
        const viewTask = routes[path] || views.notFound;
        app.innerHTML = viewTask();
        loader.classList.add("hidden");
    }, 300);
};

const navigate = (e) => {
    if (e.target.matches(".nav-link")) {
        e.preventDefault(); // Prevent page reload
        const url = e.target.getAttribute("href");
        
        // Update URL without refreshing
        window.history.pushState({}, "", url);
        render(url);
    }
};

window.addEventListener("popstate", () => {
    render(window.location.pathname);
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", navigate);
    render(window.location.pathname); // Render initial route
});
