// CUSTOM CURSOR

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  if(cursor){

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

  }

});

// MOBILE MENU

const menuToggle =
document.getElementById("menuToggle");

const navMenu =
document.getElementById("navMenu");

if(menuToggle){

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

  });

}

// CONTACT MODAL

const quoteModal =
document.getElementById("quoteModal");

const contactBtn =
document.getElementById("contactBtn");

const heroContactBtn =
document.getElementById("heroContactBtn");

const closeModal =
document.getElementById("closeModal");

// OPEN MODAL

if(contactBtn){

  contactBtn.addEventListener("click", () => {

    quoteModal.classList.add("active");

  });

}

if(heroContactBtn){

  heroContactBtn.addEventListener("click", () => {

    quoteModal.classList.add("active");

  });

}

// CLOSE MODAL

if(closeModal){

  closeModal.addEventListener("click", () => {

    quoteModal.classList.remove("active");

  });

}

// CLOSE OUTSIDE CLICK

window.addEventListener("click", (e) => {

  if(e.target === quoteModal){

    quoteModal.classList.remove("active");

  }

});

// GSAP ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

// HERO

gsap.from(".hero-content",{

  y:100,
  opacity:0,
  duration:1.2

});

// FLOATING STATS

// gsap.from(".floating-card",{

//   scrollTrigger:{
//     trigger:".floating-stats"
//   },

//   y:80,
//   opacity:0,
//   stagger:.2,
//   duration:1

// });

// ABOUT

// gsap.from(".about-text",{

//   scrollTrigger:{
//     trigger:".about"
//   },

//   x:-100,
//   opacity:0,
//   duration:1

// });

gsap.from(".about-image-wrap",{

  scrollTrigger:{
    trigger:".about"
  },

  x:100,
  opacity:0,
  duration:1

});

// SERVICES

// CTA

// gsap.from(".cta-content",{

//   scrollTrigger:{
//     trigger:".cta"
//   },

//   y:100,
//   opacity:0,
//   duration:1

// });