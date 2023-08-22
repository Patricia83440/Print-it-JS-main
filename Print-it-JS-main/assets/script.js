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
];



let cursor = 0


let arrowLeft = document.getElementById("arrow-left")
arrowLeft.addEventListener("click", previous =>{
	// Le curseur est diminué de -1
	// Si cursor = -1 alors cursor = slides.lenght -1
	// Affichage du slide[cursor]

	if (cursor === 0) {
		cursor = slides.length-1
	} else {
		cursor--
	}

	let selectedBanner = slides[cursor]
	
	let currentBanner = document.getElementById("slide")
	
	currentBanner.setAttribute("src",`./assets/images/slideshow/${selectedBanner["image"]}`) 
	document.getElementById("tagline").innerHTML = selectedBanner["tagLine"]

	document.querySelectorAll(".dot").forEach((_dot, index) => {
		_dot.classList.remove("dot_selected")

		if(index === cursor) {
			_dot.classList.add("dot_selected")	
		}

	})

})

let arrowRight = document.getElementById ("arrow-right")
arrowRight.addEventListener("click", next =>{
	//Le curseur est augmenté de 1
	//Si cursor = +1 alors cursor = slides.length +1
	//Affichage du slide [cursor]
	
	if (cursor+1 === slides.length) {
		cursor = 0
	} else {
		cursor++
	}

	let selectedBanner = slides[cursor]
	
	let currentBanner = document.getElementById("slide")

	currentBanner.setAttribute("src",`./assets/images/slideshow/${selectedBanner["image"]}`) 
	document.getElementById("tagline").innerHTML = selectedBanner["tagLine"]
	document.querySelectorAll(".dot").forEach((_dot, index) => {
		_dot.classList.remove("dot_selected")

		if(index === cursor) {
			_dot.classList.add("dot_selected")	
		}

	})
})
// image affichée vient du tableau
	slides.forEach((_slide, index) =>{
	let newDiv = document.createElement("div");
	newDiv.classList.add("dot")

	if (index == 0){
		newDiv.classList.add("dot_selected")
	}
	// ajoute le nouvel élément créé et son contenu dans le DOM
	let currentDiv = document.querySelector(".dots");
	currentDiv.appendChild(newDiv)
})





















