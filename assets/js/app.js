const setGlossaryState = (card, expanded) => {
  card.classList.toggle('flipped', expanded);
  card.setAttribute('aria-expanded', String(expanded));
  card.querySelector('.flip-back')?.setAttribute('aria-hidden', String(!expanded));
};

document.querySelectorAll('.flip-card').forEach((card) => {
  const term = card.querySelector('.fc-term')?.textContent.trim();
  card.setAttribute('aria-expanded', 'false');
  card.setAttribute('aria-label', term ? `Ver definição de ${term}` : 'Ver definição');
  card.querySelector('.flip-back')?.setAttribute('aria-hidden', 'true');

  const toggle = () => {
    setGlossaryState(card, !card.classList.contains('flipped'));
  };

  card.addEventListener('click', toggle);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
});

document.querySelectorAll('.symptom').forEach((btn) => {
  btn.setAttribute('aria-pressed', 'false');
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const target = targetId ? document.getElementById(targetId) : null;
    const isActive = btn.classList.contains('active');

    document.querySelectorAll('.symptom').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    document.querySelectorAll('.verdict').forEach((verdict) => {
      verdict.classList.remove('show');
      verdict.setAttribute('aria-hidden', 'true');
    });

    if (!isActive && target) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      target.classList.add('show');
      target.setAttribute('aria-hidden', 'false');
    }
  });
});

document.querySelectorAll('.verdict').forEach((verdict) => {
  verdict.setAttribute('aria-hidden', 'true');
});

let score = 0;
let total = 0;

function bumpScore(correct) {
  total += 1;
  if (correct) score += 1;
  document.getElementById('scoreCount').textContent = score;
  document.getElementById('scoreTotal').textContent = total;
}

function markAnswer(buttons, selected, answer, feedback) {
  buttons.forEach((button) => {
    button.disabled = true;
  });

  const isCorrect = selected.dataset.value === answer;
  selected.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    buttons.find((button) => button.dataset.value === answer)?.classList.add('correct');
  }
  feedback.classList.add('show');
  feedback.setAttribute('aria-hidden', 'false');
  bumpScore(isCorrect);
}

document.querySelectorAll('.tf-card').forEach((card) => {
  const answer = card.dataset.answer;
  const feedback = card.querySelector('.tf-feedback');
  const buttons = [...card.querySelectorAll('.tf-btn')];
  buttons.forEach((button) => {
    button.addEventListener('click', () => markAnswer(buttons, button, answer, feedback));
  });
});

document.querySelectorAll('.quiz-opts').forEach((group) => {
  const answer = group.dataset.answer;
  const feedback = group.parentElement.querySelector('.quiz-feedback');
  const buttons = [...group.querySelectorAll('.opt-btn')];
  buttons.forEach((button) => {
    button.addEventListener('click', () => markAnswer(buttons, button, answer, feedback));
  });
});


// Trilha 03: alternância local entre painéis do DevTools.
document.querySelectorAll('.devtools-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const panelId = tab.dataset.panel;
    document.querySelectorAll('.devtools-tab').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.devtools-panel').forEach((panel) => panel.classList.remove('active'));
    tab.classList.add('active');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (panel) panel.classList.add('active');
  });
});
