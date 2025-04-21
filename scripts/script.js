const toggleButtons = document.querySelectorAll('.project-toggle');
const contactForm = document.getElementById('contactForm');


// Form Validation
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
