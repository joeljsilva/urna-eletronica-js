export default function initCorrigirVotacao() {
  const teclas = document.querySelectorAll('.numerais-tecla');
  const corrige = document.querySelector('.opcoes-corrige');
  const visorNumeral = document.querySelector('.visor-numOP span');
  const visorRodape = document.querySelector('.visor-rodape');
  const visorOpcoes = document.querySelectorAll('.visor-opcao');
  const candidatoFoto = document.querySelector('.visor-imagem');
  const votoBrancoAviso = document.querySelector('.visor-votoBranco');
  const branco = document.querySelector('.opcoes-branco');
  function corrigirVotacao() {
    branco.disabled = false;
    visorOpcoes[0].classList.add('ativoN')
    visorNumeral.innerText = ''
    teclas.forEach((tecla) => {
      tecla.disabled = false;
    })
    visorRodape.classList.remove('ativo');
    candidatoFoto.classList.remove('ativo');
    candidatoFoto.classList.remove('desativar');
    votoBrancoAviso.classList.remove('ativo')
    visorOpcoes.forEach((item) => {
      item.classList.remove('ativo');
      item.classList.remove('desativar');
    })
    visorOpcoes[0].classList.remove('desativar');
  }
  corrige.addEventListener('click', corrigirVotacao)
}
