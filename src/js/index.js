/* 
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  
      Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  
      Passo 2 - identificar o clique no botão 

      Passo 3 - adicionar a classe ativo nos projetos escondidos 

    Objetivo 2 - esconder o botão de mostrar mais 
  
      Passo 1 - pegar o botão e esconder ele *
*/

//document.getElementById - Método, ('botao') - Argumento

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  
// Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele 
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// Passo 2 - identificar o clique no botão 
botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe ativo nos projetos escondidos 
    // forEach - Para cada, projeto fazer alguma coisa...
    mostrarMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais 
    // Passo 1 - pegar o botão e esconder ele *
    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        // classList - Lista das classes que o objeto tem
        projetoInativo.classList.add('ativo');
    });
}
