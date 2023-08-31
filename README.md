## Antes de começar
Instale as deps rodando o comando `npm ci`.

## Rodando a aplicação
Use o comand `npm run dev` para rodar a aplicação em http://localhost:3000

## Principais tecnologias

#### Framework
- Nextjs
- React

#### UI Components
- Material UI

#### Styling
- TailwindCSS

#### State Management
- Redux & Redux Toolkit

#### Forms 
- react-hook-form

#### Testing 
- vitest

#### Dates
- date-fns

## Rodando os testes

Use o comand `npm test` para rodar todas as suítes de testes. Esse comando roda em modo "watch" por padrão.

Caso queira rodar testes de apenas um arquivo, basta passar o nome do mesmo, ex.: `npm test address.test.ts`.

## Trabalhando com formulários

Esse projeto usa a lib `react-hook-form` para administrar formulários e segue um padrão bem claro:

- cada formulário tem sua própria custom hook, e.g. o `MaterialForm` tem uma hook `useMaterialForm`
- a hook deve expor duas coisas, um `form` e um `schema`

