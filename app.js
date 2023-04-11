const btn = document.querySelector('.btn-menu')
const nav = document.querySelector('nav')
const header = document.querySelector('header')

btn.onclick = function (){
    this.classList.toggle('active')
    nav.classList.toggle('active')
}