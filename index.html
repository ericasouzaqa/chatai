<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Prompt, MCP, Tool, RAG & Regex — Guia Iniciante CEABS</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#12151B; --panel:#1A1F27; --panel-2:#212832;
    --border:#2A313D; --border-soft:#242B35;
    --text:#EDEFF3; --muted:#8B93A3; --muted-2:#5E6674;

    --prompt:#E8A33D; --prompt-dim:#3A2F1C;
    --mcp:#47B8AC; --mcp-dim:#1A2F2C;
    --tool:#E8593F; --tool-dim:#361F1A;
    --rag:#5B93E0; --rag-dim:#1B2A40;
    --front:#7C9CC4; --front-dim:#1C2734;
    --unsure:#9384DE; --unsure-dim:#2A2740;

    --ok:#5FBF77; --bad:#E8593F;

    --mono:'IBM Plex Mono', monospace;
    --display:'Space Grotesk', sans-serif;
    --body:'Inter', sans-serif;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{background:var(--bg);color:var(--text);font-family:var(--body);line-height:1.5;-webkit-font-smoothing:antialiased;}
  body::before{
    content:'';position:fixed;inset:0;
    background-image:
      radial-gradient(circle at 15% 10%, rgba(232,163,61,0.05), transparent 40%),
      radial-gradient(circle at 85% 0%, rgba(71,184,172,0.06), transparent 40%),
      radial-gradient(circle at 60% 60%, rgba(91,147,224,0.05), transparent 40%),
      radial-gradient(circle at 50% 100%, rgba(232,89,63,0.04), transparent 40%);
    pointer-events:none;z-index:0;
  }
  .wrap{max-width:1100px;margin:0 auto;padding:0 28px;position:relative;z-index:1;}
  a{color:inherit;}

  .strip{border-bottom:1px solid var(--border-soft);padding:16px 0;}
  .strip .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;}
  .strip-id{font-family:var(--mono);font-size:12px;letter-spacing:0.08em;color:var(--muted-2);display:flex;align-items:center;gap:10px;}
  .dot{width:6px;height:6px;border-radius:50%;background:var(--ok);box-shadow:0 0 8px var(--ok);}

  .hero{padding:72px 0 48px;}
  .eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:0.14em;color:var(--mcp);text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:10px;}
  .eyebrow::before{content:'';width:22px;height:1px;background:var(--mcp);}
  h1{font-family:var(--display);font-weight:600;font-size:clamp(28px,4.4vw,46px);line-height:1.1;letter-spacing:-0.01em;max-width:820px;}
  h1 span{color:var(--muted-2);}
  .hero-sub{margin-top:18px;max-width:600px;font-size:16px;color:var(--muted);}

  .caveat-banner{margin-top:26px;display:flex;gap:14px;align-items:flex-start;background:var(--unsure-dim);border:1px solid #3D3868;border-radius:12px;padding:16px 18px;max-width:660px;}
  .caveat-banner svg{flex:0 0 auto;margin-top:2px;width:18px;height:18px;}
  .caveat-banner p{font-size:13.5px;color:#C4BCE8;line-height:1.6;}
  .caveat-banner b{color:var(--unsure);}

  section{padding:52px 0;border-top:1px solid var(--border-soft);}
  .sec-head{margin-bottom:32px;max-width:660px;}
  .sec-eyebrow{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted-2);margin-bottom:12px;}
  h2{font-family:var(--display);font-weight:600;font-size:clamp(21px,2.8vw,28px);letter-spacing:-0.01em;}
  .sec-desc{color:var(--muted);margin-top:12px;font-size:14.5px;}

  /* ---------- glossary flip cards ---------- */
  .glossary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
  @media (max-width:900px){.glossary-grid{grid-template-columns:repeat(2,1fr);}}
  @media (max-width:520px){.glossary-grid{grid-template-columns:1fr;}}
  .flip-card{perspective:1000px;height:118px;cursor:pointer;}
  .flip-inner{position:relative;width:100%;height:100%;transition:transform .5s;transform-style:preserve-3d;}
  .flip-card.flipped .flip-inner{transform:rotateY(180deg);}
  .flip-face{position:absolute;inset:0;backface-visibility:hidden;border-radius:12px;border:1px solid var(--border);padding:16px;display:flex;flex-direction:column;justify-content:center;}
  .flip-front{background:var(--panel);}
  .flip-front .fc-term{font-family:var(--display);font-weight:600;font-size:16px;}
  .flip-front .fc-hint{font-family:var(--mono);font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-2);margin-top:8px;}
  .flip-back{background:var(--panel-2);transform:rotateY(180deg);}
  .flip-back p{font-size:12.5px;color:var(--text);line-height:1.5;}
  .flip-card[data-c="prompt"] .flip-front{border-top:3px solid var(--prompt);}
  .flip-card[data-c="rag"] .flip-front{border-top:3px solid var(--rag);}
  .flip-card[data-c="mcp"] .flip-front{border-top:3px solid var(--mcp);}
  .flip-card[data-c="tool"] .flip-front{border-top:3px solid var(--tool);}
  .flip-card[data-c="regex"] .flip-front{border-top:3px solid var(--tool);}
  .flip-card[data-c="front"] .flip-front{border-top:3px solid var(--front);}
  .flip-card[data-c="back"] .flip-front{border-top:3px solid var(--unsure);}

  /* ---------- layer cards ---------- */
  .layers{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
  @media (max-width:980px){.layers{grid-template-columns:repeat(2,1fr);}}
  @media (max-width:640px){.layers{grid-template-columns:1fr;}}
  .layer{background:var(--panel);border:1px solid var(--border);border-radius:14px;padding:22px 20px 20px;position:relative;overflow:hidden;}
  .layer::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;}
  .layer.p::after{background:var(--prompt);} .layer.m::after{background:var(--mcp);}
  .layer.t::after{background:var(--tool);} .layer.r::after{background:var(--rag);}
  .layer-icon{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
  .layer.p .layer-icon{background:var(--prompt-dim);} .layer.m .layer-icon{background:var(--mcp-dim);}
  .layer.t .layer-icon{background:var(--tool-dim);} .layer.r .layer-icon{background:var(--rag-dim);}
  .layer-icon svg{width:17px;height:17px;}
  .layer-tag{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;}
  .layer.p .layer-tag{color:var(--prompt);} .layer.m .layer-tag{color:var(--mcp);}
  .layer.t .layer-tag{color:var(--tool);} .layer.r .layer-tag{color:var(--rag);}
  .layer h3{font-family:var(--display);font-weight:600;font-size:18px;margin-bottom:10px;}
  .layer p{color:var(--muted);font-size:13px;margin-bottom:12px;}
  .layer .analogy{font-size:12.5px;color:var(--text);border-left:2px solid var(--border);padding-left:11px;margin-bottom:14px;}
  .layer code{display:block;font-family:var(--mono);font-size:11px;background:var(--panel-2);border:1px solid var(--border);border-radius:8px;padding:9px 11px;color:var(--muted);line-height:1.6;white-space:pre-wrap;}
  .tech-note{margin-top:14px;background:var(--panel-2);border:1px dashed var(--border);border-radius:8px;padding:10px 12px;font-size:11.5px;color:var(--muted-2);line-height:1.6;}
  .tech-note b{color:var(--muted);}

  /* ---------- architecture box (front/back) ---------- */
  .arch-wrap{display:flex;gap:18px;align-items:stretch;flex-wrap:wrap;}
  .arch-front{
    flex:0 0 200px;
    background:var(--front-dim);
    border:1px solid #2E4258;
    border-radius:14px;
    padding:22px 20px;
    display:flex;flex-direction:column;justify-content:center;
  }
  .arch-front .at{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--front);margin-bottom:8px;}
  .arch-front h4{font-family:var(--display);font-size:19px;font-weight:600;margin-bottom:10px;}
  .arch-front p{font-size:13px;color:var(--text);opacity:.85;}
  .arch-arrow{display:flex;align-items:center;justify-content:center;flex:0 0 auto;font-family:var(--mono);font-size:12px;color:var(--muted-2);text-align:center;min-width:70px;}
  .arch-back{
    flex:1;min-width:280px;
    background:var(--panel);
    border:1px dashed var(--border);
    border-radius:14px;
    padding:22px 22px 18px;
  }
  .arch-back .at{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--unsure);margin-bottom:6px;}
  .arch-back h4{font-family:var(--display);font-size:19px;font-weight:600;margin-bottom:16px;}
  .arch-pills{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;}
  .arch-pill{border-radius:10px;padding:11px 13px;font-size:12.5px;border:1px solid var(--border);}
  .arch-pill b{display:block;font-family:var(--display);font-size:13.5px;margin-bottom:3px;}
  .arch-pill.p{background:var(--prompt-dim);} .arch-pill.p b{color:var(--prompt);}
  .arch-pill.r{background:var(--rag-dim);} .arch-pill.r b{color:var(--rag);}
  .arch-pill.m{background:var(--mcp-dim);} .arch-pill.m b{color:var(--mcp);}
  .arch-pill.t{background:var(--tool-dim);} .arch-pill.t b{color:var(--tool);}
  @media (max-width:760px){.arch-wrap{flex-direction:column;} .arch-arrow{min-width:0;padding:6px 0;}}

  /* ---------- journey ---------- */
  .journey{display:flex;flex-direction:column;gap:0;}
  .j-step{display:flex;gap:16px;align-items:flex-start;padding:16px 0;position:relative;}
  .j-num{
    flex:0 0 auto;width:34px;height:34px;border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    font-family:var(--mono);font-size:13px;font-weight:600;
    border:1px solid var(--border);background:var(--panel);
    position:relative;z-index:1;
  }
  .j-step.f .j-num{border-color:var(--front);color:var(--front);}
  .j-step.b .j-num{border-color:var(--muted-2);color:var(--text);}
  .j-step.rp .j-num{border-color:var(--rag);color:var(--rag);}
  .j-step.tl .j-num{border-color:var(--tool);color:var(--tool);}
  .j-line{position:absolute;left:17px;top:50px;bottom:-16px;width:1px;background:var(--border);}
  .j-step:last-child .j-line{display:none;}
  .j-body h5{font-family:var(--display);font-size:15.5px;font-weight:600;margin-bottom:4px;}
  .j-body p{font-size:13px;color:var(--muted);}
  .j-loop{margin-top:14px;margin-left:50px;font-size:12.5px;color:var(--unsure);font-family:var(--mono);}

  .principle{display:flex;gap:18px;align-items:flex-start;background:var(--tool-dim);border:1px solid #4A2A22;border-radius:14px;padding:24px 26px;}
  .principle .p-icon{flex:0 0 auto;width:40px;height:40px;border-radius:10px;background:rgba(232,89,63,0.15);display:flex;align-items:center;justify-content:center;}
  .principle h3{font-family:var(--display);font-size:18px;font-weight:600;color:var(--tool);margin-bottom:10px;}
  .principle p{font-size:14px;color:var(--text);opacity:0.9;max-width:680px;}
  .principle p + p{margin-top:8px;}

  .scene{background:var(--panel);border:1px solid var(--border);border-radius:16px;padding:28px;}
  .scene-line{display:flex;gap:16px;padding:13px 0;border-bottom:1px solid var(--border-soft);align-items:flex-start;}
  .scene-line:last-child{border-bottom:none;}
  .scene-tag{flex:0 0 auto;font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:20px;white-space:nowrap;margin-top:2px;}
  .scene-tag.p{background:var(--prompt-dim);color:var(--prompt);}
  .scene-tag.m{background:var(--mcp-dim);color:var(--mcp);}
  .scene-tag.t{background:var(--tool-dim);color:var(--tool);}
  .scene-txt{font-size:14.5px;color:var(--text);}
  .scene-txt b{font-weight:600;}
  .scene-txt code{font-family:var(--mono);font-size:12.5px;color:var(--muted);}

  .triage-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
  @media (max-width:820px){.triage-grid{grid-template-columns:1fr;}}
  .symptom{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:18px;cursor:pointer;text-align:left;font-family:var(--body);color:var(--text);transition:border-color .15s ease, transform .15s ease;width:100%;}
  .symptom:hover{border-color:var(--muted-2);transform:translateY(-2px);}
  .symptom.active{border-color:var(--mcp);}
  .symptom.unsure-btn.active{border-color:var(--unsure);}
  .symptom .sym-label{font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-2);margin-bottom:9px;}
  .symptom .sym-title{font-size:13.5px;font-weight:500;line-height:1.4;}

  .verdict{margin-top:18px;background:var(--panel-2);border:1px solid var(--border);border-radius:12px;padding:22px 24px;display:none;}
  .verdict.show{display:block;}
  .verdict-owner{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;padding:5px 12px;border-radius:20px;margin-bottom:14px;}
  .verdict-owner.p{background:var(--prompt-dim);color:var(--prompt);}
  .verdict-owner.m{background:var(--mcp-dim);color:var(--mcp);}
  .verdict-owner.t{background:var(--tool-dim);color:var(--tool);}
  .verdict-owner.r{background:var(--rag-dim);color:var(--rag);}
  .verdict-owner.u{background:var(--unsure-dim);color:var(--unsure);}
  .verdict p{color:var(--muted);font-size:14px;}
  .verdict p + p{margin-top:8px;}
  .verdict .check{margin-top:14px;background:var(--panel);border:1px solid var(--border);border-radius:8px;padding:12px 14px;font-size:13px;color:var(--text);}
  .verdict .check b{color:var(--mcp);}

  .gray-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
  @media (max-width:820px){.gray-grid{grid-template-columns:1fr;}}
  .gray-card{background:var(--panel);border:1px solid var(--border);border-left:3px solid var(--unsure);border-radius:10px;padding:18px 20px;}
  .gray-card .gray-tag{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--unsure);margin-bottom:10px;}
  .gray-card h4{font-family:var(--display);font-size:15px;font-weight:600;margin-bottom:8px;}
  .gray-card p{font-size:13px;color:var(--muted);}

  .case-table{width:100%;border-collapse:collapse;font-size:13px;}
  .case-table thead th{text-align:left;font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-2);padding:0 14px 12px;border-bottom:1px solid var(--border);}
  .case-table tbody tr{border-bottom:1px solid var(--border-soft);}
  .case-table tbody tr:last-child{border-bottom:none;}
  .case-table td{padding:15px 14px;vertical-align:top;color:var(--text);}
  .prio{font-family:var(--mono);font-size:10.5px;letter-spacing:.05em;text-transform:uppercase;padding:3px 9px;border-radius:20px;white-space:nowrap;}
  .prio.alta{background:var(--tool-dim);color:var(--tool);}
  .prio.media{background:var(--prompt-dim);color:var(--prompt);}
  .prio.baixa{background:var(--panel-2);color:var(--muted);border:1px solid var(--border);}
  .owner-pill{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11.5px;padding:4px 10px;border-radius:20px;white-space:nowrap;}
  .owner-pill.rag{background:var(--rag-dim);color:var(--rag);}
  .owner-pill.mcp{background:var(--mcp-dim);color:var(--mcp);}
  .owner-pill.prompt{background:var(--prompt-dim);color:var(--prompt);}
  .owner-pill.tool{background:var(--tool-dim);color:var(--tool);}
  .who-badge{display:inline-block;font-family:var(--mono);font-size:11px;padding:3px 9px;border-radius:6px;margin-top:6px;}
  .who-badge.ia{background:rgba(95,191,119,0.12);color:var(--ok);}
  .who-badge.dev{background:rgba(232,89,63,0.12);color:var(--tool);}
  .table-wrap{overflow-x:auto;background:var(--panel);border:1px solid var(--border);border-radius:14px;padding:8px 6px;}
  .pattern-note{margin-top:20px;background:var(--panel);border:1px solid var(--border);border-left:3px solid var(--ok);border-radius:10px;padding:16px 20px;font-size:13.5px;color:var(--muted);}
  .pattern-note b{color:var(--text);}

  /* ---------- practice ---------- */
  .practice-sub{margin-bottom:14px;}
  .practice-sub .st{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-2);}
  .practice-sub h3{font-family:var(--display);font-size:17px;font-weight:600;margin-top:6px;}

  .tf-card{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:18px 20px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;}
  .tf-statement{font-size:14px;flex:1;min-width:200px;}
  .tf-btns{display:flex;gap:8px;}
  .tf-btn{font-family:var(--mono);font-size:12px;background:var(--panel-2);border:1px solid var(--border);color:var(--text);padding:7px 14px;border-radius:8px;cursor:pointer;}
  .tf-btn:hover{border-color:var(--muted-2);}
  .tf-btn.correct{border-color:var(--ok);background:rgba(95,191,119,0.1);color:var(--ok);}
  .tf-btn.wrong{border-color:var(--bad);background:rgba(232,89,63,0.1);color:var(--bad);}
  .tf-btn:disabled{cursor:default;}
  .tf-feedback{width:100%;font-size:12.5px;color:var(--muted);display:none;border-left:2px solid var(--border);padding-left:12px;margin-top:4px;}
  .tf-feedback.show{display:block;}

  .quiz-card{background:var(--panel);border:1px solid var(--border);border-radius:14px;padding:22px 22px 18px;margin-bottom:12px;}
  .quiz-num{font-family:var(--mono);font-size:11px;color:var(--muted-2);letter-spacing:.08em;margin-bottom:9px;}
  .quiz-scenario{font-size:14.5px;margin-bottom:15px;max-width:640px;}
  .quiz-flag{display:inline-block;font-family:var(--mono);font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--tool);background:var(--tool-dim);padding:3px 9px;border-radius:20px;margin-bottom:12px;}
  .quiz-opts{display:flex;gap:8px;flex-wrap:wrap;}
  .opt-btn{font-family:var(--mono);font-size:11.5px;letter-spacing:.03em;background:var(--panel-2);border:1px solid var(--border);color:var(--text);padding:7px 13px;border-radius:8px;cursor:pointer;transition:border-color .15s ease;}
  .opt-btn:hover{border-color:var(--muted-2);}
  .opt-btn.correct{border-color:var(--ok);background:rgba(95,191,119,0.1);color:var(--ok);}
  .opt-btn.wrong{border-color:var(--bad);background:rgba(232,89,63,0.1);color:var(--bad);}
  .opt-btn:disabled{cursor:default;}
  .quiz-feedback{margin-top:12px;font-size:13px;color:var(--muted);display:none;border-left:2px solid var(--border);padding-left:12px;}
  .quiz-feedback.show{display:block;}

  .score-bar{
    position:sticky;top:0;z-index:5;
    background:rgba(18,21,27,0.92);
    backdrop-filter:blur(6px);
    border-bottom:1px solid var(--border-soft);
    padding:10px 0;
    margin-bottom:20px;
    font-family:var(--mono);
    font-size:12.5px;
    color:var(--muted);
    text-align:center;
  }
  .score-bar b{color:var(--text);}

  footer{padding:48px 0 72px;}
  .foot-card{border:1px solid var(--border);background:var(--panel);border-radius:14px;padding:26px 28px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;}
  .foot-card a.cta{font-family:var(--mono);font-size:13px;color:var(--bg);background:var(--text);padding:10px 18px;border-radius:8px;text-decoration:none;white-space:nowrap;}
  .foot-note{color:var(--muted-2);font-size:12.5px;margin-top:20px;max-width:660px;}
