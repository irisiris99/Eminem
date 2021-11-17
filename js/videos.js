'use strict'

const videoimg = document.querySelectorAll('.video img');
const videotext = document.querySelectorAll('.video h2');



for (let i = 0; i < 8; i++) {
	videotext[i].addEventListener('mouseover', () => {
		videoimg[i].style.transform = 'scale(1.03)';
		videotext[i].style.color = '#EC3131';
		videotext[i].style.textDecoration = 'underline';
	})
}

for (let i = 0; i < 8; i++) {
	videotext[i].addEventListener('mouseout', () => {
		videoimg[i].style.transform = 'scale(1.0)';
	})
}

for (let i = 0; i < 8; i++) {
	videoimg[i].addEventListener('mouseover', () => {
		videoimg[i].style.transform = 'scale(1.03)';
		videotext[i].style.color = '#EC3131';
		videotext[i].style.textDecoration = 'underline';
	})
}

for (let i = 0; i < 8; i++) {
	videoimg[i].addEventListener('mouseout', () => {
		videoimg[i].style.transform = 'scale(1.0)';
		videotext[i].style.color = 'white';
		videotext[i].style.textDecoration = 'none';
	})
}