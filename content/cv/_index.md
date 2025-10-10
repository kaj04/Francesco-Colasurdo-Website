---
title: "CV"
description: "Curriculum Vitae di Francesco Colasurdo"
---

<style>
  /* Allarga solo questa pagina (PaperMod usa questa variabile) */
  :root { --content-width: 1400px; }

  /* Azioni */
  .cv-actions { margin: 1rem 0 1.5rem; text-align: center; }
  .btn-download {
    display: inline-block; padding: .6rem 1rem; border: 1px solid #d6d6d6; border-radius: .5rem;
    text-decoration: none; font-weight: 600;
  }

  /* Griglia a due colonne per le due pagine del CV */
  .cv-pages {
    display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
    align-items: start; justify-items: center;
    margin: 0 auto; /* centra la griglia */
  }
  .cv-pages img {
    width: 100%; height: auto; border: 1px solid #e0e0e0; box-shadow: 0 2px 10px rgba(0,0,0,.06);
  }

  /* Mobile: impila le pagine una sotto l'altra */
  @media (max-width: 800px) {
    :root { --content-width: 96vw; }
    .cv-pages { grid-template-columns: 1fr; }

  /* facoltativo: su schermi molto larghi, ancora un po' più ampia */
  @media (min-width: 1700px) {
    :root { --content-width: 1600px; }
  }
</style>

> **Per i più curiosi**: ecco il mio CV. Se sei uno studente o un recruiter, sarò felice di ricevere suggerimenti.  
> Sentiti libero di scaricarlo e contattarmi!

<div class="cv-actions">
  <a class="btn-download" href="/Francesco-Colasurdo-Website/CV-Francesco-Colasurdo-LateX.pdf" download>
    Scarica il mio CV
  </a>
</div>

<!-- Visualizzazione non interattiva: immagini statiche del PDF -->
<div class="cv-pages">
  <img src="/Francesco-Colasurdo-Website/CV-pagina1.png" alt="CV – pagina 1" loading="eager">
  <img src="/Francesco-Colasurdo-Website/CV-pagina2.png" alt="CV – pagina 2" loading="lazy">
</div>
