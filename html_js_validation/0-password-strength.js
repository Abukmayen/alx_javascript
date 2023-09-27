
function validatePassword() {
    
    const passwordInput = document.getElementById("password");
    

    const errorElement = document.getElementById("error");
    
   
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;
    

    const password = passwordInput.value;
    

    const errors = [];
    
   
    if (password.length < minLength) {
        errors.push("Password must be at least 8 characters long.");
    }
    
 
    if (!uppercaseRegex.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    

    if (!lowercaseRegex.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    
  
    if (!digitRegex.test(password)) {
        errors.push("Password must contain at least one numeric digit.");
    }
    
  
    if (!specialCharRegex.test(password)) {
        errors.push("Password must contain at least one special character (e.g., !@#$%^&*).");
    }
    
    if (errors.length > 0) {
        errorElement.textContent = errors.join(" ");
        return false; 
    } else {
        errorElement.textContent = ""; 
        return true; 
    }
}


const passwordForm = document.getElementById("passwordForm");
passwordForm.addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault();
});
