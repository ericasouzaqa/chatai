# Evidências da auditoria — estado inicial

Data da inspeção: 2026-08-27/28 (fuso do usuário).

## Inventário

O branch `main` contém somente `README.md`, `index.html` e `license.txt`. Não há `package.json`, lockfile, diretório de testes, workflow versionado, Dockerfile, CNAME, configuração de bundler ou código de backend.

O `index.html` é uma página estática em um único arquivo, com 7 seções, 8 cards de glossário, 7 opções de triagem, 4 questões verdadeiro/falso e 4 cenários de múltipla escolha. O JavaScript é inline e apenas alterna classes, exibe veredictos e incrementa uma pontuação em memória.

## Produto real

A aplicação é um guia educativo interativo sobre Prompt, RAG, MCP, Tool, Regex e QA. Não é um chatbot, não chama modelos, não possui backend, não consulta RAG, não usa MCP, não executa tools e não persiste ou exporta dados.

## Achados iniciais

- O documento original já continha `<!doctype html>` válido em minúsculas; o primeiro harness acusou falso negativo por exigir a capitalização exata. A refatoração preservou o doctype e os testes finais passaram com comparação case-insensitive.
- O README descreve documentação e metodologia; a interface adiciona glossário, triagem e prática interativa.
- O release `1.1.0` declara “Scripts de Teste Prontos para Uso”, checklist especializado, sinais de alerta e argumentos para gestão, mas esses artefatos não existem no tree atual.
- O material inicial usava MCP apenas como rótulo de camada de acesso, sem informar sua expansão. A versão refatorada passou a declarar **Model Context Protocol**, em linha com a documentação oficial.
- Há promessas de arquitetura “inteiramente no back-end”, embora o projeto não contenha back-end; no contexto da página, isso funciona como conteúdo didático, mas deve ser explicitamente apresentado como exemplo conceitual.
- As respostas e a pontuação não são persistidas; ao recarregar a página o placar volta a zero. Não há exportação.
- Não foram encontrados tokens, chaves, chamadas de rede em runtime, armazenamento local, `innerHTML`, `eval` ou outros sinks perigosos. A V1 não carrega fontes externas; o único link externo é o link de navegação para o repositório no GitHub.

## Publicação

`https://ericasouzaqa.github.io/chatai/` respondeu HTTP 404 com o título “Site not found · GitHub Pages”. A URL está declarada como homepage no repositório.

A API do GitHub reporta Pages público, HTTPS enforced, source `main:/`, build type `workflow`, e workflow dinâmico `pages-build-deployment` ativo. A última execução reportada como sucesso foi em `2026-08-11T21:58:38Z`, para o SHA `caae632c26ed16050f4f10d412e25892e5cd95cb`. O log da execução diz que o artefato continha `index.html`, `README.md`, `license.txt` e `assets/css/style.css`, mas o tree atual do SHA contém somente os três arquivos sem `assets`; a URL pública atual continua 404. Isso indica uma inconsistência de publicação que precisa de nova implantação explícita e validação pós-deploy.

## Validação local

O servidor estático local respondeu HTTP 200 e serviu 55.144 bytes. Chromium headless gerou DOM e screenshot sem erro JavaScript fatal detectado; o log mostrou apenas aviso de DBus do ambiente. A auditoria estrutural passou por IDs, destinos de triagem, opções, ausência de chamadas de rede e ausência de armazenamento. O primeiro FAIL foi apenas do harness case-sensitive para doctype; após a correção do teste e da refatoração, os testes passaram.

Screenshot inicial: `/tmp/chatai-local.png`.

## Referências externas consultadas

A documentação oficial do Model Context Protocol define MCP como **Model Context Protocol**, um padrão aberto para conectar aplicações de IA a sistemas externos. A documentação oficial do GitHub Pages recomenda, para workflow customizado, `actions/upload-pages-artifact` e `actions/deploy-pages`, com `pages: write`, `id-token: write`, dependência explícita entre build e deploy e ambiente `github-pages`.

Referências: [Model Context Protocol — What is MCP?](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro); [GitHub — Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages); [GitHub — Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Evidências pós-refatoração

A página foi separada em `assets/css/style.css` e `assets/js/app.js`, mantendo o conteúdo e o comportamento. O markup agora tem doctype único, script externo único e controles `type="button"`. Cards do glossário são `role="button"`, focáveis e operáveis por Enter/espaço; score, feedback e triagem expõem estados ARIA.

`npm test` passou com 7 testes; `npm run build`, `node --check assets/js/app.js` e `git diff --check` também passaram. O teste CDP verificou carregamento, 8 cards, 7 sintomas, 4 questões verdadeiro/falso, 4 cenários, flip de glossário, triagem, resposta correta, resposta incorreta, bloqueio de repetição e atualização de score.

Renderizações Chromium headless desktop (1440x1100) e mobile (390x844) foram geradas sem erro fatal de script. Visualmente, a hierarquia e a responsividade foram preservadas; o mobile empilha o conteúdo e mantém o texto legível. Os únicos logs do Chromium foram avisos ambientais de DBus/GPU, não falhas da aplicação.

Screenshots pós-refatoração: `/tmp/chatai-desktop.png` e `/tmp/chatai-mobile.png`.

## Publicação validada

O commit `f00cff3e62ec37970ee20e5603a5c1610e70a293` foi enviado ao `main`. O CI `33136325868` terminou com `success` e o deploy `33136325837` terminou com `success`.

Após o deploy, `https://ericasouzaqa.github.io/chatai/` respondeu HTTP 200 com o título esperado e os marcadores da versão refatorada. Os assets `assets/css/style.css` e `assets/js/app.js` responderam HTTP 200. Chromium headless gerou captura publicada sem página de erro. O teste funcional ampliado executado diretamente na URL publicada passou: carregamento, cards, teclado Enter/espaço, todos os sintomas, fechamento de veredito, score, feedback e bloqueio de repetição.

A URL que estava em 404 antes da correção agora está comprovadamente publicada.

## Endurecimento final

A versão final removeu todos os estilos inline, eliminou Google Fonts e adicionou CSP via meta tag, permitindo somente scripts, estilos, fontes e conexões locais. O JavaScript não usa sinks perigosos nem integrações simuladas.

A release pública `1.1.0` foi corrigida para declarar o escopo estático real e os limites da entrega, removendo a promessa de scripts, dataset dourado e monitoramento inexistentes.

A captura final publicada mostra o cabeçalho `v1.2.0 · guia interativo`, o título ajustado e o layout desktop preservado. Não há aplicação desktop neste repositório.
