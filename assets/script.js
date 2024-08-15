const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById('banner')
const slidesNum = slides.length

function addDots() {
	let nbSlides = slides.length
	let dots = document.getElementsByClassName('dots')[0]
	for (let numDot = 1; numDot <= nbSlides; numDot++) {
		let dot = document.createElement('div')
		dot.setAttribute('class', 'dot')
		if (numDot == 1) { dot.classList.add('dot_selected') }
		dot.setAttribute('name', 'slide_' + numDot)
		dot.addEventListener('click', () => {loadNewSlide(getCurrentSlide(),numDot - 1)}, false)
		dots.appendChild(dot)
	}
}

addDots()

function getCurrentSlide() {
	let oldIndex = parseInt(document.getElementsByClassName('dot_selected')[0].getAttribute('name').substring(6), 10) - 1
	return oldIndex
} 

function navigation(isNext) {
	let oldIndex = getCurrentSlide()
	let newIndex = 0
	let maxIndex = slidesNum - 1
	if (isNext) {
		newIndex = oldIndex + 1
		if (newIndex > maxIndex) {newIndex = 0}		
	} else {
		newIndex = oldIndex - 1
		if (newIndex < 0) {newIndex = maxIndex}
	}

	loadNewSlide(oldIndex,newIndex)
}

function loadNewSlide(oldIndex, newIndex) {
	let oldNum = parseInt(oldIndex + 1, 10)
	let newNum = parseInt(newIndex + 1, 10)
	let oldDot = document.getElementsByName('slide_' + oldNum)[0]
	let newDot = document.getElementsByName('slide_' + newNum)[0]

	oldDot.classList.remove('dot_selected')
	newDot.classList.add('dot_selected')

	banner.getElementsByClassName('banner-img')[0].setAttribute('src', './assets/images/slideshow/' + slides[newIndex].image)
	banner.getElementsByTagName('p')[0].innerHTML = slides[newIndex].tagLine
}

let next = document.getElementsByClassName('arrow_right')[0]
next.addEventListener('click', () => {navigation(true)})
let previous = document.getElementsByClassName('arrow_left')[0]
previous.addEventListener('click', () => {navigation(false)})

document.onkeydown = event => {
	let code = event.key
	if (code == 'ArrowRight') {
		navigation(true)
	} else if (code == 'ArrowLeft') {
		navigation(false)
	}
}