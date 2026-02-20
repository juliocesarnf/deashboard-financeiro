# Deashboard Financeiro App

Aplicação web para controle de finanças pessoais desenvolvida com **React + TypeScript**, permitindo registrar receitas e despesas, visualizar saldo, filtrar transações e exportar dados em **CSV** e **PDF**.

---

## Funcionalidades

Este projeto foi construído com foco em:

- ✅ Adicionar receitas e despesas
- ❌ Remover transações
- 🔍 Filtrar por tipo (todas, receitas, despesas)
- 🔎 Buscar por titulo ou categoria
- 📊 Visualizar resumo financeiro
- 📁 Exportar dados em CSV
- 📄 Exportar dados em PDF
- 💾 Persistência automática via LocalStorage

## Tecnologias Utilizadas

- React
- TypeScript
- Context API
- Hooks customizados
- TailwindCSS

---

## 📂 Estrutura do Projeto

```
src/
│
├── components/
│   ├── Card.tsx
│   ├── ExportModal.tsx
│   ├── InfoCards.tsx
│   ├── TransactionForm.tsx
│   └── TransactionList.tsx
│
├── context/
│   └── FinanceContext.tsx
│
├── hooks/
│   └── useLocalStorage.ts
│
├── types/
│   └── transaction.ts
│
├── utils/
│   ├── exportCSV.ts
│   └── exportPDF.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## Como Executar

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```
 ou outra porta que rode o projeto.

---

## Scripts Disponíveis

```bash
npm run dev
npm run build
npm run preview
```

## 📊 Funcionalidades

| Funcionalidade | Status |
|---------------|--------|
| Adicionar transação | ✅ |
| Remover transação | ✅ |
| Filtro por tipo | ✅ |
| Busca por texto | ✅ |
| Persistência local | ✅ |
| Exportação CSV | ✅ |
| Exportação PDF | ✅ |
| Responsividade | ✅ |

---

## Melhorias Futuras

- 🔐 Autenticação de usuário
- 📈 Gráficos financeiros
- 🌙 Dark/Light mode
- 📅 Filtro por período

## Contato

Julio Cesar Martins de Souza - julio2001nf@gmail.com

Link do Projeto: https://github.com/juliocesarnf/deashboard-financeiro
