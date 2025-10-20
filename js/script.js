// Seleciona o botão de toggle e todas as logos
const btn = document.getElementById('toggle-theme');
const logos = document.querySelectorAll('.img-trampo, .img-trampodois');

// Alterna tema e logos
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark'); // alterna a classe dark no body

  logos.forEach(logo => {
    if (document.body.classList.contains('dark')) {
      // Tema escuro → logo colorida / normal
      if (logo.classList.contains('img-trampo')) {
        logo.src = './Imagens/pmilogobranca.png';
      } else if (logo.classList.contains('img-trampodois')) {
        logo.src = './Imagens/prefsplogobranca.png';
      }
    } else {
      // Tema claro → logo preta
      if (logo.classList.contains('img-trampo')) {
        logo.src = './Imagens/pmilogopreta.png';
      } else if (logo.classList.contains('img-trampodois')) {
        logo.src = './Imagens/.png';
      }
    }
  });
});

// Scroll suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
