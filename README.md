# Guia de QA para Chatbots de IA

Guia educativo e interativo sobre garantia de qualidade em sistemas conversacionais baseados em inteligência artificial generativa.

> **Escopo real:** este repositório entrega uma página estática de documentação. Ele não é um chatbot, não chama modelos de IA e não implementa backend, RAG, MCP, tools ou automação de testes.

## Objetivo

A página explica como diagnosticar falhas em sistemas conversacionais e como organizar uma estratégia de QA em cinco camadas: testes unitários, testes funcionais, regressão, segurança/adversarial e monitoramento.

O material é voltado a pessoas desenvolvedoras, profissionais de QA e equipes que precisam separar problemas de comportamento, conteúdo, integração, execução e interface.

## O que está disponível

A aplicação contém um glossário interativo com oito termos, uma visão conceitual das camadas Prompt, RAG, MCP, middleware e Tool, um pipeline de QA em cinco etapas, uma triagem com sete sintomas e oito exercícios com feedback imediato.

A pontuação é calculada somente em memória durante a sessão. Recarregar a página reinicia o placar.

## Conceitos e limites

**MCP** significa **Model Context Protocol**. É um protocolo aberto para conectar aplicações de IA a dados, ferramentas e fluxos externos. MCP não substitui autenticação, autorização ou políticas de segurança, que devem ser aplicadas pelo middleware e pelos servidores envolvidos.

As seções sobre backend, RAG, MCP e tools são exemplos conceituais para fins de aprendizagem. Nenhuma integração real é executada por esta aplicação.

## Fora do escopo atual

O projeto não fornece scripts executáveis de teste, dataset dourado, comparação de regressão, monitoramento, analytics, autenticação, persistência, exportação, chamadas a APIs ou armazenamento de dados do usuário. Esses itens não devem ser anunciados como funcionalidades disponíveis sem uma implementação verificável.

## Execução local

Como não há dependências nem etapa de build, basta servir o diretório como conteúdo estático:

```bash
python3 -m http.server 4173
```

Em seguida, acesse `http://localhost:4173/` no navegador.

## Estrutura

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura semântica e conteúdo da página |
| `assets/css/style.css` | Estilos e responsividade |
| `assets/js/app.js` | Interações locais do glossário, triagem e exercícios |
| `tests/app.test.js` | Verificações estáticas de integridade do conteúdo |
| `.github/workflows/ci.yml` | Validação automatizada em cada alteração |
| `.github/workflows/deploy-pages.yml` | Publicação explícita no GitHub Pages |
| `license.txt` | Licença MIT |

## Publicação

A publicação é feita pelo workflow `deploy-pages.yml` após a validação do CI. A URL canônica é <https://ericasouzaqa.github.io/chatai/>.

A URL só deve ser considerada publicada quando responder com HTTP 200 e entregar o `index.html` desta branch. O status do workflow, isoladamente, não substitui essa verificação.

## Licença

Este projeto é distribuído sob a [Licença MIT](license.txt).
