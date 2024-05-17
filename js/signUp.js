function validateForm() {
    let password = document.getElementById("password").value;

     // Check if password is exactly 8 digits
     let passwordPattern = /^\d{8}$/;
     if (!passwordPattern.test(password)) {
         alert("Password must be 8 digits long.");
         return false;
     } else {
         passwordError.textContent = "";
         return true;
     }

}


// dark-light theme changer

function light(){
    const theme_btn=document.getElementById("light-mode")
    theme_btn.src='./icons/brightness.png';

    
const change_theme=document.getElementById("body");
change_theme.classList.remove('dark');

const change_nav_theme=document.getElementById("nav-bar-theme");
change_nav_theme.classList.remove('bg-dark');
change_nav_theme.classList.add('bg-body-tertiary');

const change_footer_theme=document.getElementById("footer-theme");
change_footer_theme.classList.remove('bg-dark');


const change_signup_theme=document.getElementById("sign");
change_signup_theme.classList.add('card-bg');
change_signup_theme.classList.remove('signup-card');
  
}
function dark(){
const theme_btn=document.getElementById("light-mode");
theme_btn.src='./icons/sun.png';

const change_theme=document.getElementById("body");
change_theme.classList.add('dark');

const change_nav_theme=document.getElementById("nav-bar-theme");
change_nav_theme.classList.add('bg-dark');
change_nav_theme.classList.remove('bg-body-tertiary');

const change_footer_theme=document.getElementById("footer-theme");
change_footer_theme.classList.add('bg-dark');

const change_signup_theme=document.getElementById("sign");
change_signup_theme.classList.add('signup-card');
change_signup_theme.classList.remove('card-bg');

}