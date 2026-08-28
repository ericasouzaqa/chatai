# Guia de QA para Chatbots de IA

Trilha educativa estática para pessoas iniciantes em **Quality Assurance (QA)** e inteligência artificial. A página ensina como entender sistemas conversacionais, localizar riscos e criar ideias de testes sem depender de uma implementação real de chatbot.

> **Escopo real:** este repositório entrega uma página HTML estática com CSS e JavaScript locais. Ele não executa IA, não chama modelos, não possui backend, banco, login, autenticação, APIs ou integrações reais. Os exemplos de RAG, MCP, Tools, Gateway, Amazon Bedrock e Playwright são conceitos didáticos.

## Objetivo

A trilha começa pelos fundamentos de IA generativa e avança até uma estratégia de QA. O material usa linguagem introdutória e, para cada conceito central, responde: **o que é, para que serve, exemplo simples, onde pode falhar, como um QA pensa e o que testar**.

A sequência também diferencia uma resposta plausível de uma resposta correta, reforça a necessidade de evidência, explica quando registrar um GAP e apresenta preservação da fonte, OCR como recurso auxiliar e revisão humana quando a confiança for baixa.

## Trilha de aprendizagem

| Etapa | Conteúdo |
| --- | --- |
| 01 | Fundamentos de IA generativa e diferença entre resposta plausível e correta |
| 02 | Fluxo conceitual de um chatbot: usuário, interface, prompt, modelo, RAG, Tool, middleware, Gateway e sistemas externos |
| 03 | Como transformar requisitos em testes de prompt |
| 04 | RAG, fonte, evidência e GAP |
| 05 | MCP e Tools |
| 06 | Middleware e Gateway |
| 07 | Amazon Bedrock, Playground e parâmetros de inferência |
| 08 | Observabilidade, OCR auxiliar, revisão humana e preservação da fonte |
| 09 | Playwright para testes de interface, com seus limites |
| 10 | Visão prática de projeto e estratégia de QA em cinco camadas |
| 11–16 | Glossário, arquitetura, triagem e exercícios interativos |

## Interações existentes

A página contém um índice navegável da trilha, glossário com oito cards, explicações em cards, fluxo conceitual, painel de triagem com sete sintomas, quatro perguntas de verdadeiro ou falso e quatro cenários práticos com feedback e placar local.

A pontuação existe somente em memória durante a sessão. Recarregar a página reinicia o placar. Os cards interativos funcionam por clique, Enter e espaço, com foco visível e estados ARIA.

## Limites dos exemplos

Amazon Bedrock é apresentado como um serviço gerenciado da AWS que pode oferecer acesso a modelos de fundação. O Playground é descrito como ambiente de experimentação da console. Playwright é apresentado como ferramenta de testes end-to-end de aplicações web. Nenhum desses serviços ou ferramentas é instalado, chamado ou conectado por esta página.

As seções sobre chatbot, modelo, RAG, MCP, Tools, middleware e Gateway descrevem uma arquitetura conceitual. A página não recebe mensagens de chatbot, não consulta documentos, não executa OCR, não preserva arquivos, não chama ferramentas e não acessa sistemas externos.

## Fora do escopo atual

O projeto não fornece backend, banco de dados, autenticação, chamadas a APIs, dependências de IA, processamento real de documentos, OCR executável, persistência, exportação, observabilidade de produção, dataset de regressão ou testes E2E automatizados com Playwright.

Quando um exemplo não tiver evidência suficiente, a orientação é registrar **GAP** e indicar o que precisa ser investigado. Isso é uma regra ensinada pelo conteúdo, não um mecanismo operacional de análise documental dentro da página.

## Execução local e offline

Como não há dependências de runtime nem etapa de build complexa, sirva o diretório como conteúdo estático:

```bash
python3 -m http.server 4173
```

Acesse `http://localhost:4173/`. Depois do primeiro carregamento, a página não depende de fontes, APIs ou serviços externos para funcionar.

## Estrutura

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura semântica, trilha e conteúdo educativo |
| `assets/css/style.css` | Estilos locais, responsividade e foco acessível |
| `assets/js/app.js` | Interações locais do glossário, triagem e exercícios |
| `tests/app.test.js` | Verificações estáticas de integridade e escopo |
| `.github/workflows/ci.yml` | Testes e build em alterações |
| `.github/workflows/deploy-pages.yml` | Publicação estática no GitHub Pages |
| `license.txt` | Licença MIT |

## Publicação

A publicação web é feita pelo workflow `deploy-pages.yml` após a validação do CI. A URL canônica é <https://ericasouzaqa.github.io/chatai/>.

A publicação não altera o escopo: o GitHub Pages entrega apenas HTML, CSS e JavaScript estáticos. O status do workflow deve ser acompanhado de validação HTTP da URL e dos assets.

## Referências de estudo

As definições sobre Amazon Bedrock, Playground e parâmetros de inferência podem ser aprofundadas na [documentação oficial da AWS](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html). O conceito de Playground está detalhado em [Key terminology](https://docs.aws.amazon.com/bedrock/latest/userguide/key-definitions.html), e os parâmetros em [Influence response generation with inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html). A introdução oficial ao Playwright está em [Playwright Test](https://playwright.dev/docs/intro).

A página não carrega essas referências automaticamente; os links servem apenas para estudo opcional do usuário.

## Licença

Este projeto é distribuído sob a [Licença MIT](license.txt).
