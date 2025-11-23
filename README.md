# 🍕 TRI FRATELLI - CARDÁPIO DIGITAL

## OBJETIVO  

Desenvolver um sistema completo de cardápio digital para a pizzaria Tri Fratelli, com frontend moderno, backend escalável, banco em nuvem, autenticação segura, containerização e integração com IA para recomendações de pizzas.

Link do projeto: https://cardapio-digital-qnfh.vercel.app/

---

## LAYOUT

A interface apresenta um design simples e elegante, com cores e estilos inspirados na identidade visual da pizzaria Tri Fratelli.

### Vídeo do projeto:

https://github.com/user-attachments/assets/3ea8df99-6507-4632-ba43-330a0a390377

### Imagens do projeto:
<img width="1919" height="943" alt="Image" src="https://github.com/user-attachments/assets/e34fc546-93fb-42c1-bfa9-d2aaed4cfe6c" />
<img width="1919" height="940" alt="Image" src="https://github.com/user-attachments/assets/2e2ffaed-04dd-4105-9e5b-7163b8246fba" />
<img width="1903" height="940" alt="Image" src="https://github.com/user-attachments/assets/bbb5c3c8-bcdb-4ec7-9a7e-92b80a16cf40" />
<img width="1900" height="940" alt="Image" src="https://github.com/user-attachments/assets/fa582f70-8691-4f8f-9f9d-31a3211c97d8" />
<img width="1901" height="940" alt="Image" src="https://github.com/user-attachments/assets/a7c5ea09-8410-497a-b7da-7bf356cc9aa7" />
<img width="1901" height="939" alt="Image" src="https://github.com/user-attachments/assets/c4209c32-bcc5-4a5a-8264-74053afbc8c8" />
<img width="1899" height="942" alt="Image" src="https://github.com/user-attachments/assets/5e3a37be-adc9-4431-be40-382fea4661c6" />
<img width="1901" height="938" alt="Image" src="https://github.com/user-attachments/assets/e4c2a8a2-87fc-420e-b3c0-ccb42a828e7d" />

---

## TECNOLOGIAS UTILIZADAS

