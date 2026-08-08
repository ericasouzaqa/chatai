# Fundamentos de IA: Prompt, MCP, Tools, RAG e Regex

Material interativo para entender, do zero, conceitos utilizados em aplicações de Inteligência Artificial.

O conteúdo apresenta os principais conceitos de forma visual e prática, mostrando como eles se relacionam durante o processamento de uma mensagem.

## O que você vai aprender

* Prompt
* Tools
* MCP
* RAG
* Regex
* Fluxo de uma mensagem em uma aplicação de IA
* Relação entre os diferentes componentes

O objetivo não é apenas conhecer os termos, mas entender **onde cada componente participa e qual é sua função**.

## Como utilizar

Abra o arquivo:

`index.html`

O conteúdo funciona diretamente no navegador.

A recomendação é seguir a sequência apresentada no material:

1. Comece pelo glossário.
2. Entenda cada conceito.
3. Veja onde cada componente participa.
4. Acompanhe a jornada de uma mensagem.
5. Resolva os exercícios.
6. Volte aos conceitos quando necessário.

Não é necessário conhecer IA previamente.

## Visão geral

Uma aplicação de IA pode envolver diferentes componentes trabalhando em conjunto:

```text
Usuário
   ↓
Prompt
   ↓
Aplicação
   ↓
Contexto / RAG
   ↓
Modelo de IA
   ↓
Tools / MCP
   ↓
Sistemas externos
   ↓
Resposta
```

O fluxo pode variar de acordo com a arquitetura da aplicação.

## Aplicação em QA

Os conceitos também podem ser analisados sob a perspectiva de qualidade.

### Prompt

Validar:

* instruções;
* contexto;
* comportamento esperado;
* respostas para diferentes entradas;
* casos de limite.

### Tools

Validar:

* parâmetros enviados;
* parâmetros obrigatórios;
* retorno esperado;
* tratamento de erros;
* entradas inválidas.

### MCP

Validar:

* descoberta das capacidades;
* comunicação entre cliente e servidor;
* execução de ferramentas;
* parâmetros;
* respostas;
* tratamento de falhas.

O MCP padroniza a forma como aplicações fornecem contexto a modelos e permite expor ferramentas, recursos e prompts.

### RAG

Validar:

* qualidade da fonte;
* relevância do contexto recuperado;
* informações utilizadas na resposta;
* comportamento quando não existe informação suficiente.

### Regex

Validar:

* entradas válidas;
* entradas inválidas;
* limites;
* formatos inesperados;
* casos de borda.

## Por que este material foi criado?

Conceitos de IA podem parecer complexos quando apresentados separadamente.

Este projeto busca mostrar o relacionamento entre eles de forma simples, permitindo entender **o que cada peça faz e como ela participa do fluxo de uma aplicação**.

## Estrutura do projeto

```text
chatai/
├── index.html
└── README.md
```

* `index.html` → material interativo.
* `README.md` → apresentação e orientação do projeto.

## Referências

* [Model Context Protocol](https://modelcontextprotocol.io/)
* [MCP — documentação oficial](https://modelcontextprotocol.io/docs/)
* [MCP Python SDK](https://py.sdk.modelcontextprotocol.io/)

O MCP continua evoluindo e a especificação `2026-07-28` introduziu mudanças importantes no protocolo, incluindo um núcleo sem estado, melhorias de autorização e novas possibilidades de extensões.

## Autora

**Erica de Souza**

QA Analyst com foco em qualidade de software, testes de API, automação e aplicações de Inteligência Artificial.

---

> Material criado para estudo e compartilhamento de conhecimento em QA e tecnologia.