</style>
</head>
<body>

<div class="strip">
  <div class="wrap">
    <div class="strip-id"><span class="dot"></span> PAINEL DE TRIAGEM · IA & ATENDIMENTO CEABS</div>
    <div class="strip-id">v4 · guia iniciante</div>
  </div>
</div>

<div class="score-bar" id="scoreBar">Acertos: <b id="scoreCount">0</b> / <span id="scoreTotal">0</span></div>

<div class="wrap">

  <section class="hero" style="border-top:none;padding-top:60px;">
    <div class="eyebrow">Guia para quem está começando</div>
    <h1>Prompt, MCP, Tool, RAG e Regex: <span>explicado do zero.</span></h1>
    <p class="hero-sub">Comece pelo glossário. Depois veja onde cada peça mora, siga a jornada de uma mensagem, e treine com os exercícios lá embaixo.</p>

    <div class="caveat-banner">
      <svg viewBox="0 0 24 24" fill="none" stroke="#9384DE" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v5"/><circle cx="12" cy="16" r="0.6" fill="#9384DE"/></svg>
      <p>Não precisa entender tudo de primeira. Clique, erre, releia — é assim que fixa.</p>
    </div>
  </section>

  <section id="glossary" style="border-top:none;">
    <div class="sec-head">
      <div class="sec-eyebrow">00 — Glossário rápido</div>
      <h2>Clique em cada termo pra ver a definição</h2>
      <p class="sec-desc">Sete palavras que aparecem o tempo todo. Se travar em alguma mais pra frente, volta aqui.</p>
    </div>
    <div class="glossary-grid" id="glossaryGrid">
      <div class="flip-card" data-c="prompt"><div class="flip-inner">
        <div class="flip-face flip-front"><div class="fc-term">Prompt</div><div class="fc-hint">clique pra ver</div></div>
        <div class="flip-face flip-back"><p>Manual de instruções da IA: tom, regras, o que pode e não pode fazer.</p></div>
      </div></div>
      <div class="flip-card" data-c="rag"><div class="flip-inner">
        <div class="flip-face flip-front"><div class="fc-term">RAG</div><div class="fc-hint">clique pra ver</div></div>
        <div class="flip-face flip-back"><p>Fonte de conteúdo que a IA consulta antes de responder: políticas, preços, horários.</p></div>
      </div></div>
      <div class="flip-card" data-c="mcp"><div class="flip-inner">
        <div class="flip-face flip-front"><div class="fc-term">MCP</div><div class="fc-hint">clique pra ver</div></div>
        <div class="flip-face flip-back"><p>Crachá de acesso da IA aos sistemas. Sem ele, ela só conversa, não age.</p></div>
      </div></div>
      <div class="flip-card" data-c="tool"><div class="flip-inner">
        <div class="flip-face flip-front"><div class="fc-term">Tool</div><div class="fc-hint">clique pra ver</div></div>
        <div class="flip-face flip-back"><p>Botão específico que a IA aperta pra executar algo real, tipo cancelar um pedido.</p></div>
      </div></div>
      <div class="flip-card" data-c="regex"><div class="flip-inner">
        <div class="flip-face flip-front"><div class="fc-term">Regex</div><div class="fc-hint">clique pra ver</div></div>
        <div class="flip-face flip-back"><p>Regra de texto que checa o formato de um dado. Não pensa, só compara padrão.</p></div>
      </div></div>
      <div class="flip-card" data-c="front"><div class="flip-inner">
        <div class="flip-face flip-front"><div class="fc-term">Front-end</div><div class="fc-hint">clique pra ver</div></div>
        <div class="flip-face flip-back"><p>A tela que o cliente vê e usa — chat, botões, o que aparece.</p></div>
      </div></div>
      <div class="flip-card" data-c="back"><div class="flip-inner">
        <div class="flip-face flip-front"><div class="fc-term">Back-end</div><div class="fc-hint">clique pra ver</div></div>
        <div class="flip-face flip-back"><p>Onde a inteligência mora: prompt, RAG, tools e MCP rodando por trás da tela.</p></div>
      </div></div>
    </div>
  </section>

  <section id="layers">
    <div class="sec-head">
      <div class="sec-eyebrow">01 — As quatro peças que decidem</div>
      <h2>Cada uma resolve um problema diferente</h2>
      <p class="sec-desc">Um sintoma parecido ("a IA não sabia responder") pode nascer em qualquer uma delas.</p>
    </div>
    <div class="layers">
      <div class="layer p">
        <div class="layer-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#E8A33D" stroke-width="1.8"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 12h6M9 15.5h6M9 8.5h3"/></svg></div>
        <div class="layer-tag">Comportamento</div>
        <h3>Prompt</h3>
        <p>O manual de instruções: tom de voz, regras do negócio, o que pode e o que não pode.</p>
        <div class="analogy">É só texto. Não conecta com nada, não acessa nada.</div>
        <code>"Sempre responda de forma educada."
