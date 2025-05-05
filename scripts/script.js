// DARK MODE
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  root.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  if (root.getAttribute('data-theme') === 'dark') {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// PROJECT MODALS
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = modal.querySelector('.modal-close');

document.querySelectorAll('.project-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    modalBody.innerHTML = details.innerHTML;
    modal.classList.add('show');
  });
});

modalClose.addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('show');
});

// CONTACT FORM
const contactForm = document.getElementById('contactForm');


// FORM VALIDATION
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
      alert('Your message was sent.');
      contactForm.reset();
    } else {
      return response.json().then(err => Promise.reject(err));
    }
  })
  .catch(err => {
    console.error('Form submission error:', err);
    alert('There was a problem sending your message.');
  });
});

// typed.js
var typed = new Typed('#typed', {
  strings: ['knmn', 'Web Developer', 'Project Manager'],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true
});


// NAVIGATION BAR HAMBURGER
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
menuToggle.addEventListener('click', ()=> nav.classList.toggle('open'));

document.querySelectorAll('header nav a')
  .forEach(link => link.addEventListener('click', ()=> nav.classList.remove('open')));

document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// CHECKLIST FILTERING PROJCETS
const techCheckboxes = document.querySelectorAll('.filter-container input[type="checkbox"]');
const projects = document.querySelectorAll('.project');

function applyTechFilter() {
  const activeTags = Array.from(techCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  projects.forEach(project => {
    const tags = project.dataset.tags.trim().split(/\+/);
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