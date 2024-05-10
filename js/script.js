// dark-light theme changer

function light(){
    const theme_btn=document.getElementById("light-mode");
    theme_btn.src='brightness.png';

    const change_theme=document.getElementById("nav-bar-theme");
    change_theme.classList.add("light");
  
}
function dark(){
const theme_btn=document.getElementById("light-mode");
theme_btn.src='sun.png';

const change_theme=document.getElementById("body");
change_theme.classList.add('dark');

const change_nav_theme=document.getElementById("nav-bar-theme");
change_nav_theme.classList.add('bg-dark');

const change_footer_theme=document.getElementById("footer-theme");
change_footer_theme.classList.add('bg-dark');

const change_navitem_theme=document.getElementById("nav-item-theme");
change_navitem_theme.classList.add('navbar-theme');

}