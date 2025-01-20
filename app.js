//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ""; // Limpar o campo de input
}

// Função para atualizar a lista de amigos exibida na interface
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpar a lista atual

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Função para realizar o sorteio de amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    const sorteados = [...amigos]; // Copiar a lista para evitar alterações no original
    const resultado = {};

    amigos.forEach((amigo) => {
        let index;
        let sorteado;

        // Garantir que o amigo não sorteie ele mesmo
        do {
            index = Math.floor(Math.random() * sorteados.length);
            sorteado = sorteados[index];
        } while (sorteado === amigo);

        resultado[amigo] = sorteado;
        sorteados.splice(index, 1); // Remover o sorteado da lista
    });

    exibirResultado(resultado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpar o resultado anterior

    for (const [amigo, sorteado] of Object.entries(resultado)) {
        const item = document.createElement("li");
        item.textContent = `${amigo} tirou ${sorteado}`;
        listaResultado.appendChild(item);
    }
}
