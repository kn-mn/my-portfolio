const toggleButtons = document.querySelectorAll('.project-toggle');
const contactForm = document.getElementById('contactForm');


// Form Validation
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: contactForm.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      alert('Thanks! Your message was sent.');
      contactForm.reset();
    } else {
      return response.json().then(err => Promise.reject(err));
    }
  })
  .catch(err => {
    console.error('Form submission error:', err);
    alert('Oops—there was a problem sending your message.');
  });
});


toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    const details = this.nextElementSibling;
    
    details.classList.toggle('show');
  });
});

// typed.js
var typed = new Typed('#typed', {
  strings: ['knmn', 'Web Developer', 'Project Manager'],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true
});


// Navigation Bar Hamburger 
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

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

const techCheckboxes = document.querySelectorAll('.filter-container input[type="checkbox"]');
const projects = document.querySelectorAll('.project');

function applyTechFilter() {
  const activeTags = Array.from(techCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  projects.forEach(project => {
    const tags = project.dataset.tags.trim().split(/\s+/);
    const visible = activeTags.length === 0
      || activeTags.every(tag => tags.includes(tag));

      if (visible) {
        project.style.removeProperty('display');
        } else {
        project.style.display = 'none';
  }  });
}

techCheckboxes.forEach(cb => cb.addEventListener('change', applyTechFilter));
applyTechFilter();
