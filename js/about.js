
document.getElementById("contactForm")
document.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (name === "") {
    nameError.textContent = "Please enter your name.";
    return;
  }
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    return;
  }
  if (message === "") {
    messageError.textContent = "Please enter your message.";
    return;
  }
  // if (name !== "" && email !== "" && message !== "") {
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("" + message);
    console.log("" + nameError);
    console.log("" + emailError);
    console.log("" + messageError);
    
 
});


