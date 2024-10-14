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
  setTimeout(showSlides, 5000); // Change image every 5 seconds
} 

// carousel in main body script

let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Automatically switch slides every 5 seconds
// setInterval(nextSlide, 5000);

// carousel ends
  
  // side navigation toggle 
  function toggleNav() {
  const nav = document.getElementById("side-nav");
  if (nav.style.width === "50%") {
  nav.style.width = "0";
  } else {
  nav.style.width = "50%";
  }
  }
  

  // Show/Hide Back to Top Button based on scroll position
  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });

  // Smooth scroll to top when button is clicked
  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  
   AOS.init({     // initializing animate on scroll library 
   duration: 1000, // Animation duration in ms
   once: true // Whether animation should happen only once while scrolling
 });

