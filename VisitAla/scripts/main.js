const header = document.querySelector('header');
const nav = document.querySelector('.navbar');
const menu = document.querySelector('#menu-icon');
menu.onclick = ()=>{
  menu.classList.toggle('bx-x');
  nav.classList.toggle('open');
};
window.addEventListener('scroll',() => {
  header.classList.toggle('white', window.scrollY > 0);
});

