(function(){
  // CONFIG: metti qui l'URL pubblico del tuo backend
  const API_BASE = "https://cv-assistant-backend-jb20.onrender.com/api";
  let conversationId = localStorage.getItem("fc_conversation_id") || null;

  // UI: bottone + pannello
  function ensureUI(){
    if(document.getElementById("fc-chat-toggle")) return;

    const btn = document.createElement("button");
    btn.id = "fc-chat-toggle";
    btn.title = "Chat";
    btn.setAttribute("aria-label","Open chat");
    btn.innerHTML = "💬";
    document.body.appendChild(btn);

    const panel = document.createElement("div");
    panel.id = "fc-chat-panel";
    panel.innerHTML = `
      <div id="fc-chat-header">Assistant</div>
      <div id="fc-chat-body"></div>
      <div id="fc-chat-input">
        <input id="fc-chat-text" placeholder="Scrivi un messaggio…" />
        <button id="fc-chat-send">Invia</button>
      </div>
    `;
    document.body.appendChild(panel);

    btn.addEventListener("click", ()=> {
      panel.style.display = (panel.style.display === "flex") ? "none" : "flex";
      panel.style.flexDirection = "column";
      document.getElementById("fc-chat-text").focus();
    });

    document.getElementById("fc-chat-send").addEventListener("click", sendMessage);
    document.getElementById("fc-chat-text").addEventListener("keydown", (e)=>{
      if(e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
  }

  function addMessage(text, who){
    const body = document.getElementById("fc-chat-body");
    const b = document.createElement("div");
    b.className = `fc-msg ${who === "user" ? "fc-user" : "fc-bot"}`;
    b.textContent = text;
    body.appendChild(b);
    body.scrollTop = body.scrollHeight;
  }

  async function sendMessage(){
    const input = document.getElementById("fc-chat-text");
    const text = (input.value || "").trim();
    if(!text) return;
    input.value = "";
    addMessage(text, "user");

    // placeholder "typing"
    const thinking = document.createElement("div");
    thinking.className = "fc-msg fc-bot";
    thinking.textContent = "…";
    document.getElementById("fc-chat-body").appendChild(thinking);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          question: text,
          conversation_id: conversationId || null
        })
      });

      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      thinking.remove();
      addMessage(data.answer ?? data.reply ?? "(nessuna risposta)", "bot");

      if(data.conversation_id){
        conversationId = data.conversation_id;
        localStorage.setItem("fc_conversation_id", conversationId);
      }

    } catch(err){
      thinking.remove();
      addMessage("Errore di rete. Riprova più tardi.", "bot");
      console.error("Chat widget error:", err);
    }
  }

  // init
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ensureUI);
  } else {
    ensureUI();
  }
})();
