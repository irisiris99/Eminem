'use strict'

const videoimg = document.querySelectorAll('.video img');
const videotext = document.querySelectorAll('.video h2');



for (let i = 0; i < 12; i++) {
	videotext[i].addEventListener('mouseover', () => {
		videoimg[i].style.transform = 'scale(1.03)';
		videotext[i].style.color = '#EC3131';
		videotext[i].style.textDecoration = 'underline';
	})
}

for (let i = 0; i < 12; i++) {
	videotext[i].addEventListener('mouseout', () => {
		videoimg[i].style.transform = 'scale(1.0)';
	})
}

for (let i = 0; i < 12; i++) {
	videoimg[i].addEventListener('mouseover', () => {
		videoimg[i].style.transform = 'scale(1.03)';
		videotext[i].style.color = '#EC3131';
		videotext[i].style.textDecoration = 'underline';
	})
}

for (let i = 0; i < 12; i++) {
	videoimg[i].addEventListener('mouseout', () => {
		videoimg[i].style.transform = 'scale(1.0)';
		videotext[i].style.color = 'white';
		videotext[i].style.textDecoration = 'none';
	})
}

const videos = document.querySelectorAll('.video');
const button = document.querySelector('.button button');

videos[6].style.display = 'none';
videos[7].style.display = 'none';
videos[8].style.display = 'none';
videos[9].style.display = 'none';
videos[10].style.display = 'none';
videos[11].style.display = 'none';

button.addEventListener('click', () => {
	videos[6].style.display = 'block';
	videos[7].style.display = 'block';
	videos[8].style.display = 'block';
	videos[9].style.display = 'block';
	videos[10].style.display = 'block';
	videos[11].style.display = 'block';
	button.style.display = 'none';
})

const toggleBtn = document.querySelector('.togglebtn');
const menu = document.querySelector('.navbar_menu');
const navbar = document.querySelector('#navbar');

toggleBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
});


