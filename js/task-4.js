const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {};

  const formElements = this.elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.nodeName === "INPUT" && element.type !== "submit") {
      formData[element.name] = element.value.trim();
    }
  }

  const isFormValid = Object.values(formData).every((value) => value !== "");

  if (isFormValid) {
    console.log(formData);
    this.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
