# Guia de QA · Chatbot de IA (chatai)

Repositório oficial contendo documentação técnica, diretrizes metodológicas e cenários de teste aplicados à garantia de qualidade (*Quality Assurance*) de sistemas conversacionais baseados em Inteligência Artificial Generativa[cite: 3].

## 1. Visão Geral
Testar inteligência artificial generativa difere fundamentalmente de testar um formulário tradicional de software. Uma mesma pergunta pode gerar duas respostas corretas com construções textuais diferentes, o que exige uma mudança direta nos critérios de validação de qualidade[cite: 3].

---

## 2. Glossário de Teste
* **Golden Dataset:** Conjunto de perguntas com resposta certa, verificada por quem entende do negócio, servindo de régua para medir se o sistema piorou[cite: 3].
* **Regressão:** Processo de testar novamente tudo o que já funcionava após qualquer alteração, garantindo que nada quebrou sem consentimento[cite: 3].
* **Drift:** Fenômeno em que o comportamento do bot vai mudando aos poucos ao longo do tempo, sem alterações visíveis no código[cite: 3].
* **Red-Team:** Tentativa ativa de quebrar o comportamento do bot antes que usuários externos o façam (teste de invasão comportamental)[cite: 3].
* **Fidelidade:** Métrica que avalia o quanto a resposta gerada é fiel ao conteúdo da base de dados, sem inventar detalhes[cite: 3].

---

## 3. Pipeline de Testes (As 5 Camadas)
O processo de validação é estruturado em cinco camadas sucessivas de proteção:
1. **Teste Unitário:** Pares de pergunta-resposta isolados a cada ajuste de prompt para validar tom e recusas[cite: 3].
2. **Teste Funcional:** Conversas completas e sequenciais para assegurar a retenção de contexto pelo sistema[cite: 3].
3. **Teste de Regressão:** Execução do *golden dataset* para comparar o comportamento atual com a última versão estável[cite: 3].
4. **Teste Adversarial e de Segurança:** Tentativas ativas de burlar instruções, extrair dados ou sair do escopo[cite: 3].
5. **Monitoramento:** Acompanhamento contínuo em produção com emissão de alertas em caso de desvios operacionais[cite: 3].

---

## 4. Checklist por Peça
* **Prompt (Comportamento):** Validação de tom sob pressão, recusas educadas e consistência em frases variadas[cite: 3].
* **RAG (Conteúdo):** Verificação de fidelidade à base de dados, precisão de trechos e admissão de lacunas de conhecimento[cite: 3].
* **MCP (Acesso e Segurança):** Restrição de dados sensíveis e bloqueio de solicitações direcionadas a contas de terceiros[cite: 3].
* **Tool (Execução):** Homologação de parâmetros enviados às ferramentas, suporte a formatos variados e clareza em erros[cite: 3].
* **Front / Back (Entrega):** Verificação de renderização visual de respostas, funcionamento de botões e tempo de resposta[cite: 3].

---

## 5. Licença
Este repositório é distribuído sob os termos da licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.