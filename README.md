# 📊 Sistema de Controle Financeiro com Autenticação

Este projeto é um ambiente de teste para um sistema simples de **controle financeiro pessoal**, com fluxo de **login e cadastro** obrigatório.  
Foi desenvolvido com um design inspirado em apps bancários como o do **Itaú**, com uma interface simples e intuitiva.

O principal objetivo deste ambiente é permitir que a **IA de teste valide a dependência entre o fluxo de autenticação e o acesso ao painel de controle financeiro**, garantindo que usuários não autenticados não possam visualizar ou manipular os dados.

---

## 🎯 Funcionalidades

### 🛠️ Autenticação

- Cadastro de novos usuários (nome, e-mail, senha)
- Login de usuários registrados
- Proteção de rotas: somente usuários autenticados podem acessar o painel financeiro
- Logout

### 💸 Controle Financeiro

- Visualização do **saldo atual**
- Listagem de **transações** com:
  - Data
  - Categoria
  - Valor
  - Descrição
- Ações:
  - Adicionar transação (entrada ou saída)
  - Editar transação existente
  - Excluir transação

### 🎨 Design

- Interface minimalista e responsiva
- Paleta de cores: azul, branco e cinza claro
- Navegação fluida entre telas

### 🤖 Cenário para IA de Teste

O ambiente foi estruturado para facilitar testes automatizados de fluxo de autenticação:

- A IA deve validar que:
  - Usuários não autenticados não conseguem acessar a tela de controle financeiro.
  - Apenas após um login válido o painel financeiro fica acessível.
  - O logout retorna o usuário para a tela de login.

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```
# bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Instale as dependências

```
# Dependendo da plataforma (ex: npm, yarn)
npm install
```

### 3. Execute o projeto
```
# Execute o projeto
npm start
# ou
yarn start
```


