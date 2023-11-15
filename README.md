
# Desafio Viceri Seidor

Aplicação completa para gerenciamento de heróis, frontend feito em **Angular 16.2.10** e backend em **.Net Core 8.0**.

A API possui rotas para ser realizado o CRUD completo do héroi e dos super poderes, validando erros e exceções.

## Documentação da API

Serão listadas apenas as principais rotas, o restante das informações podem ser consultadas através da documentação no Swagger

#### Retorna todos os heróis

```http
  GET /api/herois
```

#### Retorna um herói

```http
  GET /api/herois/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do herói que você busca |

#### Cria um herói

```http
  POST /api/herois
```

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `createHeroiDto` | `objeto` | **Obrigatório**. Dados do herói a ser cadastrado (Objeto em detalhes no Swagger) |

#### Edita um herói

```http
  PUT /api/herois/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do herói que você deseja alterar |

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `updateHeroiDto` | `objeto` | **Obrigatório**. Dados do herói a ser alterado (Objeto em detalhes no Swagger) |

#### Exclui um herói

```http
  DELETE /api/herois/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do herói que você deseja apagar |

## Frontend

para executar o projeto em sua aplicação deve-se acessar o diretório do projeto através do terminal e executar o comando abaixo:

```cmd
ng serve
```

A aplicação estará disponível no endereço **localhost:4200**.

O Frontend consome a API de hérois realizando criação, listagem, edição e exclusão de heróis.