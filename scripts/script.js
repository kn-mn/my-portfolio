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