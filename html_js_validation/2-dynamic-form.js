


function generateInputFields(numFields) {
  
    const inputContainer = document.getElementById("inputContainer");
    

    inputContainer.innerHTML = "";
    
   
    for (let i = 1; i <= numFields; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.name = `field${i}`; 
        input.placeholder = `Field ${i}`;
        inputContainer.appendChild(input);
    }
}


function validateForm() {
  
    const numFieldsSelect = document.getElementById("numFields");
    const numFields = parseInt(numFieldsSelect.value);
    

    const inputContainer = document.getElementById("inputContainer");
    
   
    const inputFields = inputContainer.querySelectorAll("input[type='text']");
    

    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === "") {
            alert("Please fill in all fields.");
            return false;
        }
    }
    
    return true; 
}


const dynamicForm = document.getElementById("dynamicForm");
dynamicForm.addEventListener("submit", function (event) {
 
    const numFieldsSelect = document.getElementById("numFields");
    const numFields = parseInt(numFieldsSelect.value);
    

    generateInputFields(numFields);
    
    
    if (!validateForm()) {
        event.preventDefault(); 
    }
});
