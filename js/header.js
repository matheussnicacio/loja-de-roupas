document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");

  // Certifique-se de que o header foi inserido corretamente
  if (headerContainer) {
    fetch("components/header.html")
      .then((response) => response.text())
      .then((html) => {
        headerContainer.innerHTML = html;

        // Inicialize os botões após inserir o conteúdo do header
        const buttons = document.querySelectorAll(".header-toggler");
        const collapse = document.querySelector(".header-collapse");

        if (collapse) {
          buttons.forEach((button) => {
            button.addEventListener("click", () => {
              collapse.classList.toggle("open");
            });
          });
        }
      });
  }
});
