export default function initBrancoVotacao() {

}
const candidatoFoto = document.querySelector('.visor-imagem');
const branco = document.querySelector('.opcoes-branco');
const visorRodape = document.querySelector('.visor-rodape');
const opcoes = document.querySelectorAll('.visor-opcao');
const votoBrancoAviso = document.querySelector('.visor-votoBranco');
const visorNumeral = document.querySelector('.visor-numOP span');
const modalContainer = document.querySelector('.modal-container');
const modalTexto = document.querySelector('.modal p')
const votoBrancoText = document.querySelector('.voto-branco-p');
branco.addEventListener('click',() => {
  opcoes[0].classList.remove('ativoN')
  branco.disabled = true;
  if (visorNumeral.innerHTML.length > 0) {
   modalContainer.classList.add('ativo');
   votoBrancoText.classList.add('desativar')
   modalTexto.innerText = 'Para votar em BRANCO o campo de voto deve estar vazio. Aperte CORRIGE para apagar o campo de voto.'
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