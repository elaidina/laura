const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav6 = document.getElementById('nav-6');
const nav7 = document.getElementById('nav-7');
const nav8 = document.getElementById('nav-8');
const nav9 = document.getElementById('nav-9');
const nav10 = document.getElementById('nav-10');
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9, nav10];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Czech')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Danish')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Dutch')
    .pauseFor(2500)
    .deleteAll()
    .typeString('French')
    .pauseFor(2500)
    .deleteAll()
    
    .typeString('German').pauseFor(2500)
    .deleteAll()
    .typeString('Italian').pauseFor(2500)
    .deleteAll()
    .typeString('Norwegian').pauseFor(2500)
    .deleteAll()
    .typeString('Slovak').pauseFor(2500)
    .deleteAll()
    .typeString('Spanish')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Swedish')
    .start();