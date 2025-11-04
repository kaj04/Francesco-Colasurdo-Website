(function(){
  // Riferimenti DOM
  const els = {
    launcher: document.getElementById('fc-launcher'),
    panel:    document.getElementById('fc-panel'),
    msgs:     document.querySelector('.fc-messages'),
    form:     document.querySelector('.fc-form'),
    input:    document.querySelector('.fc-input'),
    send:     document.querySelector('.fc-send'),
  };
  if(!els.launcher || !els.panel || !els.msgs || !els.form || !els.input) return;

  // Utils
  const toBottom = () => { els.msgs.scrollTop = els.msgs.scrollHeight; };

  // Open/Close + click fuori
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

  // Messaggi
  function addMsg(text, who='bot'){
    const d = document.createElement('div');
    d.className = `fc-msg ${who==='me'?'fc-me':'fc-bot'}`;
    d.textContent = text;
    els.msgs.appendChild(d);
    toBottom();
  }

  // Typing indicator
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

  // Onboarding (testo conciso + 2 domande)
  function renderOnboarding(){
    const box = document.createElement('div');
    box.className = 'fc-msg fc-bot';
    box.innerHTML = `
      <strong>How it works</strong><br>
      Ask me about my career, university work, personal projects, results, or current goals.<br>
      <em>PS:</em> the first reply may take up to ~1 minute if the server is resting, in the end we all need rest.
      <div style="margin-top:.6rem; display:flex; gap:.5rem; flex-wrap:wrap;">
        <button class="fc-chip">What are you currently studying?</button>
        <button class="fc-chip">What skills do you have with Python?</button>
      </div>
    `;
    els.msgs.appendChild(box);
    box.querySelectorAll('.fc-chip').forEach(chip=>{
      chip.addEventListener('click', ()=> { openPanel(); sendMessage(chip.textContent); });
    });
    toBottom();
  }

  // Invio: {question} -> backend -> {answer}; niente sources
  async function sendMessage(q){
    if(!q) return;
    addMsg(q, 'me');

    const url = (typeof window !== 'undefined' && window.FC_API_URL)
      ? window.FC_API_URL
      : '/api/chat';

    // Sequenza “Retrieving → Typing…”
    showTyping('Retrieving information');
    let phase = 'retrieving';
    const switchToTyping = setTimeout(()=>{
      phase = 'typing';
      showTyping('Typing…');
    }, 700);

    try{
      const res = await fetch(url, {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ question: q })
      });

      clearTimeout(switchToTyping);
      if(phase !== 'typing'){ showTyping('Typing…'); }

      if(!res.ok){
        hideTyping();
        addMsg('Sorry, backend not reachable right now. Please try again in a moment.', 'bot');
        return;
      }

      const data = await res.json();
      hideTyping();

      const answer = (data && typeof data.answer === 'string') ? data.answer : 'No answer.';
      addMsg(answer, 'bot');

      // Niente sources (scelte estetiche)
    } catch (e){
      clearTimeout(switchToTyping);
      hideTyping();
      addMsg('Sorry, something went wrong. Please try again.', 'bot');
    }
  }

  // Eventi
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

  // Etichetta invio (se serve)
  if(els.send) els.send.textContent = 'Send';
})();
