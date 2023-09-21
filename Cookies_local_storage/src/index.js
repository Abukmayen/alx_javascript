function setCookies() {
    var firstName = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
  
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);
    var formattedExpirationDate = expirationDate.toUTCString();

    document.cookie = "firstname=" + firstName + "; expires=" + formattedExpirationDate;
    document.cookie = "email=" + email + "; expires=" + formattedExpirationDate;

    window.location.href = "/";
  
   
  }
  function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(name + '=') === 0) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  }

  function showCookies() {
    var email = getCookie("email");
    var firstname = getCookie("firstname");

    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Email: " + email + " - Firstname: " + firstname;
    document.getElementById("cookieInfo").innerHTML = '';
    document.getElementById("cookieInfo").appendChild(paragraph);
  }

  function showForm() {
    var welcomeMessage = document.getElementById("welcomeMessage");
    var loginForm = document.getElementById("loginForm");
    welcomeMessage.innerHTML = ''; 
    loginForm.style.display = "block"; 
  }


  function hideForm() {
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none"; 
  }

 
  function deleteCookiesAndShowForm() {
    document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   
  
    showForm();
}

function showWelcomeMessageOrForm() {
    var firstname = getCookie("firstname");

    if (firstname) {
        var welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.innerHTML = 'Welcome ' + firstname + ' <a href="#" onclick="deleteCookiesAndShowForm();"> (logout)</a>';
    } else {
        
        showForm();
    }
}

showWelcomeMessageOrForm();
