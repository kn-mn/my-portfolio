const toggleButtons = document.querySelectorAll('.project-toggle');
const contactForm = document.getElementById('contactForm');


// Event Listeners
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
  strings: ['Web Developer', 'Project Manager', 'Freelancer'],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});