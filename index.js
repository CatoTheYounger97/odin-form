const form = document.querySelector(".MainContent > form");

const passwordInitial = document.querySelector("#password_initial");
const passwordConfirm = document.querySelector("#password_confirm");

const errorMessage = document.querySelector("#passwordError");

const formSubmit = document.querySelector("#formSubmit");
console.log(formSubmit);

function passwordValidation() 
{
    if (passwordInitial.value != passwordConfirm.value) {

        errorMessage.innerText = "* Passwords do not match";
        passwordConfirm.classList.add("error");
        passwordInitial.classList.add("error");
        
    } else {
        errorMessage.innerText = "";
        passwordConfirm.classList.remove("error");
        passwordInitial.classList.remove("error");
    }

}

passwordInitial.addEventListener("keyup", passwordValidation);
passwordConfirm.addEventListener("keyup", passwordValidation);

form.addEventListener("submit", (event) => {
    if (passwordInitial.value != passwordConfirm.value) {
        event.preventDefault();
    }
});