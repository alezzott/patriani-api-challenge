# Documentação da API de Empreendimentos

Esta documentação descreve os endpoints disponíveis na API de Empreendimentos, que permite gerenciar informações sobre empreendimento, incluindo a criação, listagem, edição e remoção de empreendimentos.

## Configuração de Variáveis de Ambiente

Antes de iniciar a API, é necessário configurar algumas variáveis de ambiente. Essas variáveis são usadas para definir a porta na qual a API será executada e outras configurações específicas do ambiente.

## Endpoints

### Listar Empreendimentos

-   **Método**: `GET`
-   **URL**: `/list`
-   **Descrição**: Retorna uma lista de todas os Empreendimentos cadastradas.
-   **Resposta**: Um objeto JSON contendo um array de Empreendimentos.

### Obter Empreendimentos por ID

-   **Método**: `GET`
-   **URL**: `/:id`
-   **Descrição**: Retorna os detalhes de uma Empreendimento específica, identificada pelo ID fornecido na URL.
-   **Parâmetros**:
-   `id`: O ID da Empreendimento a ser buscada.
-   **Resposta**: Um objeto JSON contendo os detalhes da Empreendimento.

### Criar Empreendimento

-   **Método**: `POST`
-   **URL**: `/create`
-   **Descrição**: Cria uma nova Empreendimento com os dados fornecidos no corpo da requisição.
-   **Corpo da Requisição**:
-   `name`: Nome do Empreendimento.
-   `status`: Status do Empreendimento (RELEASE, SOON, IN_WORKS, READY_TO_LIVE).
-   `purpose`: Propósito do Empreendimento (HOME, COMMERCIAL).
-   `ri_number`: Número de registro do Empreendimento (opcional).
-   `address`: Objeto contendo detalhes do endereço do Empreendimento.
-   **Resposta**: Um objeto JSON contendo os detalhes do Empreendimento criada.

### Editar Empreendimento

-   **Método**: `PATCH`
-   **URL**: `/:id`
-   **Descrição**: Atualiza os dados de uma Empreendimento específica, identificada pelo ID fornecido na URL.
-   **Parâmetros**:
-   `id`: O ID da Empreendimento a ser atualizada.
-   **Corpo da Requisição**:
-   `name`: Nome da Empreendimento (opcional).
-   `status`: Status do Empreendimento (opcional, RELEASE, SOON, IN_WORKS, READY_TO_LIVE).
-   `purpose`: Propósito do Empreendimento (opcional, HOME, COMMERCIAL).
-   `ri_number`: Número de registro do Empreendimento (opcional).
-   `address`: Objeto contendo detalhes do endereço do Empreendimento (opcional).
-   **Resposta**: Um objeto JSON contendo os detalhes do Empreendimento atualizada.

### Remover Empreendimento

-   **Método**: `DELETE`
-   **URL**: `/:id`
-   **Descrição**: Remove um Empreendimento específico, identificada pelo ID fornecido na URL.
-   **Parâmetros**:
-   `id`: O ID do Empreendimento a ser removida.
-   **Resposta**: Um objeto JSON vazio, indicando que a Empreendimento foi removido com sucesso.

## Exemplos de Requisições

### Listar Empreendimentos

```json
GET /list
```

### Obter Empreendimento por ID

```json
GET /1daf2cc4-40a4-4521-bfce-78803df72281
```

### Criar Empreendimento

```json
POST /create
Content-Type: application/json

{
 "name": "Sirius Vila Sonia 3",
 "status": "RELEASE",
 "purpose": "HOME",
 "address": {
    "district": "Vila Bastos",
    "city": "Santo André",
    "street": "Rua Doutor Messuti",
    "state": "SP",
    "number": "339",
    "cep": "60000000"
 }
}
```

### Editar Empreendimento

```json
PATCH /1daf2cc4-40a4-4521-bfce-78803df72281
Content-Type: application/json

{
 "name": "Sirius Vila Sonia 4"
}
```

### Remover Empreendimento

```json
DELETE /1daf2cc4-40a4-4521-bfce-78803df72281
```

## Validação

A API utiliza o Zod para validação de dados. Os esquemas de validação estão definidos em `enterpriseValidation.ts`. Cada endpoint que requer dados no corpo da requisição utiliza o middleware `validationMiddleware` para validar os dados recebidos de acordo com o esquema correspondente.
