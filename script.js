// Índice do slide atual
let slideIndex = 0;

// Função para mostrar os slides automaticamente
function showSlides() {
  const slides = document.getElementsByClassName("slide");

  // Esconde todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Avança para o próximo slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Chama a função novamente após 5 segundos
  setTimeout(showSlides, 5000);
}

// Função para mudar manualmente o slide
function changeSlide(n) {
  const slides = document.getElementsByClassName("slide");

  // Atualiza o índice
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Esconde todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";
}

// Função para abrir o cardápio em nova aba
function abrirCardapio() {
  const url = "https://exemplo.com/cardapio.pdf"; // Substitua pelo link real
  window.open(url, "_blank");
}

// Adiciona alertas aos ícones sociais
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault(); // Evita navegação se o link estiver vazio
    const nomeIcone = icon.querySelector('i').className;
    alert(`Você clicou no ícone: ${nomeIcone}`);
  });
});

// Inicia os slides ao carregar a página
document.addEventListener("DOMContentLoaded", showSlides);