"Se existir resposta na base,
não transfira para humano."</code>
      </div>
      <div class="layer r">
        <div class="layer-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#5B93E0" stroke-width="1.8"><path d="M4 6a2 2 0 0 1 2-2h5v16H6a2 2 0 0 1-2-2z"/><path d="M20 6a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 0 2-2z"/></svg></div>
        <div class="layer-tag">Conteúdo</div>
        <h3>RAG</h3>
        <p>A fonte de informação que a IA consulta antes de responder. Não é comportamento, é fato.</p>
        <div class="analogy">É a prateleira de manuais. O prompt diz como falar; a base diz o que é verdade.</div>
        <code>Horário: manhã 08h–12h,
tarde 13h–18h.</code>
      </div>
      <div class="layer m">
        <div class="layer-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#47B8AC" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="9" r="2.3"/><path d="M9 21v-3.5a3 3 0 0 1 6 0V21"/></svg></div>
        <div class="layer-tag">Acesso</div>
        <h3>MCP / Middleware</h3>
        <p>O crachá + chave que a IA ganha pra circular pelos sistemas — inclui checar identidade.</p>
        <div class="analogy">Autorização mora aqui, não no texto que a IA lê.</div>
        <code>Antes de mostrar dado da OS:
validar identidade do cliente.</code>
        <div class="tech-note"><b>Nota:</b> MCP é um protocolo específico. Se o stack usa outro mecanismo, confirme o termo com dev.</div>
      </div>
      <div class="layer t">
        <div class="layer-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#E8593F" stroke-width="1.8"><rect x="4" y="9" width="16" height="10" rx="2"/><path d="M8 9V7a4 4 0 0 1 8 0v2"/><circle cx="12" cy="14" r="1.6"/></svg></div>
        <div class="layer-tag">Ação</div>
        <h3>Tool</h3>
        <p>O botão que a IA aperta pra executar algo — inclui os validadores que checam formato de dado.</p>
        <div class="analogy">É a ação concreta, e o código por trás dela.</div>
        <code>buscar_pedido(numero_pedido)
