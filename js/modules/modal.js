export default function initModal() {
  const fechar = document.querySelector('.fechar');
  const modalContainer = document.querySelector('.modal-container');
  
  function fecharModal() {
    modalContainer.classList.remove('ativo')
  }
  function fecharModalporFora(event) {
    if (event.target == this) {
      modalContainer.classList.remove('ativo')
    }
  }
  
  fechar.addEventListener('click', fecharModal);
  modalContainer.addEventListener('click', fecharModalporFora)
}


