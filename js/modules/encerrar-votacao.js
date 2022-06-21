export default function initEncerrarVotacao() {
  // Variaveis
  const confirma = document.querySelector('.opcoes-confirma');
  const inicioVotacao = document.querySelector('.visor-container');
  const visorRodape = document.querySelector('.visor-rodape');
  const fimVotacao = document.querySelector('.fim-votacao');
  const branco = document.querySelector('.opcoes-branco');

  // Encerrar a votação
    function encerrarVotacao() {
    inicioVotacao.classList.add('desativar');
    visorRodape.classList.add('desativar');
    fimVotacao.classList.add('ativo');
    branco.disabled = true;
  }
  confirma.addEventListener('click', encerrarVotacao)
}
