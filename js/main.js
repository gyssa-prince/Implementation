let menu = document.querySelector('#menu-icon');
let menuIcon = document.querySelector('.navMobile');
let menuRemover = document.querySelector('#menu-icon1');
let navbar = document.querySelector('.MobileNavbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('off')

}
menuRemover.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('off')

}
window.onscroll = () => {
    navbar.classList.remove('active');
}