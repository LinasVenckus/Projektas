const button = document.querySelector(".button-top");

button.addEventListener("click", () => {
    if (window.location.pathname.includes("index.html")) {
        window.location.href = "pages/contact.html";
    }
    else {
        window.location.href = "contact.html";
    }
});