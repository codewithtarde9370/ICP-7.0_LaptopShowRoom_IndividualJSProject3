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

const change_navitem_theme=document.getElementById("nav-item-theme");
change_navitem_theme.classList.remove('navbar-theme');
  
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

const change_navitem_theme=document.getElementsByClassName("nav-item-theme");
change_navitem_theme.classList.add('navbar-theme');
change_navitem_theme.classList.remove('navclr');

}