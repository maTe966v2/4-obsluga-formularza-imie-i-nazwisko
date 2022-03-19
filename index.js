const submitButton = document.querySelector("input[type=submit]");
const firstName = document.querySelector("input[name=fname]").value;
const lastName = document.querySelector("input[name=lname]").value;

const submitForm = (e) => {
    e.preventDefault();
    console.log(`Imie: ${firstName}, Nazwisko: ${lastName}`);
};

submitButton.addEventListener("click", submitForm);
