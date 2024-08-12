const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function addDots() {
	let nb_slides = slides.length
	let num_dot = 1
	let dots = document.getElementsByClassName('dots')[0]
	while (num_dot <= nb_slides) {
		let dot = document.createElement('div')
		dot.setAttribute('class','dot')
		dot.setAttribute('name','slide_'+num_dot)
		dot.setAttribute('onclick','loadSlide('+num_dot+')')
		dots.appendChild(dot)
		num_dot++
	}

	let dotsObject = document.getElementsByClassName('dot')
	dotsObject[0].classList.add('dot_selected')
}

function previous() {
	let banner = document.getElementById('banner')
	let currentDot = document.getElementsByClassName('dot_selected')[0]
	let currentNb = parseInt(currentDot.getAttribute('name').substring(6))
	let currentIndex = parseInt(currentNb - 1)
	let newDot = null
	let newNb = 4
	let newIndex = 3

	if (currentIndex != 0) {
		newNb = currentNb - 1
		newIndex = currentIndex - 1
	}
	newDot = document.getElementsByName("slide_" + newNb)[0]

	currentDot.classList.remove('dot_selected')
	newDot.classList.add('dot_selected')

	banner.getElementsByClassName('banner-img')[0].setAttribute('src', './assets/images/slideshow/' + slides[newIndex].image)
	banner.getElementsByTagName('p')[0].innerHTML = slides[newIndex].tagLine
}

function next() {
	let banner = document.getElementById('banner')
	let currentDot = document.getElementsByClassName('dot_selected')[0]
	let currentNb = parseInt(currentDot.getAttribute('name').substring(6))
	let currentIndex = parseInt(currentNb-1)
	let newDot = null
	let newNb = 1
	let newIndex = 0
	
	if (currentNb != slides.length) {
		newNb = currentNb+1
		newIndex = currentIndex+1		
	}
	newDot = document.getElementsByName("slide_" + newNb)[0]

	currentDot.classList.remove('dot_selected')
	newDot.classList.add('dot_selected')

	banner.getElementsByClassName('banner-img')[0].setAttribute('src','./assets/images/slideshow/'+slides[newIndex].image)
	banner.getElementsByTagName('p')[0].innerHTML = slides[newIndex].tagLine
}

function loadSlide(num) {
	let banner = document.getElementById('banner')
	let currentDot = document.getElementsByClassName('dot_selected')[0]
	let currentNb = parseInt(currentDot.getAttribute('name').substring(6))
	let currentIndex = parseInt(currentNb - 1)
	let newDot = document.getElementsByName("slide_" + num)[0]
	let newNb = num
	let newIndex = num-1

	currentDot.classList.remove('dot_selected')
	newDot.classList.add('dot_selected')

	banner.getElementsByClassName('banner-img')[0].setAttribute('src', './assets/images/slideshow/' + slides[newIndex].image)
	banner.getElementsByTagName('p')[0].innerHTML = slides[newIndex].tagLine
}