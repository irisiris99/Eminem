'use strict'


const slider = document.querySelector('.slider')

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')


// Button Event
btn2.addEventListener('click', ()=>{
	slider.style.transform = 'translateX(-100vw)';
})

btn3.addEventListener('click', ()=>{
	slider.style.transform = 'translateX(-200vw)';
})

btn4.addEventListener('click', ()=>{
	slider.style.transform = 'translateX(-300vw)';
})

btn1.addEventListener('click', ()=>{
	slider.style.transform = 'translateX(0vw)';
})



// Article3 Slider

const albumSlide = document.querySelector('.wrap-img');

const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')

btn6.addEventListener('click', ()=>{
	albumSlide.style.transform = 'translateX(-100vw)';
})

btn7.addEventListener('click', ()=>{
	albumSlide.style.transform = 'translateX(-200vw)';
})

btn5.addEventListener('click', ()=>{
	albumSlide.style.transform = 'translateX(0vw)';
})


const albumtext = document.getElementsByClassName('ab-text');
const albumimg = document.querySelectorAll('.ab-img img');

for (let i = 0; i < 12; i++) {
	albumtext[i].addEventListener('mouseover', () => {
		albumimg[i].style.opacity = '0.5';
	})
}

for (let i = 0; i < 12; i++) {
	albumtext[i].addEventListener('mouseout', () => {
		albumimg[i].style.opacity = '1';
	})
}

const toggleBtn = document.querySelector('.togglebtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
});