let toggleButtons = document.querySelectorAll('.project-toggle');

for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
    let details = this.nextElementSibling;
    
    if (details.style.display === 'block') {
      details.style.display = 'none';
      this.textContent = 'Show Details';
    } else {
      details.style.display = 'block';
      this.textContent = 'Hide Details';
    }
  });
}