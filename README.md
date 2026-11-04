
# Node Notes

Aplicação full stack para organização de notas, links e tags, desenvolvida com React e Node.js.

O projeto integra uma interface web a uma API REST, permitindo que usuários autenticados organizem suas próprias notas, pesquisem conteúdos e gerenciem informações de perfil.

## Funcionalidades

- Cadastro de usuários com validação de dados.
- Autenticação utilizando JWT.
- Armazenamento seguro de senhas com bcrypt.
- Criação, listagem, visualização e exclusão de notas.
- Organização e filtragem por tags.
- Pesquisa de notas pelo título.
- Associação de links às notas.
- Atualização de dados do perfil e senha.
- Upload de imagem de perfil.
- Avatar padrão para usuários sem foto.
- Opção de mostrar ou ocultar senhas.
- Persistência de dados em banco de dados.
- Controle de acesso às notas por usuário autenticado.

## Tecnologias

### Front-end

- React
- Vite
- JavaScript
- React Router
- Axios
- Styled Components
- React Icons

### Back-end

- Node.js
- Express
- Knex.js
- JWT
- bcryptjs
- Multer

### Banco de dados

- SQLite no ambiente de desenvolvimento.
- PostgreSQL previsto na configuração de produção.

## Estrutura do projeto

```text
node-notes/
├── back-node-notes/
│   ├── src/
│   │   ├── controllers/
│   │   ├── configs/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── utils/
│   ├── knexfile.js
│   └── package.json
│
├── front-node-notess/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
│
└── README.md
```

## Executando localmente

### Pré-requisitos

- Node.js 20 ou superior.
- npm.
- Git.

Clone o repositório:

```bash
git clone https://github.com/PatryckFdias/node-notes.git
cd node-notes
```

### 1. Configurar o back-end

Entre na pasta da API:

```bash
cd back-node-notes
npm ci
```

Crie um arquivo `.env` baseado em `.env.example`:

```env
AUTH_SECRET=SUBSTITUA_POR_UMA_CHAVE_ALEATORIA_FORTE
PORT=3333
```

O valor de `AUTH_SECRET` deve ser gerado individualmente e mantido em segredo.

Execute as migrações do banco SQLite:

```bash
npm run migrate -- --env development
```

Inicie a API:

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3333
```

### 2. Configurar o front-end

Em outro terminal, a partir da raiz do repositório:

```bash
cd front-node-notess
npm ci
```

Crie o arquivo `.env.development`:

```env
VITE_API_URL=http://localhost:3333
```

Inicie o React:

```bash
npm run dev
```

Abra o endereço informado pelo Vite, geralmente:

```text
http://localhost:5173
```

## Principais endpoints

| Método | Endpoint | Descrição |
| --- | --- | --- |
| POST | `/users` | Cadastro de usuário |
| POST | `/sessions` | Autenticação |
| PUT | `/users` | Atualização do perfil |
| PATCH | `/users/avatar` | Atualização do avatar |
| GET | `/notes` | Listagem e pesquisa de notas |
| POST | `/notes` | Criação de nota |
| GET | `/notes/:id` | Detalhes de uma nota |
| DELETE | `/notes/:id` | Exclusão de nota |
| GET | `/tags` | Listagem de tags do usuário |

As rotas protegidas exigem autenticação por token JWT.

## Segurança

O projeto implementa:

- Hash de senhas utilizando bcrypt.
- Autenticação com JWT.
- Validação de dados no cadastro e na atualização do usuário.
- Verificação de propriedade das notas antes de sua visualização ou exclusão.
- Exclusão do hash de senha da resposta de login.
- Separação entre arquivos de configuração locais e código versionado.

Arquivos `.env`, bancos SQLite locais e uploads de usuários não devem ser publicados no repositório.

## Testes realizados

O fluxo principal foi verificado manualmente em ambiente local:

- Cadastro e login.
- Criação e consulta de notas.
- Pesquisa por título e filtragem por tags.
- Persistência após atualização da página.
- Upload e persistência de avatar.
- Separação de dados entre usuários.
- Bloqueio de leitura e exclusão de notas de outros usuários.
- Compilação do front-end com Vite.

Também foram executadas verificações de dependências com `npm audit`.

Esses testes não substituem uma suíte automatizada ou uma auditoria completa de segurança.

## Publicação

O front-end utiliza a variável `VITE_API_URL` para localizar a API.

No ambiente de produção, essa variável deve apontar para a URL pública do back-end durante o processo de build.

O back-end possui configuração de PostgreSQL por meio de `DATABASE_URL` e `NODE_ENV=production`.

O deploy de produção e essa configuração de banco ainda precisam ser validados antes de serem considerados concluídos.

## Próximas melhorias

- Implementar testes automatizados para API e interface.
- Ampliar a validação e o tratamento de erros.
- Revisar dependências com alertas de segurança.
- Validar o deploy com PostgreSQL.
- Adicionar capturas de tela e demonstração pública.

## Status

Aplicação funcional e testada localmente, em evolução.
