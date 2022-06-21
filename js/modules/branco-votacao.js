export default function initBrancoVotacao() {

}
const candidatoFoto = document.querySelector('.visor-imagem');
const branco = document.querySelector('.opcoes-branco');
const visorRodape = document.querySelector('.visor-rodape');
const opcoes = document.querySelectorAll('.visor-opcao');
const votoBrancoAviso = document.querySelector('.visor-votoBranco');
const visorNumeral = document.querySelector('.visor-numOP span');
const modalContainer = document.querySelector('.modal-container');
const votoBrancoText = document.querySelector('.voto-branco-p');
branco.addEventListener('click',() => {
  branco.disabled = true;
  if (visorNumeral.innerHTML.length > 0) {
   modalContainer.classList.add('ativo');
   votoBrancoText.classList.add('desativar')
  } else {
      votoBrancoText.classList.remove('ativo')
      visorRodape.classList.add('ativo')
      candidatoFoto.classList.add('desativar')
      opcoes.forEach((item) => {
        item.classList.add('desativar');
      })
      votoBrancoAviso.classList.add('ativo')
  }
})