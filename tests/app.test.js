const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const cssPath = path.join(root, 'assets', 'css', 'style.css');
const jsPath = path.join(root, 'assets', 'js', 'app.js');
const js = fs.readFileSync(jsPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const matches = (pattern, content = html) => [...content.matchAll(pattern)].map((match) => match[1]);

test('documento tem estrutura base e um único carregamento de script', () => {
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.equal((html.match(/<script\b/gi) || []).length, 1);
  assert.match(html, /<script src="assets\/js\/app\.js" defer><\/script>/);
  assert.equal((html.match(/<style\b/gi) || []).length, 0);
  assert.doesNotMatch(html, /\sstyle=/i);
  assert.match(html, /<link rel="stylesheet" href="assets\/css\/style\.css" \/>/);
  assert.match(html, /Content-Security-Policy/);
  assert.doesNotMatch(html, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
});

test('assets referenciados existem e o JavaScript passa por sintaxe externa', () => {
  assert.equal(fs.existsSync(cssPath), true);
  assert.equal(fs.existsSync(jsPath), true);
  assert.match(js, /document\.querySelectorAll/);
  assert.doesNotThrow(() => execFileSync(process.execPath, ['--check', jsPath]));
});

test('glossário é navegável por teclado e possui estados ARIA', () => {
  const cards = html.match(/<div class="flip-card"[^>]*>/g) || [];
  assert.equal(cards.length, 8);
  cards.forEach((card) => {
    assert.match(card, /role="button"/);
    assert.match(card, /tabindex="0"/);
  });
  assert.match(js, /event\.key === 'Enter'/);
  assert.match(js, /event\.key === ' '/);
  assert.match(js, /aria-expanded/);
});

test('triagem aponta somente para veredictos existentes', () => {
  const targetIds = matches(/data-target="([^"]+)"/g);
  targetIds.forEach((id) => assert.match(html, new RegExp(`id="${id}"`)));
  assert.equal(targetIds.length, 7);
  assert.match(js, /targetId \? document\.getElementById\(targetId\) : null/);
});

test('questões possuem resposta válida e controles não submetem formulários', () => {
  const quizAnswers = matches(/data-answer="([^"]+)"/g);
  const quizGroups = html.match(/<div class="quiz-opts"[^>]*>/g) || [];
  assert.equal(quizGroups.length, 6);
  quizGroups.forEach((group) => assert.match(group, /data-answer="(?:prompt|rag|mcp|tool|front|unsure|splitter|metadata)"/));
  quizAnswers.forEach((answer) => assert.ok(answer.length > 0));
  assert.equal((html.match(/<button(?! type="button")/g) || []).length, 0);
});

test('placar e feedback são anunciáveis', () => {
  assert.match(html, /id="scoreBar" role="status" aria-live="polite"/);
  assert.ok((html.match(/aria-live="polite"/g) || []).length >= 9);
  assert.match(js, /bumpScore\(isCorrect\)/);
});

test('a trilha educativa contém os tópicos prometidos', () => {
  for (const id of ['learning-path', 'fundamentals', 'chatbot-flow', 'prompt-testing', 'rag-lesson', 'mcp-tools', 'middleware-gateway', 'bedrock-lesson', 'observability-lesson', 'playwright-lesson', 'project-thinking']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  for (const phrase of ['IA generativa', 'resposta plausível', 'Gateway', 'Amazon Bedrock', 'Playground', 'Observabilidade', 'Playwright', 'revisão humana', 'GAP']) {
    assert.match(html, new RegExp(phrase, 'i'));
  }
  for (const [, target] of html.matchAll(/<a href="#([^"]+)"/g)) {
    assert.match(html, new RegExp(`id="${target}"`));
  }
});

