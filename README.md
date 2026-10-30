# Node Notes — aplicação full stack

Aplicação de notas com interface em React e API REST em Node.js, incluindo cadastro, autenticação e gerenciamento de notas.

## Tecnologias
- Front-end: React, Vite, Axios e styled-components
- Back-end: Node.js, Express, Knex, JWT e bcryptjs
- Banco: SQLite (desenvolvimento) e PostgreSQL (configuração de produção)

## Estrutura
- `back-node-notes/`: API, rotas e migrações
- `front-node-notess/`: interface React

## Executar localmente
Requer Node.js 20+ e npm. Em um terminal:

```bash
git clone https://github.com/PatryckFdias/node-notes.git
cd node-notes/back-node-notes
npm install
npm run migrate
npm run dev
```

A API estará em `http://localhost:3333` (ou na porta definida por `PORT`). O Knex utiliza SQLite em desenvolvimento.

Em outro terminal, partindo da raiz do repositório:

```bash
cd front-node-notess
npm install
```

Crie `front-node-notess/.env` a partir de `.env.example`, com:

```env
VITE_API_URL=http://localhost:3333
```

Depois execute `npm run dev` e abra a URL informada pelo Vite, normalmente `http://localhost:5173`.

**Nota:** Sem `VITE_API_URL`, o front-end mantém como fallback o endereço remoto utilizado anteriormente. Para produção, configure `VITE_API_URL` na hospedagem com o endereço de sua API.

## Scripts
| Diretório | Comando | Finalidade |
| --- | --- | --- |
| `back-node-notes` | `npm run migrate` | Aplicar migrações |
| `back-node-notes` | `npm run dev` | Iniciar API (nodemon) |
| `front-node-notess` | `npm run dev` | Desenvolvimento Vite |
| `front-node-notess` | `npm run build` | Compilar front-end |

## Configuração
O Knex usa `DATABASE_URL` para a configuração PostgreSQL em produção. Não publique credenciais ou arquivos `.env` contendo segredos.

## Melhorias planejadas
- Testes automatizados de autenticação e rotas.
- Capturas de tela e demonstração navegável.
- Exemplos de requests e responses da API.

*Comandos e estrutura conferidos no código-fonte. A execução ponta a ponta ainda não foi validada nesta revisão.*
