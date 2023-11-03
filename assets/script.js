// tableaux contenant les différentes images du carrousel et leur tagLine respectives
const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// déclaration d'une variable et comptage du nombre de slides dans le tableau
const slideCounter = slides.length;

// selection de la div parent pour insérer les bulletPoints
const bulletPoints = document.querySelector(".dots");

// ajout du nombre de bulletpoints nécessaire
for (let i = 0; i < slideCounter; i++) {
	const newBulletPoint = document.createElement("span");
	bulletPoints.appendChild(newBulletPoint);
	newBulletPoint.classList.add("dot");
	newBulletPoint.id =i+1;
}

// initialisation du bulletPoint selected
let currentSlide = 1;
let activePosition = document.getElementById(currentSlide);
activePosition.classList.add("dot_selected");

// récupération des éléments HTML
const clickLeft = document.getElementById("leftArrow"); //flèche gauche
const clickRight = document.getElementById("rightArrow"); //flèche droite
const bannerIMG = document.querySelector(".banner-img"); //image
const bannerTagline = document.getElementById("tagLine"); //Tagline

// fonction de MAJ des éléments de la bannière
function bannerMAJ() {
	//ininite loop
	if (currentSlide < 1) {
		currentSlide = slideCounter;
	} else if (currentSlide > slideCounter) {
		currentSlide = 1;
	}
	activePosition = document.getElementById(currentSlide);
	activePosition.classList.add("dot_selected");
	bannerIMG.src = "./assets/images/slideshow/"+slides[currentSlide-1].image;
	bannerTagline.innerHTML = slides[currentSlide-1].tagLine;
}

// fonction au click sur la flèche droite
clickRight.addEventListener("click", function() {
	activePosition.classList.remove("dot_selected");
	currentSlide++;
	bannerMAJ();
});

// fonction au clique sur la flèche gauche
clickLeft.addEventListener("click", function() {
	activePosition.classList.remove("dot_selected");
	currentSlide--;
	bannerMAJ();
});