test('produto não simula integrações que não existem', () => {
  assert.doesNotMatch(html, /\[cite:\s*\d+\]/);
  assert.doesNotMatch(html, /fetch\(|XMLHttpRequest|WebSocket|EventSource/);
  assert.doesNotMatch(html, /localStorage|sessionStorage|document\.cookie/);
  assert.doesNotMatch(js, /innerHTML|outerHTML|eval\(|new Function/);
  assert.match(html, /Model Context Protocol/);
});

test('trilha inicial cobre QA, aplicação web e DevTools', () => {
  for (const id of ['qa-fundamentals', 'web-app-basics', 'devtools-qa']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  for (const phrase of ['qualidade de software', 'papel do QA', 'teste', 'validação', 'inspeção', 'prevenção', 'navegador', 'front-end', 'back-end', 'API', 'banco de dados', 'requisição', 'resposta']) {
    assert.match(html, new RegExp(phrase, 'i'));
  }
  assert.match(html, /Usuário.*Navegador.*Interface.*API.*Serviços.*Dados.*Resposta/s);
});

test('DevTools apresenta áreas e comandos práticos', () => {
  for (const area of ['Elements', 'Console', 'Network', 'Application', 'Performance', 'Lighthouse']) {
    assert.match(html, new RegExp(area));
  }
  for (const command of [
    "document.querySelectorAll('input')",
    "document.querySelectorAll('button')",
    "document.querySelectorAll('input,select,textarea')",
    "document.querySelectorAll('select')",
    "document.body.innerText.includes('Salvar')",
  ]) {
    assert.ok(html.includes(command) || html.includes(command.replaceAll('>', '&gt;')));
  }
  assert.equal((html.match(/class="command-item"/g) || []).length, 5);
  assert.match(js, /devtools-tab/);
  assert.match(js, /getElementById\(panelId\)/);
});

test('novos controles permanecem locais e acessíveis', () => {
  assert.equal((html.match(/<button(?! type="button")/g) || []).length, 0);
  assert.match(html, /id="sample-name"[^>]*required/);
  assert.match(html, /aria-labelledby="mini-lab-title"/);
  assert.match(css, /devtools-tab:focus-visible/);
  assert.match(css, /@media \(max-width:700px\)/);
  assert.doesNotMatch(html, /cdn\.|unpkg|jsdelivr|cdnjs/i);
  assert.doesNotMatch(js, /fetch\(|XMLHttpRequest|WebSocket|EventSource|localStorage|sessionStorage/);
});

test('versão e documentação refletem a evolução', () => {
  const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  assert.equal(packageJson.version, '1.4.1');
  assert.match(packageJson.description, /sistemas web e IA/i);
  assert.match(readme, /Chrome DevTools/);
  assert.match(readme, /Fundamentos de QA/);
});

test('o fluxo HTTP didático possui requisição e resposta', () => {
  assert.match(html, /POST \/pedidos/);
  assert.match(html, /201 Created/);
  assert.match(html, /REQUISIÇÃO/);
  assert.match(html, /RESPOSTA/);
});

test('o novo formulário não possui ação externa', () => {
  assert.match(html, /<form class="sample-form" onsubmit="return false"/);
  assert.doesNotMatch(html, /<form[^>]+action=/i);
});

test('o novo fluxo não remove os módulos educativos existentes', () => {
  for (const id of ['glossary', 'layers', 'pipeline', 'arch', 'triage', 'practice']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

test('a arquitetura continua sem backend, banco, login e autenticação', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  assert.match(readme, /não possui backend, banco, login, autenticação/);
  assert.match(html, /não acessa sistemas externos/);
  assert.doesNotMatch(js, /fetch|XMLHttpRequest|WebSocket|EventSource/);
});

test('o fluxo inicial aparece no índice em ordem', () => {
  assert.match(html, /01 · Fundamentos de QA/);
  assert.match(html, /02 · Aplicação web/);
  assert.match(html, /03 · Chrome DevTools/);
  assert.ok(html.indexOf('id="qa-fundamentals"') < html.indexOf('id="web-app-basics"'));
  assert.ok(html.indexOf('id="web-app-basics"') < html.indexOf('id="devtools-qa"'));
});

 test('a página mantém a publicação estática documentada', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  assert.match(readme, /GitHub Pages/);
  assert.match(readme, /python3 -m http.server 4173/);
  assert.equal(fs.existsSync(path.join(root, '.github/workflows/deploy-pages.yml')), true);
});

 test('a CSP continua restrita e os assets continuam locais', () => {
  assert.match(html, /default-src 'self'/);
  assert.match(html, /script-src 'self'/);
  assert.match(html, /style-src 'self'/);
  assert.match(html, /connect-src 'self'/);
  assert.doesNotMatch(css, /@import|url\s*\(/);
});

 test('as seis abas apontam para painéis existentes', () => {
  const ids = matches(/data-panel="([^"]+)"/g);
  ids.forEach((id) => assert.match(html, new RegExp(`id="${id}"`)));
  assert.equal(ids.length, 6);
  assert.match(html, /class="devtools-panel active" id="elements-panel"/);
});

 test('o JavaScript novo apenas alterna estado local', () => {
  assert.match(js, /querySelectorAll\('\.devtools-tab'\)/);
  assert.match(js, /classList\.remove\('active'\)/);
  assert.match(js, /classList\.add\('active'\)/);
  assert.doesNotMatch(js, /location\.hash|history\.pushState/);
});

 test('os cinco comandos solicitados estão em blocos de código', () => {
  assert.equal((html.match(/class="command-item"/g) || []).length, 5);
  assert.match(html, /innerText\.trim/);
  assert.match(html, /c\.required/);
  assert.match(html, /s\.options/);
  assert.match(html, /innerText\.includes\('Salvar'\)/);
});

 test('o mini laboratório tem semântica para iniciantes', () => {
  assert.match(html, /for="sample-name"/);
  assert.match(html, /for="sample-type"/);
  assert.match(html, /<button type="button" class="sample-button">Salvar exemplo/);
  assert.match(html, /Você não precisa ser programador/);
});

 test('o conteúdo novo ensina prevenção e evidência', () => {
  assert.match(html, /não espere o defeito aparecer/);
  assert.match(html, /evidência objetiva/);
  assert.match(html, /antes do desenvolvimento/);
  assert.match(html, /não cole dados sensíveis/i);
});

 test('o JavaScript continua sem dependências de rede ou persistência', () => {
  assert.doesNotMatch(js, /fetch|XMLHttpRequest|WebSocket|EventSource|localStorage|sessionStorage|document\.cookie/);
  assert.doesNotThrow(() => execFileSync(process.execPath, ['--check', jsPath]));
});

 test('a implementação preserva a arquitetura estática atual', () => {
  assert.equal(fs.existsSync(path.join(root, 'index.html')), true);
  assert.equal(fs.existsSync(cssPath), true);
  assert.equal(fs.existsSync(jsPath), true);
  assert.equal(fs.existsSync(path.join(root, 'server')), false);
  const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  assert.equal(packageJson.dependencies, undefined);
});

 test('o build estático continua executável', () => {
  assert.doesNotThrow(() => execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'pipe' }));
});

 test('o documento continua sem scripts e estilos inline', () => {
  assert.equal((html.match(/<script\b/gi) || []).length, 1);
  assert.equal((html.match(/<style\b/gi) || []).length, 0);
  assert.doesNotMatch(html, /\sstyle=/i);
});

 test('a documentação registra o escopo sem backend e offline', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  assert.match(readme, /HTML estática com CSS e JavaScript locais/);
  assert.match(readme, /não possui backend, banco, login, autenticação/);
  assert.match(readme, /Execução local e offline/);
});

 test('o fluxo web tem exatamente sete nós e seis setas', () => {
  const flow = html.match(/class="web-flow"[\s\S]*?<\/div>/)?.[0] || '';
  assert.equal((flow.match(/class="flow-node/g) || []).length, 7);
  assert.equal((flow.match(/<i>→<\/i>/g) || []).length, 6);
});

 test('a trilha inicial mantém o foco educativo em português', () => {
  assert.match(html, /Qualidade começa antes do primeiro clique/);
  assert.match(html, /Veja o caminho de uma ação até a resposta/);
  assert.match(html, /Observe o que a tela não conta sozinha/);
  assert.match(html, /Siga a trilha em ordem/);
});

 test('a versão visual e a versão do pacote estão alinhadas', () => {
  assert.match(html, /v1\.4\.1/);
  assert.match(fs.readFileSync(path.join(root, 'package.json'), 'utf8'), /"version": "1\.4\.1"/);
});

 test('a nova trilha usa somente âncoras locais', () => {
  for (const id of ['qa-fundamentals', 'web-app-basics', 'devtools-qa']) {
    assert.match(html, new RegExp(`href="#${id}"`));
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

 test('o fluxo conceitual web está explicitamente identificado', () => {
  assert.match(html, /aria-label="Fluxo conceitual de uma aplicação web"/);
  assert.match(html, /Usuário.*Navegador.*Interface.*API.*Serviços.*Dados.*Resposta/s);
});

 test('o conteúdo do DevTools cobre investigação e segurança', () => {
  assert.match(html, /conjunto de ferramentas do navegador/);
  assert.match(html, /encontrar pistas/);
  assert.match(html, /Não cole dados sensíveis/);
  assert.match(html, /Um score não substitui exploração manual/);
});

 test('o mini laboratório não submete nem persiste informações', () => {
  assert.match(html, /onsubmit="return false"/);
  assert.doesNotMatch(js, /localStorage|sessionStorage|document\.cookie/);
});

 test('a nova trilha mantém o conteúdo antigo de IA', () => {
  assert.match(html, /IA generativa/);
  assert.match(html, /RAG/);
  assert.match(html, /MCP/);
  assert.match(html, /Playwright/);
});

 test('a página mantém a responsividade visual', () => {
  assert.match(css, /@media/);
  assert.match(css, /max-width:700px/);
  assert.match(css, /focus-visible/);
});

 test('o índice aponta para os três módulos obrigatórios', () => {
  const pathSection = html.match(/id="learning-path"[\s\S]*?<\/section>/)?.[0] || '';
  assert.match(pathSection, /01 · Fundamentos de QA/);
  assert.match(pathSection, /02 · Aplicação web/);
  assert.match(pathSection, /03 · Chrome DevTools/);
});

 test('a página continua compatível com GitHub Pages', () => {
  assert.doesNotMatch(html, /<script[^>]+https?:/i);
  assert.doesNotMatch(html, /<link[^>]+https?:/i);
  assert.match(html, /assets\/css\/style\.css/);
  assert.match(html, /assets\/js\/app\.js/);
});

 test('o conteúdo ensina o fluxo de requisição e resposta', () => {
  assert.match(html, /O navegador envia uma intenção/);
  assert.match(html, /A aplicação devolve status/);
  assert.match(html, /status, o formato e a mensagem/);
});

 test('o conteúdo ensina o papel preventivo do QA', () => {
  assert.match(html, /ajuda o time a prevenir problemas/);
  assert.match(html, /participa cedo/);
  assert.match(html, /comportamento verificável/);
});

 test('o conteúdo de DevTools mantém os seletores pedidos', () => {
  assert.match(html, /querySelectorAll\('input'\)/);
  assert.match(html, /querySelectorAll\('button'\)/);
  assert.match(html, /querySelectorAll\('input,select,textarea'\)/);
  assert.match(html, /querySelectorAll\('select'\)/);
  assert.match(html, /body\.innerText\.includes\('Salvar'\)/);
});

 test('não foi criado arquivo temporário de migração', () => {
  assert.equal(fs.existsSync(path.join(root, 'update_guide.py')), false);
});


test('a trilha aprofundada cobre escalabilidade, vetores, chunks, LangChain e RAG', () => {
  for (const id of ['architecture-at-scale', 'vector-foundations', 'rag-deep-dive', 'langchain-lesson']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  for (const phrase of ['Escalabilidade horizontal', 'Embedding', 'Base vetorial', 'Chunk', 'LangChain', 'Indexação', 'Retrieval', 'Augmentation']) {
    assert.match(html, new RegExp(phrase, 'i'));
  }
});

test('a trilha de custos cobre Bedrock, tokens, caching e atribuição', () => {
  assert.match(html, /id="bedrock-costs"/);
  for (const phrase of ['Amazon Bedrock', 'tokens', 'Prompt caching', 'modelo adequado', 'Cost Explorer', 'Budgets', 'request metadata']) {
    assert.match(html, new RegExp(phrase, 'i'));
  }
});

test('a trilha do Twilio explica Sandbox sem torná-lo dependência', () => {
  assert.match(html, /id="twilio-sandbox"/);
  assert.match(html, /twilio\.com\/docs\/whatsapp\/sandbox/);
  assert.match(html, /join &lt;seu código&gt;/);
  assert.match(html, /mockTwilio\.send/);
  assert.match(html, /não envia mensagens/);
  assert.doesNotMatch(js, /twilio|Account SID|Auth Token/i);
});

test('a oficina separa decisões de PO e evidências do testador', () => {
  assert.match(html, /id="po-tester-workshop"/);
  assert.match(html, /Para o PO/);
  assert.match(html, /Para o testador/);
  assert.match(html, /Desafio final/);
});

test('as referências adicionais apontam para documentação oficial e livro recomendado', () => {
  assert.match(html, /AWS horizontal scaling/);
  assert.match(html, /Amazon Bedrock Cost Optimization/);
  assert.match(html, /LangChain text splitters/);
  assert.match(html, /Twilio Sandbox para WhatsApp/);
  assert.match(html, /LLMs: As Partes Difíceis de Entender/);
  assert.match(html, /Tarsis TP Souza/);
  assert.match(html, /Jonathan K\. Regêncio Junior/);
});

test('o novo conteúdo não introduz runtime externo', () => {
  assert.doesNotMatch(html, /<script[^>]+https?:/i);
  assert.doesNotMatch(html, /<iframe|<img[^>]+https?:/i);
  assert.doesNotMatch(js, /fetch\(|XMLHttpRequest|WebSocket|EventSource|localStorage|sessionStorage|document\.cookie/);
  assert.doesNotMatch(css, /@import|url\s*\(/);
});

test('a versão da ampliação está alinhada no HTML e no package', () => {
  assert.match(html, /v1\.4\.1/);
  assert.match(fs.readFileSync(path.join(root, 'package.json'), 'utf8'), /"version": "1\.4\.1"/);
});

test('os links externos são somente referências clicáveis', () => {
  const referenceLinks = [...html.matchAll(/<a href="(https?:\/\/[^\"]+)"/g)].map((match) => match[1]);
  assert.ok(referenceLinks.some((url) => url.includes('twilio.com')));
  assert.ok(referenceLinks.some((url) => url.includes('aws.amazon.com')));
  assert.ok(referenceLinks.some((url) => url.includes('langchain.com')));
  assert.doesNotMatch(js, /https?:\/\//);
});

 test('o conteúdo reforça que o livro foi traduzido didaticamente sem reprodução integral', () => {
  assert.match(html, /explicação original para estudo/);
  assert.match(html, /não reproduz nem traduz integralmente/);
});

 test('os novos exercícios reutilizam o motor local de score', () => {
  assert.ok((html.match(/class="tf-card"/g) || []).length >= 6);
  assert.ok((html.match(/class="quiz-opts"/g) || []).length >= 6);
  assert.match(js, /querySelectorAll\('\.tf-card'\)/);
  assert.match(js, /querySelectorAll\('\.quiz-opts'\)/);
});

 test('o projeto mantém o modo offline documentado após a ampliação', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  assert.match(readme, /não há dependências de runtime/);
  assert.match(readme, /não enviam mensagens nem chamam modelos/);
  assert.match(readme, /Twilio Sandbox/);
  assert.match(readme, /LangChain/);
});

 test('a nova trilha possui links locais no índice', () => {
  const pathSection = html.match(/id="learning-path"[\s\S]*?<\/section>/)?.[0] || '';
  for (const id of ['architecture-at-scale', 'vector-foundations', 'rag-deep-dive', 'langchain-lesson', 'bedrock-costs', 'twilio-sandbox', 'po-tester-workshop']) {
    assert.match(pathSection, new RegExp(`href="#${id}"`));
  }
});

 test('não ficou script de migração no repositório', () => {
  assert.equal(fs.existsSync(path.join(root, 'update_learning_content.py')), false);
  assert.equal(fs.existsSync(path.join(root, 'update_guide.py')), false);
});


test('a camada para iniciantes começa por analogias e passos compreensíveis', () => {
  assert.match(html, /id="beginner-compass"/);
  assert.match(html, /O site é o salão/);
  assert.match(html, /A API é o garçom/);
  assert.match(html, /O banco é o caderno/);
  assert.match(html, /o que é\?/i);
  assert.match(html, /para que serve\?/i);
  assert.match(html, /qual é um exemplo de verdade\?/i);
  assert.match(html, /como eu provaria que funcionou\?/i);
  assert.match(html, /Você não precisa decorar/);
});

test('o índice coloca a preparação antes dos fundamentos', () => {
  assert.ok(html.indexOf('href="#beginner-compass"') < html.indexOf('href="#qa-fundamentals"'));
  assert.ok(html.indexOf('id="beginner-compass"') < html.indexOf('id="qa-fundamentals"'));
});

test('a versão 1.4.1 documenta a camada para leigos', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  assert.match(readme, /Camada de aprendizagem para leigos/);
  assert.match(readme, /analogia de restaurante/);
  assert.match(readme, /imagem mental/);
  assert.match(html, /v1\.4\.1/);
  assert.match(fs.readFileSync(path.join(root, 'package.json'), 'utf8'), /"version": "1\.4\.1"/);
});
