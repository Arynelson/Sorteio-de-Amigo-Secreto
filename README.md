# Sorteio de Amigo Secreto 🎉

Este é um programa simples para realizar sorteios de amigo secreto diretamente no navegador. Ele permite adicionar nomes de participantes, visualizar a lista de amigos e realizar o sorteio, garantindo que ninguém sorteie a si mesmo.

---

## 🚀 Funcionalidades

- Adicionar amigos à lista.
- Exibir a lista de amigos adicionados.
- Realizar o sorteio de amigo secreto de forma justa.
- Exibir os pares sorteados.

---

## 📂 Estrutura do Projeto

```plaintext
.
├── index.html      # Estrutura principal da aplicação.
├── app.js          # Lógica e funcionalidade do programa.
├── style.css       # Estilos (não incluído aqui, mas pode ser adicionado).
├── assets/         # Imagens e ícones usados no projeto.
└── README.md       # Documentação do projeto.

🛠️ Como usar

Clone o repositório:
bash
Copiar
Editar
git clone https://github.com/seu-usuario/sorteio-amigo-secreto.git
cd sorteio-amigo-secreto
Abra o arquivo index.html no navegador.

Adicione os nomes dos participantes:

Digite o nome no campo de texto e clique no botão "Adicionar".
Realize o sorteio:

Clique no botão "Sortear amigo" para exibir os pares sorteados.

📋 Requisitos

Um navegador web moderno (Google Chrome, Mozilla Firefox, etc.).

👩‍💻 Funcionalidades do Código

Arquivo app.js:
adicionarAmigo():
Adiciona um nome à lista após validação (não aceita nomes vazios ou duplicados).
atualizarLista():
Atualiza a exibição da lista de participantes.
sortearAmigo():
Realiza o sorteio, garantindo que ninguém tire a si mesmo.
exibirResultado():
Exibe os pares sorteados no navegador.

✨ Exemplo

Adicione os nomes:

João, Maria, Pedro, Ana.
Clique em Sortear amigo.

O resultado será algo como:

João tirou Maria.
Maria tirou Pedro.
Pedro tirou Ana.
Ana tirou João.
