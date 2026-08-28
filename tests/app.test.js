const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const cssPath = path.join(root, 'assets', 'css', 'style.css');
const jsPath = path.join(root, 'assets', 'js', 'app.js');
const js = fs.readFileSync(jsPath, 'utf8');

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
  assert.equal(quizGroups.length, 4);
  quizGroups.forEach((group) => assert.match(group, /data-answer="(?:prompt|rag|mcp|tool|front|unsure)"/));
  quizAnswers.forEach((answer) => assert.ok(answer.length > 0));
  assert.equal((html.match(/<button(?! type="button")/g) || []).length, 0);
});

test('placar e feedback são anunciáveis', () => {
  assert.match(html, /id="scoreBar" role="status" aria-live="polite"/);
  assert.ok((html.match(/aria-live="polite"/g) || []).length >= 9);
  assert.match(js, /bumpScore\(isCorrect\)/);
});

test('produto não simula integrações que não existem', () => {
  assert.doesNotMatch(html, /\[cite:\s*\d+\]/);
  assert.doesNotMatch(html, /fetch\(|XMLHttpRequest|WebSocket|EventSource/);
  assert.doesNotMatch(html, /localStorage|sessionStorage|document\.cookie/);
  assert.doesNotMatch(js, /innerHTML|outerHTML|eval\(|new Function/);
  assert.match(html, /Model Context Protocol/);
});
