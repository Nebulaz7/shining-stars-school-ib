function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("carousel").style.display = "none";
  document.querySelector.style.display = "none";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("carousel").style.display = "block";
}

   let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 4 seconds
} 


var elScroll = document.querySelectorAll('.scroll'); //pega todos os elementos com a classe .scroll
document.onscroll = function() { //ao rolar a tela...
elScroll.forEach(elScroll => { //cada elemento com a classe .scroll ...
var positionEl = elScroll.getBoundingClientRect(); //pega valores da posição do elemento
var alturaEl = positionEl.top; //pega distancia do topo da tela
if(alturaEl < 300) { //se a distancia do topo for menor que 300
elScroll.classList.add('scroll--show'); //adiciona a classe .scroll--show
}
});
}



  
