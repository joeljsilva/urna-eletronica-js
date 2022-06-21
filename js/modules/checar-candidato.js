import candidato1 from "./candidatos-js/candidato1.js";
import candidato2 from "./candidatos-js/candidato2.js";
import candidato3 from "./candidatos-js/candidato3.js";
import votoNulo from "./candidatos-js/voto-nulo.js";

export default function initChecarCandidato() {
  const teclas = document.querySelectorAll('.numerais-tecla');
  const visorNumeral = document.querySelector('.visor-numOP span');
  // Checar o candidato
  function checarCandidato(indice) {
    visorNumeral.innerText += indice
    if (visorNumeral.innerHTML.length === 2) {
      teclas.forEach((tecla) => {
        tecla.disabled = true;
      })
        if (visorNumeral.innerText == '17') {
          candidato1();
        } else if (visorNumeral.innerText == '13') {
          candidato2();
        } else if (visorNumeral.innerText == '12') {
          candidato3();
        } else {
          votoNulo();
        }
      }
    } 
  // Digitar o número do candidato no visor
  teclas.forEach((item, indice) => {
    item.addEventListener('click', () => {
      checarCandidato(indice)  
    })
  })
}
