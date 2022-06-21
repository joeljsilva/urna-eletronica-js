export default function votoNulo(){
  const visorRodape = document.querySelector('.visor-rodape');
  const votoBrancoAviso = document.querySelector('.visor-votoBranco');
  const votoBrancoText = document.querySelector('.voto-branco-p');
  const visorNumeral = document.querySelector('.ativoN');
  const branco = document.querySelector('.opcoes-branco');
  visorRodape.classList.add('ativo');
  votoBrancoAviso.classList.add('ativo')
  votoBrancoText.classList.add('ativo')
  votoBrancoText.classList.remove('desativar')
  visorNumeral.classList.add('desativar')
  branco.disabled = true;
  
}
