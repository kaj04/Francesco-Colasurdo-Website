(function(){
  // RIFERIMENTI
  const els = {
    launcher: document.getElementById('fc-launcher'),
    panel:    document.getElementById('fc-panel'),
    msgs:     document.querySelector('.fc-messages'),
    form:     document.querySelector('.fc-form'),
    input:    document.querySelector('.fc-input'),
    send:     document.querySelector('.fc-send'),
  };
  if(!els.launcher || !els.panel || !els.msgs || !els.form || !els.input) return;

  // UTIL: scroll in fondo
  function toBottom(){ els.msgs.scrollTop = els.msgs.scrollHeight; }

  // CHIUSURA CLIC FUORI
  function clickOutsideToClose(e){
    const inPanel = els.panel.contains(e.target);
    const onLauncher = els.launcher.contains(e.target);
    if(!inPanel && !onLauncher){ closePanel(); }
  }
  function openPanel(){
    els.panel.hidden = false;
    document.addEventListener('mousedown', clickOutsideToClose);
    if(els.msgs.childElementCount === 0){ renderOnboarding(); }
    els.input.focus();
  }
  function closePanel(){
    els.panel.hidden = true;
    document.removeEventListener('mousedown', clickOutsideToClose);
  }

  // ONBOARDING
  function renderOnboarding(){
    const box = document.createElement('div');
    box.className = 'fc-msg fc-bot';
    box.innerHTML = `
      <strong>How this works</strong><br>
      Ask me about my projects, skills, and results. Answers are based only on my public docs.<br>
      <em>Tip:</em> the first answer may take longer (up to ~2 minutes) if the Render server is waking up.
      <div style="margin-top:.6rem; display:flex; gap:.5rem; flex-wrap:wrap;">
        <button class="fc-chip">Top 3 projects with impact</button>
        <button class="fc-chip">Summarize thesis & what I built</button>
        <button class="fc-chip">Skills → which projects?</button>
      </div>
    `;
    els.msgs.appendChild(box);
    box.querySelectorAll('.fc-chip').forEach(chip=>{
      chip.addEventListener('click', ()=> { openPanel(); sendMessage(chip.textContent); });
    });
    toBottom();
  }

  // MESSAGGI
  function addMsg(text, who='bot'){
    const d = document.createElement('div');
    d.className = `fc-msg ${who==='me'?'fc-me':'fc-bot'}`;
    d.textContent = text;
    els.msgs.appendChild(d);
    toBottom();
  }

  // INDICATORE
  let typingEl = null;
  function showTyping(label){
    if(typingEl) typingEl.remove();
    typingEl = document.createElement('div');
    typingEl.className = 'fc-typing';
    typingEl.innerHTML = `<span>${label}</span> <span class="fc-dots"><span></span><span></span><span></span></span>`;
    els.msgs.appendChild(typingEl);
    toBottom();
  }
  function hideTyping(){ if(typingEl){ typingEl.remove(); typingEl=null; } }

  // INVIO → CHIAMATA BACKEND (formato {question} → {answer, sources})
  async function sendMessage(q){
    if(!q) return;
    addMsg(q, 'me');
    showTyping('Thinking');

    const url = (typeof window !== 'undefined' && window.FC_API_URL)
      ? window.FC_API_URL
      : '/api/chat'; // fallback

    try{
      const switchToRetrieving = setTimeout(()=> showTyping('Retrieving information'), 300);

      const res = await fetch(url, {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ question: q })
      });

      clearTimeout(switchToRetrieving);
      showTyping('Generating answer');

      if(!res.ok){
        hideTyping();
        addMsg('Sorry, backend not reachable right now. Please try again in a moment.');
        return;
      }

      const data = await res.json();
      hideTyping();

      const answer = (data && typeof data.answer === 'string') ? data.answer : 'No answer.';
      addMsg(answer, 'bot');

    } catch (e){
      hideTyping();
      addMsg('Sorry, something went wrong. Please try again.', 'bot');
    }
  }

  // EVENTI
  els.launcher.addEventListener('click', openPanel);
  els.form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const q = (els.input.value || '').trim();
    if(!q) return;
    els.input.value = '';
    sendMessage(q);
  });
  els.input.addEventListener('keydown', (e)=>{
    if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); els.form.requestSubmit(); }
  });

  // TESTI
  if(els.send) els.send.textContent = 'Send';
})();
