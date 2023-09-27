

function validateEmail() {

    const emailInput = document.getElementById("email");


    const errorElement = document.getElementById("error");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 
    const email = emailInput.value;

    
    if (!emailRegex.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false; 
    } else {
        errorElement.textContent = ""; 
        return true;
    }
}


const emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault(); 
    }
});
