document.addEventListener('DOMContentLoaded', nav)
function nav(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navigation');
  burger.addEventListener('click', ()=>{
      nav.classList.toggle('show')
  })
}