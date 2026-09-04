# Guia de QA para Chatbots de IA

Trilha educativa estática para pessoas iniciantes em **Quality Assurance (QA)** e inteligência artificial. A página ensina como entender sistemas conversacionais, localizar riscos e criar ideias de testes sem depender de uma implementação real de chatbot.

> **Escopo real:** este repositório entrega uma página HTML estática com CSS e JavaScript locais. Ele não executa IA, não chama modelos, não possui backend, banco, login, autenticação, APIs ou integrações reais. Os exemplos de RAG, MCP, Tools, Gateway, Amazon Bedrock e Playwright são conceitos didáticos.

## Objetivo

A trilha começa pelos fundamentos de QA, passa por uma explicação visual de aplicações web e ensina Chrome DevTools antes de avançar para IA generativa e estratégia de QA. O material usa linguagem introdutória e, para cada conceito central, responde: **o que é, para que serve, exemplo simples, onde pode falhar, como um QA pensa e o que testar**.

A sequência também diferencia uma resposta plausível de uma resposta correta, reforça a necessidade de evidência, explica quando registrar um GAP e apresenta preservação da fonte, OCR como recurso auxiliar e revisão humana quando a confiança for baixa.

## Trilha de aprendizagem

| Etapa | Conteúdo |
| --- | --- |
| 01 | Fundamentos de QA: qualidade, papel do QA, teste, validação, inspeção e prevenção |
| 02 | Aplicação web: navegador, front-end, back-end, API, serviços, dados, requisições e respostas |
| 03 | Chrome DevTools: Elements, Console, Network, Application, Performance e Lighthouse, com comandos práticos |
| 04 | Fundamentos de IA generativa e diferença entre resposta plausível e correta |
| 05 | Fluxo conceitual de um chatbot: usuário, interface, prompt, modelo, RAG, Tool, middleware, Gateway e sistemas externos |
| 06 | Como transformar requisitos em testes de prompt |
| 07 | RAG, fonte, evidência e GAP |
| 08 | MCP e Tools |
| 09 | Middleware e Gateway |
| 10 | Amazon Bedrock, Playground e parâmetros de inferência |
| 11–13 | Observabilidade, Playwright, estratégia de QA, glossário, triagem e exercícios interativos |
| 14 | Escalabilidade horizontal, vetores, embeddings e chunks |
| 15 | RAG aprofundado, LangChain e contratos de retrieval |
| 16 | Amazon Bedrock, custos, tokens, caching, roteamento e atribuição |
| 17 | Twilio Sandbox, mocks, stubs e prevenção de consumo acidental |
| 18 | Oficina integrada para PO e testador |

## Camada de aprendizagem para leigos

Antes dos conceitos avançados, a página apresenta uma analogia de restaurante: o site é o salão, a API é o garçom, o servidor é a cozinha e o banco de dados é o caderno de pedidos. Depois, cada termo recebe uma tradução simples, uma pergunta de QA e um exercício de contar o caminho de um botão. A intenção é permitir que uma pessoa sem experiência construa primeiro uma imagem mental e só depois aprenda os nomes técnicos.

## Novos módulos aprofundados

A trilha foi ampliada com escalabilidade horizontal, estado em múltiplas instâncias, embeddings, chunks, bases vetoriais, LangChain, RAG em três fases, estratégias de custo no Amazon Bedrock, configuração conceitual do Twilio Sandbox e uma oficina comparando as perguntas de PO e testador. Os exercícios são locais, determinísticos e não enviam mensagens nem chamam modelos.

As recomendações de custo são didáticas e devem ser confirmadas na documentação e no preço vigente de cada região. O Sandbox da Twilio é tratado como ambiente de teste, não como produção gratuita: exige adesão do número, possui limitações e pode gerar cobrança conforme a política do serviço.

## Interações existentes

A página contém um índice navegável da trilha, aulas introdutórias de QA e aplicações web, fluxo de requisição e resposta, painéis locais do Chrome DevTools, comandos práticos de Console, um mini formulário para inspeção, glossário com oito cards, painel de triagem, perguntas e cenários práticos com feedback e placar local.

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
| `assets/js/app.js` | Interações locais do glossário, triagem, exercícios e abas do DevTools |
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


### Referências adicionais

- [AWS Well-Architected — Horizontal scaling](https://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/wat.concept.horizontal-scaling.en.html)
- [Amazon Bedrock — Cost Optimization](https://aws.amazon.com/bedrock/cost-optimization/)
- [Amazon Bedrock — Track usage and costs](https://docs.aws.amazon.com/bedrock/latest/userguide/cost-management.html)
- [LangChain — Text splitters](https://docs.langchain.com/oss/python/integrations/splitters)
- [LangChain — Embeddings](https://docs.langchain.com/oss/python/integrations/embeddings)
- [LangChain — Vector stores](https://docs.langchain.com/oss/python/integrations/vectorstores)
- [Twilio — WhatsApp Sandbox](https://www.twilio.com/docs/whatsapp/sandbox)
- Referência bibliográfica indicada: *LLMs: As Partes Difíceis de Entender*, Tarsis TP Souza e Jonathan K. Regêncio Junior.