validar_documento(cnpj)</code>
        <div class="tech-note"><b>Regex mora aqui:</b> é a regra de texto dentro da tool que checa se o dado tem o formato certo — não pensa, só compara padrão (ex: "isso parece um CNPJ?").</div>
      </div>
    </div>
  </section>

  <section id="arch">
    <div class="sec-head">
      <div class="sec-eyebrow">02 — Onde cada peça mora</div>
      <h2>Front-end vs. back-end</h2>
      <p class="sec-desc">O front-end é só a tela. Toda a inteligência das quatro peças acima mora no back-end.</p>
    </div>
    <div class="arch-wrap">
      <div class="arch-front">
        <div class="at">Front-end</div>
        <h4>A tela</h4>
        <p>Chat, botões, o que o cliente digita e vê. Não pensa, não decide — só exibe.</p>
      </div>
      <div class="arch-arrow">mensagem →<br>← resposta</div>
      <div class="arch-back">
        <div class="at">Back-end</div>
        <h4>Onde a inteligência mora</h4>
        <div class="arch-pills">
          <div class="arch-pill p"><b>Prompt</b>como se comportar</div>
          <div class="arch-pill r"><b>RAG</b>o que é verdade</div>
          <div class="arch-pill m"><b>MCP</b>o que pode acessar</div>
          <div class="arch-pill t"><b>Tool</b>o que executar</div>
        </div>
      </div>
    </div>
  </section>

  <section id="journey">
    <div class="sec-head">
      <div class="sec-eyebrow">03 — A jornada de uma mensagem</div>
      <h2>O caminho completo, passo a passo</h2>
    </div>
    <div class="journey">
      <div class="j-step f"><div class="j-num">1</div><div class="j-line"></div>
        <div class="j-body"><h5>Front-end</h5><p>Cliente digita e a mensagem sai da tela.</p></div>
      </div>
      <div class="j-step b"><div class="j-num">2</div><div class="j-line"></div>
        <div class="j-body"><h5>Back-end</h5><p>Recebe a mensagem e orquestra o que vai acontecer.</p></div>
      </div>
      <div class="j-step rp"><div class="j-num">3</div><div class="j-line"></div>
        <div class="j-body"><h5>RAG + modelo (prompt)</h5><p>Busca conteúdo relevante na base e decide, seguindo as regras do prompt, o que responder.</p></div>
      </div>
      <div class="j-step tl"><div class="j-num">4</div>
        <div class="j-body"><h5>Tool (valida com regex, passa pelo MCP)</h5><p>Se precisar agir de verdade, aperta o botão certo — checando formato e permissão antes.</p></div>
      </div>
    </div>
    <div class="j-loop">↻ a resposta volta pelo mesmo caminho até o front-end</div>
  </section>

  <section id="principle">
    <div class="sec-head">
      <div class="sec-eyebrow">04 — Princípio importante</div>
      <h2>Um limite que vale gravar</h2>
    </div>
    <div class="principle">
      <div class="p-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#E8593F" stroke-width="1.8" width="20" height="20"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></div>
      <div>
        <h3>Segurança nunca depende do prompt</h3>
        <p>Validar identidade, controlar quem vê qual dado — isso não pode viver só na instrução de texto. Instrução é orientação, não trava.</p>
        <p>É sempre responsabilidade do Middleware / MCP, no back-end, antes da informação chegar até o modelo.</p>
      </div>
    </div>
  </section>

  <section id="scene">
    <div class="sec-head">
      <div class="sec-eyebrow">05 — Juntando tudo numa cena</div>
      <h2>As peças trabalhando juntas</h2>
    </div>
    <div class="scene">
      <div class="scene-line"><div class="scene-tag p">Prompt</div><div class="scene-txt">Diz: <b>"Você é um atendente educado e deve sempre confirmar o pedido antes de cancelar."</b></div></div>
      <div class="scene-line"><div class="scene-tag m">MCP</div><div class="scene-txt">Dá pra IA a <b>permissão de acessar</b> o sistema da loja — e valida o cliente.</div></div>
      <div class="scene-line"><div class="scene-tag t">Tool</div><div class="scene-txt">A ação <code>cancelar_pedido()</code> é o botão que ela aperta pra executar.</div></div>
    </div>
  </section>

  <section id="triage">
    <div class="sec-head">
      <div class="sec-eyebrow">06 — Painel de triagem</div>
      <h2>Achou um problema? Comece por aqui</h2>
      <p class="sec-desc">Clique no sintoma mais parecido. Se nenhum bater, use "Não sei".</p>
    </div>
    <div class="triage-grid" id="symptomGrid">
      <button class="symptom" data-target="v-prompt-a"><div class="sym-label">Sintoma A</div><div class="sym-title">Comportamento, tom ou regra fora do esperado</div></button>
      <button class="symptom" data-target="v-tool"><div class="sym-label">Sintoma B</div><div class="sym-title">Tentou executar e falhou — log mostra erro</div></button>
      <button class="symptom" data-target="v-prompt-b"><div class="sym-label">Sintoma C</div><div class="sym-title">Nunca tentou executar — sem chamada, sem erro</div></button>
      <button class="symptom" data-target="v-front"><div class="sym-label">Sintoma D</div><div class="sym-title">Executou sem erro, mas não chegou ao cliente</div></button>
      <button class="symptom" data-target="v-rag"><div class="sym-label">Sintoma E</div><div class="sym-title">Pergunta com resposta estável gera transbordo</div></button>
      <button class="symptom" data-target="v-security"><div class="sym-label">Sintoma F</div><div class="sym-title">IA mostrou dado sensível sem validar cliente</div></button>
      <button class="symptom unsure-btn" data-target="v-unsure"><div class="sym-label">Sintoma G</div><div class="sym-title">Não sei / parece mistura de mais de um sintoma</div></button>
    </div>

    <div class="verdict" id="v-prompt-a"><div class="verdict-owner p">Aciona: Prompt</div><p>A IA se comportou de um jeito que a instrução não previa — tom errado, regra ignorada.</p><p>Ajuste de regra ou exemplo no texto que ela segue.</p></div>
    <div class="verdict" id="v-tool"><div class="verdict-owner t">Aciona: Tool ou MCP</div><p>A ferramenta foi chamada de fato e a chamada falhou.</p><div class="check"><b>Cuidado:</b> se o erro veio de parâmetro errado enviado pela IA, a causa raiz pode ser o Prompt.</div></div>
    <div class="verdict" id="v-prompt-b"><div class="verdict-owner p">Aciona: Prompt</div><p>Log limpo e sem chamada não é "tudo certo" — a IA decidiu não usar a ferramenta.</p><p>Geralmente é instrução ambígua sobre quando acionar.</p></div>
    <div class="verdict" id="v-front"><div class="verdict-owner m">Aciona: depende — confira antes</div><div class="check"><b>Pergunta chave:</b> a resposta gerada menciona o resultado?</div><p><b style="color:var(--mcp)">Se sim</b> e não apareceu → Front/Back.</p><p><b style="color:var(--prompt)">Se não</b> → Prompt.</p></div>
    <div class="verdict" id="v-rag"><div class="verdict-owner r">Aciona: RAG</div><p>Se a resposta certa é sempre a mesma, o problema é falta de conteúdo, não comportamento.</p><p>Pode vir com ajuste mínimo de prompt, mas o grosso é conteúdo.</p></div>
    <div class="verdict" id="v-security"><div class="verdict-owner m">Aciona: Middleware / MCP</div><p>Nunca é ajuste de prompt. Autorização vive na camada de acesso.</p><p>Prioridade alta — reporte como incidente de segurança.</p></div>
    <div class="verdict" id="v-unsure"><div class="verdict-owner u">Não force uma categoria</div><p>Descreva: o que o cliente pediu, o que a IA respondeu, o que o log mostra, o que apareceu na tela.</p></div>
  </section>

  <section id="gray">
    <div class="sec-head">
      <div class="sec-eyebrow">07 — Zona cinzenta</div>
      <h2>Onde essa simplificação quebra</h2>
    </div>
    <div class="gray-grid">
      <div class="gray-card"><div class="gray-tag">Causa dupla</div><h4>Um sintoma, duas origens</h4><p>Erro na Tool pode ter causa raiz no Prompt.</p></div>
      <div class="gray-card"><div class="gray-tag">Log limpo ≠ tudo certo</div><h4>Nunca tentou não é o mesmo que falhou</h4><p>Ausência de erro pode significar que a ação nunca foi chamada.</p></div>
      <div class="gray-card"><div class="gray-tag">Conteúdo vs. comportamento</div><h4>Nem todo "a IA não sabia" é prompt</h4><p>Se a informação não existe em lugar nenhum acessível, falta conteúdo (RAG).</p></div>
      <div class="gray-card"><div class="gray-tag">Segurança nunca é prompt</div><h4>Cuidado com o "jeitinho"</h4><p>Um vazamento de dado não se resolve com regra de texto — precisa de trava na camada de acesso.</p></div>
    </div>
  </section>

  <section id="real-case">
    <div class="sec-head">
      <div class="sec-eyebrow">08 — Caso real</div>
      <h2>Mapeamento validado com o time técnico</h2>
    </div>
    <div class="table-wrap">
      <table class="case-table">
        <thead><tr><th>Prioridade</th><th>Problema</th><th>Solução</th><th>Alterar prompt?</th><th>Quem resolve</th></tr></thead>
        <tbody>
          <tr><td><span class="prio alta">Alta</span></td><td>Perguntas sobre horário geram transbordo</td><td><span class="owner-pill rag">RAG</span></td><td>Mínimo</td><td><span class="who-badge ia">Time de IA</span></td></tr>
          <tr><td><span class="prio alta">Alta</span></td><td>Perguntas sobre custo geram transbordo</td><td><span class="owner-pill rag">RAG</span></td><td>Não</td><td><span class="who-badge ia">Time de IA</span></td></tr>
          <tr><td><span class="prio media">Média</span></td><td>IA divulga dado da OS sem validar cliente</td><td><span class="owner-pill mcp">Middleware / MCP</span></td><td>Não</td><td><span class="who-badge dev">Dev / Infra</span></td></tr>
          <tr><td><span class="prio baixa">Baixa</span></td><td>Termo "OS" não fica claro</td><td><span class="owner-pill prompt">Prompt</span></td><td>Sim</td><td><span class="who-badge ia">Time de IA</span></td></tr>
          <tr><td><span class="prio baixa">Baixa</span></td><td>IA não reconhece CNPJ alfanumérico</td><td><span class="owner-pill tool">Validador / Regex</span></td><td>Não</td><td><span class="who-badge dev">Dev</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="pattern-note"><b>Padrão geral:</b> conteúdo (RAG) e ajuste pequeno de prompt o time de IA resolve sozinho. Segurança e código/regex precisam de dev ou infra.</div>
  </section>

  <section id="practice">
    <div class="sec-head">
      <div class="sec-eyebrow">09 — Pratique</div>
      <h2>Teste o que você aprendeu</h2>
      <p class="sec-desc">Primeiro um verdadeiro ou falso rápido, depois doze cenários de "quem é o dono".</p>
    </div>

    <div class="practice-sub"><div class="st">Parte 1</div><h3>Verdadeiro ou falso</h3></div>

    <div class="tf-card" data-answer="true">
      <div class="tf-statement">O back-end é onde o prompt, o RAG, o MCP e as tools ficam.</div>
      <div class="tf-btns"><button class="tf-btn" data-value="true">Verdadeiro</button><button class="tf-btn" data-value="false">Falso</button></div>
      <div class="tf-feedback">Isso mesmo — o front-end só exibe, quem pensa é o back-end.</div>
    </div>
    <div class="tf-card" data-answer="false">
      <div class="tf-statement">Regex é um tipo de inteligência artificial.</div>
      <div class="tf-btns"><button class="tf-btn" data-value="true">Verdadeiro</button><button class="tf-btn" data-value="false">Falso</button></div>
      <div class="tf-feedback">Falso. Regex é regra de texto fixa — não interpreta, só compara padrão.</div>
    </div>
    <div class="tf-card" data-answer="false">
      <div class="tf-statement">O front-end decide qual resposta a IA vai dar.</div>
      <div class="tf-btns"><button class="tf-btn" data-value="true">Verdadeiro</button><button class="tf-btn" data-value="false">Falso</button></div>
      <div class="tf-feedback">Falso. O front só exibe o que o back-end (prompt + modelo) decidiu.</div>
    </div>
    <div class="tf-card" data-answer="false">
      <div class="tf-statement">Segurança pode ser garantida só com uma boa instrução no prompt.</div>
      <div class="tf-btns"><button class="tf-btn" data-value="true">Verdadeiro</button><button class="tf-btn" data-value="false">Falso</button></div>
      <div class="tf-feedback">Falso. Autorização vive no Middleware/MCP — prompt é orientação, não trava.</div>
    </div>
    <div class="tf-card" data-answer="false">
      <div class="tf-statement">RAG e o modelo (prompt) são a mesma coisa.</div>
      <div class="tf-btns"><button class="tf-btn" data-value="true">Verdadeiro</button><button class="tf-btn" data-value="false">Falso</button></div>
      <div class="tf-feedback">Falso. RAG busca conteúdo (o que é fato); o prompt diz como se comportar.</div>
    </div>
    <div class="tf-card" data-answer="true">
      <div class="tf-statement">Um log sem nenhuma chamada de ferramenta pode significar que a IA nunca tentou usar a tool — não que ela falhou.</div>
      <div class="tf-btns"><button class="tf-btn" data-value="true">Verdadeiro</button><button class="tf-btn" data-value="false">Falso</button></div>
      <div class="tf-feedback">Verdadeiro. Log limpo ≠ tudo certo — pode ser decisão do modelo, ou seja, prompt.</div>
    </div>

    <div class="practice-sub" style="margin-top:36px;"><div class="st">Parte 2</div><h3>Quem é o dono de cada caso?</h3></div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 01</div>
      <div class="quiz-scenario">O bot tratou o cliente por "você" quando a regra pede "senhor(a)" nesse canal.</div>
      <div class="quiz-opts" data-answer="prompt">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">É comportamento — a instrução de tom não foi seguida.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 02</div>
      <div class="quiz-scenario">O bot tentou buscar o pedido e o log mostra timeout ao chamar <code style="font-family:var(--mono);color:var(--muted);">buscar_pedido()</code>.</div>
      <div class="quiz-opts" data-answer="tool">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">Houve tentativa real e ela falhou — é ferramenta.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 03</div>
      <div class="quiz-scenario">Cliente pediu pra rastrear a entrega, mas o log não mostra nenhuma chamada — nem sucesso, nem erro.</div>
      <div class="quiz-opts" data-answer="prompt">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">Log sem erro e sem chamada = decisão da IA. Instrução ambígua — aciona Prompt.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 04</div>
      <div class="quiz-scenario">Log confirma cancelamento processado. A resposta dizia "seu pedido foi cancelado", mas a tela não mostrou nada.</div>
      <div class="quiz-opts" data-answer="front">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">A IA gerou e comunicou certo — a falha é entre resposta e tela.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 05</div>
      <div class="quiz-scenario">Cliente pergunta o horário de atendimento e cai pra fila humana. A resposta certa é sempre a mesma.</div>
      <div class="quiz-opts" data-answer="rag">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">Informação estável e factual — falta na base de conhecimento.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 06 <span class="quiz-flag">Segurança</span></div>
      <div class="quiz-scenario">A IA responde dado de Ordem de Serviço sem confirmar CPF ou qualquer identificação do cliente.</div>
      <div class="quiz-opts" data-answer="mcp">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">Autorização nunca é prompt — precisa estar no Middleware/MCP.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 07</div>
      <div class="quiz-scenario">Cliente informa um CNPJ com letras e números, e a IA não reconhece o dado como válido.</div>
      <div class="quiz-opts" data-answer="tool">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">É o validador/regex que precisa ser ajustado no código.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 08</div>
      <div class="quiz-scenario">Cliente manda print reclamando "o bot não fez nada". Você ainda não tem acesso ao log.</div>
      <div class="quiz-opts" data-answer="unsure">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">Sem log, qualquer categoria é chute. Peça o log antes de classificar.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 09</div>
      <div class="quiz-scenario">Cliente pergunta o preço de um serviço específico, e esse preço muda conforme negociação — não é um valor fixo.</div>
      <div class="quiz-opts" data-answer="unsure">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">Cuidado: RAG só serve pra informação estável. Preço variável não deveria virar conteúdo fixo sem antes decidir com o time se aquilo pode ser automatizado.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 10</div>
      <div class="quiz-scenario">A IA mostra a resposta certa na tela, mas o botão "confirmar cancelamento" não reage quando o cliente clica.</div>
      <div class="quiz-opts" data-answer="front">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">O texto está certo, o problema é interação na tela — front-end.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 11</div>
      <div class="quiz-scenario">Cliente informa telefone como "(41) 99999999" (sem traço) e o validador não aceita o formato.</div>
      <div class="quiz-opts" data-answer="tool">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">De novo é o regex do validador — formato aceito é rígido demais.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-num">Cenário 12</div>
      <div class="quiz-scenario">Cliente faz uma piada sem relação com o atendimento, e a IA responde de um jeito bem fora do tom esperado pra empresa.</div>
      <div class="quiz-opts" data-answer="prompt">
        <button class="opt-btn" data-value="prompt">Prompt</button><button class="opt-btn" data-value="rag">RAG</button><button class="opt-btn" data-value="mcp">MCP</button><button class="opt-btn" data-value="tool">Tool</button><button class="opt-btn" data-value="front">Front/Back</button><button class="opt-btn" data-value="unsure">Não sei</button>
      </div>
      <div class="quiz-feedback">Fuga de tom em situação inesperada ainda é comportamento — Prompt.</div>
    </div>
  </section>

  <footer>
    <div class="foot-card">
      <div>
        <div style="font-family:var(--display);font-weight:600;font-size:16px;margin-bottom:6px;">Exercícios complementares</div>
        <div style="color:var(--muted);font-size:14px;">Outra atividade interativa pra reforçar o conteúdo.</div>
      </div>
      <a class="cta" href="https://claude.ai/public/artifacts/00ee15c6-145d-4eb7-a4e1-a98895dc6ded" target="_blank" rel="noopener">Abrir atividade →</a>
    </div>
    <div class="foot-note">Guia simplificado pra iniciantes — não substitui investigação técnica em casos ambíguos. Contribuições seguem bem-vindas.</div>
  </footer>

