
const btn = document.getElementById('toggle-theme');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


