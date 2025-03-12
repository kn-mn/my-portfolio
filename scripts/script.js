const toggleButtons = document.querySelectorAll('.project-toggle');

toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    const details = this.nextElementSibling;
    
    details.classList.toggle('show');
  });
});