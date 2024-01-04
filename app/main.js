const btnCaixaInputElement = document.querySelector(".caixa__input-btn");
const caixaTarefaElement = document.querySelector(".caixa__tarefa");
const inputElement = document.querySelector(".input");
function main (){
btnCaixaInputElement.addEventListener("click", () => {
    const inputValue = inputElement.value;

    if (inputValue.trim() !== "") { // Verifica se o valor não está vazio ou apenas espaços em branco
        // Cria os elementos do DOM
        const tarefaAncoraElement = document.createElement("a");
        tarefaAncoraElement.classList.add("caixa__tarefa-ancora");
        tarefaAncoraElement.textContent = inputValue;

        const btnExcluirElement = document.createElement("button");
        btnExcluirElement.classList.add("caixa__tarefa-btn");
        btnExcluirElement.textContent = "x";

        // Adiciona um ouvinte de evento ao botão de exclusão
        btnExcluirElement.addEventListener("click", () => {
            caixaTarefaElement.removeChild(tarefaAncoraElement);
        });

        // Adiciona os elementos ao DOM
        tarefaAncoraElement.appendChild(btnExcluirElement);
        caixaTarefaElement.appendChild(tarefaAncoraElement);

        // Limpa o campo de entrada
        inputElement.value = "";

        // Salva os dados na localStorage se necessário
        salvarDadosNoLocalStorage();
    }
});

function salvarDadosNoLocalStorage() {
    const tarefas = Array.from(caixaTarefaElement.children).map((element) => element.textContent);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
}
main();