### Back-end
![Node.js](https://skillicons.dev/icons?i=nodejs)
![Express](https://skillicons.dev/icons?i=express)
![Typescript](https://skillicons.dev/icons?i=typescript)
![Prisma](https://skillicons.dev/icons?i=prisma)
![supabase](https://skillicons.dev/icons?i=supabase)
![postgres](https://skillicons.dev/icons?i=postgres)
![Docker](https://skillicons.dev/icons?i=docker)

- Node.js + Express — API REST completa 
- TypeScript — Tipagem segura 
- Prisma ORM — Mapeamento de dados 
- Supabase (PostgreSQL) — Banco SQL principal 
- bcrypt — Criptografia de senhas 
- JWT — Autenticação e proteção de rotas 
- Docker & Docker Compose — Containerização da aplicação 
- API Gemini — IA generativa para análise e recomendações


### Front-end
![React](https://skillicons.dev/icons?i=react)
![Typescript](https://skillicons.dev/icons?i=typescript)
![Vite](https://skillicons.dev/icons?i=vite)
![Css3](https://skillicons.dev/icons?i=css)
![Axios](https://skillicons.dev/icons?i=axios)

- React – Biblioteca para construção de interfaces interativas  
- TypeScript – Tipagem estática e maior segurança no código  
- Vite – Ferramenta de build e desenvolvimento otimizada  
- Axios – Cliente HTTP para integração com a API  
- CSS3 – Estilização moderna e responsiva  

### Banco de Dados
![Prisma](https://skillicons.dev/icons?i=prisma)
![supabase](https://skillicons.dev/icons?i=supabase)
![postgres](https://skillicons.dev/icons?i=postgres)

- Supabase (PostgreSQL) — Banco de produção em nuvem 
- Prisma ORM — Controle de schema e queries

<img width="1593" height="624" alt="Image" src="https://github.com/user-attachments/assets/21ce0373-7fbc-4712-9bfa-0e959302e433" />

### Criptografia
- Registro e login com criptografia bcrypt 
- Tokens JWT para acesso protegido 
- Middlewares de segurança 
- Variáveis sensíveis via .env

### Containerização
![Docker](https://skillicons.dev/icons?i=docker)
- Docker – Containerização da aplicação para ambiente isolado  
- Dockerfile – Configuração de ambiente e dependências  

### Inteligência Artificial (Gemini 2.5 Flash) 
O sistema utiliza IA para: 
- Recomendações inteligentes com base no desejado, como por exmeplo se deseja uma pizza de portugal, pizza apimentada

---

## ARQUITETURA DA APLICAÇÃO

### Arquitetura Backend 

```
backend/
├── prisma/               # Schema e migrações
├── src/
│   ├── controllers/      # Lógica dos endpoints
│   ├── models/           # Regras de negócio
│   ├── routes/           # Rotas
│   ├── middleware/       # Segurança, validações, auth
│   ├── prismaClient.ts   # Instância do Prisma
│   └── index.ts          # Inicialização do servidor
```

### Arquitetura Frontend 
```
frontend/
├── src/
│   ├── components/       # Componentes de UI
│   ├── api/              # Comunicação via Axios
│   ├── assets/           # Imagens, ícones
│   ├── types/            # Tipagens
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
```

---

## FUNCIONALIDADES

### Backend API
- CRUD completo para gerenciamento dos alimentos
- API RESTful seguindo padrões profissionais de arquitetura
- Validação de dados forte com TypeScript
- Integração com Supabase (PostgreSQL) para persistência confiável em nuvem
- Criptografia de senhas com bcrypt garantindo segurança no armazenamento
- Autenticação JWT com geração e verificação de tokens
- Proteção de rotas privadas via middleware de autorização
- Containerização com Docker, permitindo ambiente padronizado e fácil deploy

### Frontend Interface
- Listagem dinâmica dos produtos com atualização instantânea
- Formulário de cadastro intuitivo com validação e UX amigável
- Exclusão imediata de itens com reatividade visual
- Fluxo completo de autenticação (login, persistência e logout)
- Acesso restrito a áreas protegidas, consumindo endpoints seguros
- Design totalmente responsivo, adaptado para todos os dispositivos

---

## BANCO DE DADOS

### Tabela de usuários:
<img width="1897" height="905" alt="Image" src="https://github.com/user-attachments/assets/0f7d79aa-678a-488b-8ddd-a7d251805116" />

### Tabela de alimentos:
<img width="1899" height="909" alt="Image" src="https://github.com/user-attachments/assets/de4124b9-4e1e-437b-b01d-6c446bad4c77" />

---

## ENDPOINTS DA API

Link do backend: https://cardapio-digital-tmu7.onrender.com/

### Autenticação
```
| Método | Rota              | Descrição                             |
|--------|-------------------|---------------------------------------|
| POST   | /api/auth/register | Registra um novo usuário             |
| POST   | /api/auth/login    | Realiza login e retorna JWT          |
| GET    | /api/auth/me       | Retorna dados do usuário autenticado |
```

### Alimentos
```
| Método | Rota               | Descrição                     |
|--------|--------------------|-------------------------------|
| GET    | /api/foods         | Lista todos os alimentos      |
| POST   | /api/foods         | Cria um novo alimento         |
| PUT    | /api/foods/:id     | Atualiza um alimento          |
| DELETE | /api/foods/:id     | Remove alimento por ID        |
```
<img width="1833" height="980" alt="Image" src="https://github.com/user-attachments/assets/9613eb36-c5d4-412a-a9cc-2380c71e9395" />

### Inteligência Artificial
```
| Método | Rota                | Descrição                                    |
|--------|---------------------|----------------------------------------------|
| POST   | /api/ai/recommend   | Retorna recomendação de pizza via IA Gemini  |
```

### Fluxo de Autenticação

- Cadastro com senha → bcrypt
- Login gera JWT
- Token armazenado no frontend
- Rotas privadas exigem:
```
Authorization: Bearer <token>
```

---
## DIAGRAMA DE ARQUITETURA
```mermaid
flowchart LR
    A[Frontend React] -- Axios --> B[Backend Node.js + Express]

    B --> C[Auth / JWT]
    B --> D[Prisma ORM]
    B --> E[Gemini 2.5 Flash - IA]

    D --> F[Supabase PostgreSQL]

    C --> B
    E --> B
```
---

## INSTALAÇÃO E EXECUÇÃO

### Pré-requisitos
- Node.js 18+  
- npm ou yarn  
- Docker (opcional)

### Backend
```bash
cd backend
npm install
cp .env.example .env
```
Preencher:
```
DATABASE_URL="postgresql://..."
SUPABASE_URL="..."
SUPABASE_KEY="..."
GEMINI_API_KEY="..."
JWT_SECRET="..."
```
```
npx prisma migrate dev
npm run dev
```
### Frontend
```
cd frontend
npm install
cp .env.example .env
npm start
```

A aplicação estará disponível em:  http://localhost:3000

---
## CONTRIBUIÇÕES POR MEMBRO

### João Pedro Guinati
- Refatoração completa do backend de Java para Node.js/TypeScript  
- Estruturação e otimização do projeto backend  
- API REST
- Supabase/PostgreSQL
- Autenticação (bcrypt + JWT)
- Integração com IA (Gemini 2.5 Flash)
- Containerização com Docker  
- Ajustes visuais e de integração no frontend  

### Mateus dos Santos Moreira
- Desenvolvimento inicial do backend em Java  
- Contribuição acadêmica na estrutura base do projeto  
- Documentação dos requisitos e funcionalidades  

### Igor Takagui Reis
- Desenvolvimento completo do frontend em React/TypeScript  
- Design e implementação da interface do usuário  
- Integração com a API do backend  
- Componentização e estrutura modular  
- Estilização responsiva com CSS  

---

## LICENÇA
Projeto acadêmico desenvolvido para a disciplina de *Desenvolvimento Web II – UNIFACEF*.  
Livre para uso educacional e estudos.

---

## DESENVOLVIDO POR:
João Pedro Guinati, Mateus dos Santos Moreira e Igor Takagui Reis

 *UNIFACEF – Engenharia de Software*
 
 *Disciplina: Desenvolvimento Web II*

