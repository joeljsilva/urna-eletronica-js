export default function initEncerrarVotacao() {
  // Variaveis
  const confirma = document.querySelector('.opcoes-confirma');
  const inicioVotacao = document.querySelector('.visor-container');
  const visorRodape = document.querySelector('.visor-rodape');
  const fimVotacao = document.querySelector('.fim-votacao');
  const opcoes  = document.querySelectorAll('.opcoes');
  const modalContainer = document.querySelector('.modal-container');
  const modalTexto = document.querySelector('.modal p')

  // Encerrar a votação
    function encerrarVotacao() {
    if (visorRodape.classList.contains('ativo')) {
      inicioVotacao.classList.add('desativar');
      visorRodape.classList.add('desativar');
      fimVotacao.classList.add('ativo');
      opcoes.forEach((item) => {
      item.disabled = true;
      })
    } else {
      modalContainer.classList.add('ativo');
      modalTexto.innerText = 'Para CONFIRMAR é necessário digitar pelo menos o número do partido ou votar em BRANCO.'
      opcoes[2].disabled = true;
    }
    
  }
  confirma.addEventListener('click', encerrarVotacao)
}
