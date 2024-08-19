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

// Retrieving the DOM containing the slideshow
const banner = document.getElementById('banner')
// Retrieving the number of slides
const slidesNum = slides.length

/**
 * @function addDots
 * Function to add points at the bottom of the slideshow according to the number of slides and make them clickable
 */
function addDots() {
	const nbSlides = slides.length
	const dots = document.getElementsByClassName('dots')[0]
	for (let numDot = 1; numDot <= nbSlides; numDot++) {
		let dot = document.createElement('div')
		dot.setAttribute('class', 'dot')
		if (numDot == 1) dot.classList.add('dot_selected')
		dot.setAttribute('name', 'slide_' + numDot)
		dot.addEventListener('click', () => loadNewSlide(getCurrentSlide(),numDot - 1))
		dots.appendChild(dot)
	}
}

// Add dots on DOM
addDots()

/**
 * @function getCurrentSlide
 * Function to get current slide with subtract 1 to correspond to slides index 
 * @return {Number} Index of current slide
 */
function getCurrentSlide() {
	const indexAsString = document
		.getElementsByClassName('dot_selected')[0]
		.getAttribute('name')
		.substring(6)
	return parseInt(indexAsString, 10) - 1
} 

/**
 * @function navigation
 * Function to navigate to next or previous slide
 * @param {boolean} isNext - True : next slide and false : previous slide
 */
function navigation(isNext) {
	const oldIndex = getCurrentSlide()
	let newIndex = 0
	const maxIndex = slidesNum - 1
	if (isNext) {
		newIndex = oldIndex + 1
		if (newIndex > maxIndex) newIndex = 0
	} else {
		newIndex = oldIndex - 1
		if (newIndex < 0) newIndex = maxIndex
	}

	loadNewSlide(oldIndex,newIndex)
}

/**
 * @function loadNewSlide
 * Loads a specific slide and unloads the current slide
 * @param {number} oldIndex - Index of current slide
 * @param {number} newIndex - Index of the slide to load
 */
function loadNewSlide(oldIndex, newIndex) {
	const oldNum = parseInt(oldIndex + 1, 10)
	const newNum = parseInt(newIndex + 1, 10)
	const oldDot = document.getElementsByName('slide_' + oldNum)[0]
	const newDot = document.getElementsByName('slide_' + newNum)[0]

	oldDot.classList.remove('dot_selected')
	newDot.classList.add('dot_selected')

	banner.getElementsByClassName('banner-img')[0].setAttribute('src', './assets/images/slideshow/' + slides[newIndex].image)
	banner.getElementsByTagName('p')[0].innerHTML = slides[newIndex].tagLine
}

/**
 * @function arrowsListeners
 * Add event listeners to slideshow arrows
 */
function arrowsListeners() {
	const next = document.getElementsByClassName('arrow_right')[0]
	next.addEventListener('click', () => {navigation(true)})
	const previous = document.getElementsByClassName('arrow_left')[0]
	previous.addEventListener('click', () => {navigation(false)})
}

arrowsListeners()

// Added listening for right and left directional arrows for slide change
document.onkeydown = event => {
	const code = event.key
	if (code === 'ArrowRight') {
		navigation(true)
	} else if (code === 'ArrowLeft') {
		navigation(false)
	}
}