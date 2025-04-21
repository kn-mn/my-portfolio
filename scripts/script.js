const toggleButtons = document.querySelectorAll('.project-toggle');
const contactForm = document.getElementById('contactForm');


//
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const subjectValue = document.getElementById('subject').value;
    const messageValue = document.getElementById('message').value;

    if (nameValue === '' || emailValue === '' || subjectValue === '' || messageValue === '') {
        alert('Please fill out all fields.');
      } else {
        alert('Form submitted');
      }
  });

toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    const details = this.nextElementSibling;
    
    details.classList.toggle('show');
  });
});

//
var typed = new Typed('#typed', {
  strings: ['knmn', 'Web Developer', 'Project Manager'],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true
});


// 
const menuToggle = document.querySelector('.menu-toggle');
const nav        = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
 });