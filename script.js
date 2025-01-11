// Validação simples para evitar buscas vazias
document.querySelector('.search-form').addEventListener('submit', (event) => {
    const input = document.querySelector('.search-bar');
    if (!input.value.trim()) {
      event.preventDefault();
      alert('Por favor, insira um termo de busca.');
    }
  });