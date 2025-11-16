# Mock User API

Uma API REST simples desenvolvida com Node.js e Express para gerenciar usuários. Este projeto é ideal para testes e prototipagem rápida. 

## Descrição do Projeto

O **Mock User API** fornece um servidor Express com endpoints para criar, ler, atualizar e deletar usuários. Os dados são armazenados em memória, o que a torna perfeita para testes e desenvolvimento local.

### Arquivos do Projeto

- **`package.json`** - Define as dependências do projeto e scripts de execução
- **`tsconfig.json`** - Configuração do TypeScript com opções de compilação
- **`src/api.ts`** - Arquivo principal da aplicação com todos os endpoints REST

## Instalação e Execução

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Passos para Instalar Localmente

1. **Clone o repositório** (ou acesse o diretório do projeto):
```bash

2. **Instale as dependências**:
```bash
npm install
```

3. **Inicie o servidor**:
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3001` > você pode trocar a porta dentro do arquivo ``api.ts``

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com auto-reload
- `npm start` - Inicia o servidor compilado da pasta `dist/`

## Endpoints da API

### GET /users
Retorna lista de todos os usuários.

**Resposta:** (Status 200)
```json
[
  {
    "id": "uuid-string", // id gerado dinamicamente
    "name": "Fulano de Tal",
    "company": "XPTO",
    "email": "fulano@xpto.com",
    "isActive": true
  }
]
```

### POST /users
Cria um novo usuário.

**Body:**
```json
{
  "name": "João Silva",
  "company": "Tech Corp",
  "email": "joao@techcorp.com"
}
```

**Resposta:** (Status 201)
```json
{
  "id": "uuid-string",
  "name": "João Silva",
  "company": "Tech Corp",
  "email": "joao@techcorp.com",
  "isActive": true
}
```

### GET /users/:id
Retorna um usuário específico.

**Resposta:** (Status 200)
```json
{
  "id": "uuid-string",
  "name": "Fulano de Tal",
  "company": "XPTO",
  "email": "fulano@xpto.com",
  "isActive": true
}
```

### PUT /users/:id
Atualiza um usuário existente.

**Body (todos os campos são opcionais):**
```json
{
  "name": "Novo Nome",
  "company": "Nova Empresa",
  "email": "novo@email.com",
  "isActive": false
}
```

**Resposta:** (Status 200)
```json
{
  "message": "Usuário atualizado com sucesso",
  "user": { /* dados atualizados */ }
}
```

### DELETE /users/:id
Deleta um usuário.

**Resposta:** (Status 200)
```json
{
  "message": "Usuário deletado com sucesso"
}
```

## Tecnologias Utilizadas

- **Express** - Framework web para Node.js
- **TypeScript** - Linguagem tipada para JavaScript
- **UUID** - Geração de IDs únicos
- **CORS** - Suporte a requisições de diferentes origens
- **ts-node-dev** - Execução de TypeScript com auto-reload

## Estrutura de Dados

Um usuário possui os seguintes atributos:

```typescript
interface User {
  id: string;           // UUID único gerado automaticamente
  name: string;         // Nome do usuário
  company: string;      // Empresa do usuário
  email: string;        // Email do usuário
  isActive: boolean;    // Status de atividade
}
```

## Armazenamento de Dados

Os dados são armazenados em memória durante a execução da aplicação. Ao reiniciar o servidor, todos os dados serão perdidos e resetados com os usuários padrão.

## Dependências Principais

- **express** - Servidor HTTP
- **cors** - Middleware para CORS
- **uuid** - Geração de identificadores únicos
- **typescript** - Compilação de TypeScript
- **ts-node** - Execução direta de arquivos TypeScript

## Licença

ISC

---

Para dúvidas ou contribuições, sinta-se à vontade para abrir uma issue ou pull request.