</div>

<script>
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  document.querySelectorAll('.symptom').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const isActive = btn.classList.contains('active');
      document.querySelectorAll('.symptom').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.verdict').forEach(v => v.classList.remove('show'));
      if (!isActive) { btn.classList.add('active'); document.getElementById(targetId).classList.add('show'); }
    });
  });

  let score = 0, total = 0;
  function bumpScore(correct){
    total++; if(correct) score++;
    document.getElementById('scoreCount').textContent = score;
    document.getElementById('scoreTotal').textContent = total;
  }

  document.querySelectorAll('.tf-card').forEach(card => {
    const answer = card.getAttribute('data-answer');
    const feedback = card.querySelector('.tf-feedback');
    const buttons = card.querySelectorAll('.tf-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');
        buttons.forEach(b => b.disabled = true);
        const isCorrect = value === answer;
        if (isCorrect) { btn.classList.add('correct'); }
        else { btn.classList.add('wrong'); card.querySelector(`[data-value="${answer}"]`).classList.add('correct'); }
        feedback.classList.add('show');
        bumpScore(isCorrect);
      });
    });
  });

  document.querySelectorAll('.quiz-opts').forEach(group => {
    const answer = group.getAttribute('data-answer');
    const feedback = group.parentElement.querySelector('.quiz-feedback');
    const buttons = group.querySelectorAll('.opt-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');
        buttons.forEach(b => b.disabled = true);
        const isCorrect = value === answer;
        if (isCorrect) { btn.classList.add('correct'); }
        else { btn.classList.add('wrong'); group.querySelector(`[data-value="${answer}"]`).classList.add('correct'); }
        feedback.classList.add('show');
        bumpScore(isCorrect);
      });
    });
  });
</script>

</body>
</html>
