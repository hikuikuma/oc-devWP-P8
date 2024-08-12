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
		let dot = document.createElement('button')
		dot.setAttribute('class','dot')
		dot.setAttribute('name','slide_'+num_dot)
		dots.appendChild(dot)
		num_dot++
	}

	let dotsObject = document.getElementsByClassName('dot')
	dotsObject[0].classList.add('dot_selected')
}