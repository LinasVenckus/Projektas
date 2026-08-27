const buttons = document.querySelectorAll(".button-top, .button-bottom");
const inputs = document.querySelectorAll("input, textarea");
const errors = document.querySelectorAll(".error");
const submit = document.querySelector("#submit");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (window.location.pathname.includes("index.html")) {
        window.location.href = "pages/contact.html";
    }
    else {
        window.location.href = "contact.html";
    }
  });
});


inputs.forEach((input) => {
  const error = input.nextElementSibling;

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      error.style.display = "block";
      input.classList.add("error-active");
    }
  });

  input.addEventListener("focus", () => {
    error.style.display = "none";
    input.classList.remove("error-active");
  });

});

submit.addEventListener("click", () => {
  inputs.forEach(input => {
    input.value = "";
    input.classList.remove("error-active");

  });

  errors.forEach((error) => {
    error.style.display = "none";
  });

});