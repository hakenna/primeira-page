// script.js

// Seleciona o botão e a área de mensagem pelo ID
const botao = document.getElementById('btnMensagem');
const area = document.getElementById('areaMensagem');

// Quando o usuário clicar no botão, exibe a mensagem
botao.addEventListener('click', () => {
  area.innerText = '🌟 Você é capaz de conquistar tudo o que deseja! 🌟';
});
