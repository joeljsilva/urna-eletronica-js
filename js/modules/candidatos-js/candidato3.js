export default function candidato3(){
  const visorRodape = document.querySelector('.visor-rodape');
  const visorOpcoes = document.querySelectorAll('.visor-opcao');
  const candidatoFoto = document.querySelector('.visor-imagem');
  const foto = document.querySelector('.visor-imagem img');
  const nomeCandidato = document.querySelector('.nome-candidato');
  const partidoCandidato = document.querySelector('.partido-candidado');
    visorRodape.classList.add('ativo');
    candidatoFoto.classList.add('ativo');
    visorOpcoes.forEach((item) => {
      item.classList.add('ativo');
    })
    nomeCandidato.innerText = 'Ciro Ferreira Gomes'
    partidoCandidato.innerText = 'PDT'
    foto.setAttribute('src', 'img/candidatos-presidente/ciro.jpg')
}
