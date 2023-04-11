const btnContateMe = document.querySelector(".btn-contate-me");
const contatoFormulario = document.querySelector(".contato-formulario");

btnContateMe.addEventListener("click", () => {
  contatoFormulario.style.display = "block";
});

contatoFormulario.addEventListener("submit", (event) => {
  event.preventDefault();
  // código para enviar o formulário
  contatoFormulario.style.display = "none";
});
lightbox.option({
  resizeDuration: 200,
  wrapAround: true
});
// Seleciona todas as tags <a> dentro da div com a classe .gallery
var modalLinks = document.querySelectorAll(".gallery a");

// Adiciona um evento de clique em cada tag <a>
modalLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Previne o comportamento padrão do clique em um link
    event.preventDefault();
    // Cria um elemento de imagem com o atributo src definido para o valor do atributo href do link
    var modalImg = document.createElement("img");
    modalImg.src = this.href;
    // Cria um elemento div para a janela modal e adiciona o elemento de imagem a ele
    var modal = document.createElement("div");
    modal.classList.add("modal");
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.appendChild(modalImg);
    modal.appendChild(modalContent);
    // Adiciona a janela modal à página
    document.body.appendChild(modal);
    // Adiciona um evento de clique à janela modal para fechá-la quando for clicada
    modal.addEventListener("click", function () {
      modal.remove();
    });
  });
});
