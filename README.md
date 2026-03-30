# 📇 Lista de Contatos com React + Redux

link para teste: https://lista-de-contatos-react-khaki.vercel.app/

Aplicação de gerenciamento de contatos desenvolvida com **React**, utilizando **Redux** para controle de estado global.

---

## 🚀 Funcionalidades

* ➕ Adicionar contatos
* ✏️ Editar contatos
* ❌ Remover contatos
* 🔄 Atualização automática da interface com Redux
* 📱 Formatação automática de telefone
* ✅ Validação de campos (nome, email e telefone)

---

## 🧠 Conceitos aplicados

* Gerenciamento de estado global com **Redux**
* Uso de **actions** e **reducers**
* Imutabilidade de estado
* Hooks do React:

  * `useState`
  * `useDispatch`
  * `useSelector`
* Componentização
* Styled Components
* Validação de formulário
* Máscara de input (telefone)

---

## 📌 Estrutura do Projeto

```
src/
│
├── actions/
│   └── contatosActions.js
│
├── reducers/
│   └── contatosReducer.js
│
├── components/
│   └── contatos/
│       └── ContatoTemp.jsx
│
├── store/
│   └── index.js
│
├── App.jsx
└── main.jsx
```

---

## 🛠️ Tecnologias utilizadas

* React
* Redux
* React-Redux
* Styled Components
* JavaScript (ES6+)
* Vite

---

## 📥 Instalação e execução

```bash
# Clonar o repositório
git clone <seu-repositorio>

# Entrar na pasta
cd lista-contatos

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 📱 Validações implementadas

### 📞 Telefone

* Formato obrigatório: `(XX) XXXXX-XXXX`
* Formatação automática enquanto digita

### 📧 Email

* Deve conter formato válido (ex: `email@email.com`)

### 🧾 Campos obrigatórios

* Nome
* Email
* Telefone

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em aprendizado prático de:

* Fluxo de dados no Redux
* Separação de responsabilidades
* Boas práticas em aplicações React
* Manipulação de listas e formulários

---

## 💡 Melhorias futuras

* Persistência com LocalStorage ou API
* Filtro de contatos
* Busca por nome
* Melhor tratamento de erros
* Testes automatizados

---


## 👨‍💻 Autor

Desenvolvido por Uillian Freitas

