// drop down control
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('#main-header .nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
// add class for title in services
const allServiceTitles = document.querySelectorAll('#services .desc h2');
allServiceTitles.forEach(title => {
    title.classList.add('sub-title');
});
// message after booking
const form =document.querySelector('#booking form')
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert('Thank you! Your booking request has been sent successfully. We will contact you soon.');
    this.reset(); 
});