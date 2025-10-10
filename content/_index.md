---
title: "Home"
---

<div class="paper-page">

  <!-- Titolo su due righe: nome + tagline -->
  <header class="paper-header">
    <h1 class="paper-title">
      <span class="name">Francesco Colasurdo</span>
      <span class="tagline">Personal Shared Web-Space</span>
    </h1>
  </header>

  <hr class="paper-rule" />

  <!-- ABSTRACT: immagine + pannello testo con stessa altezza -->
  <section class="paper-abstract">
    <div class="paper-abstract-grid equal-rows">
      <figure class="paper-portrait">
        <img src="/Francesco-Colasurdo-Website/Image-Home.jpeg?v=2"
             alt="Francesco Colasurdo" />
      </figure>
      <div class="abstract-panel">
        <h2><em>Abstract</em></h2>
        <div class="abstract-text">
          <p><em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nibh
            sit amet velit porta volutpat. Proin dictum nisl at scelerisque vulputate…
          </em></p>
        </div>
      </div>
    </div>
  </section>

  <hr class="paper-rule" />

  <!-- INTRODUCTION: testo in due colonne stile paper -->
  <section class="paper-section" aria-labelledby="intro-title">
    <h2 id="intro-title">Introduction</h2>
    <div class="two-col">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur arcu at
        suscipit aliquam… (chi sono, cosa mi piace fare, su cosa sto lavorando attualmente).
      </p>
      <p>
        Altri paragrafi di prova… Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus nec consectetur neque. Cras vestibulum risus id gravida malesuada…
      </p>
      <p>
        Integer lobortis, dui ac scelerisque auctor, magna tortor tempus mi, at volutpat
        tortor purus vitae lacus. Suspendisse potenti. Donec posuere mauris ut ante…
      </p>
    </div>
  </section>

  <hr class="paper-rule" />

  <!-- (Opzionale) VIDEO INTRO: consigliato 45–60s per recruiter -->
  <section class="paper-section" aria-labelledby="video-title">
    <h2 id="video-title">Video Introduction</h2>
    <p class="video-note">Una breve presentazione (45–60s) aiuta molto i recruiter: chi sei, cosa cerchi, cosa ti distingue.</p>

    <!-- Scegline UNO: YouTube/Vimeo (iframe) OPPURE file mp4 locale -->

    <!-- YouTube/Vimeo embed (sostituisci l'URL con il tuo) -->
    <div class="video-embed">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Video Introduction"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>

    <!-- Oppure, video locale:
    <div class="video-embed">
      <video controls preload="metadata" poster="{{ "images/video-poster.jpg" | relURL }}">
        <source src="{{ "video/intro.mp4" | relURL }}" type="video/mp4">
        Il tuo browser non supporta il tag video.
      </video>
    </div>
    -->
  </section>

</div>
