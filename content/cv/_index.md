---
title: "CV"
description: "Curriculum Vitae of Francesco Colasurdo"
---

<style>
  :root { --content-width: 1400px; }

  /* Actions */
  .cv-actions {
    margin: 1rem 0 1.5rem;
    text-align: center;
  }

  .btn-download {
    display: inline-block;
    padding: 0.6rem 1rem;
    border: 1px solid #d6d6d6;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
  }

  /* CV Container */
  .cv-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  /* Clean embedded PDF (no toolbar or borders) */
  .cv-embed {
    width: 100%;
    height: 1100px;
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  }

  /* Responsive */
  @media (max-width: 800px) {
    :root { --content-width: 96vw; }
    .cv-embed { height: 900px; }
  }

  @media (min-width: 1700px) {
    :root { --content-width: 1600px; }
  }
</style>

> **For the curious ones**: here’s my CV.  
> Whether you’re a student or a recruiter, I’d be happy to receive your feedback or suggestions.  
> Feel free to download it and reach out!

<div class="cv-actions">
  <a class="btn-download" href="/Francesco-Colasurdo-Website/Francesco-Colasurdo-CV-4.pdf" download>
    Download my CV
  </a>
</div>

<!-- Clean PDF embed without toolbar -->
<div class="cv-container">
  <object
    data="/Francesco-Colasurdo-Website/Francesco-Colasurdo-CV-4.pdf#toolbar=0&navpanes=0&scrollbar=0"
    type="application/pdf"
    class="cv-embed">
    <p>Your browser does not support inline PDFs. <a href="/Francesco-Colasurdo-Website/Francesco-Colasurdo-CV-4.pdf">Download it here.</a></p>
  </object>
</div>
