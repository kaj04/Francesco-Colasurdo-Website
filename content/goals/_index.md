---
title: "Goals"
---
<style>
/* Callout "annuale" con barra laterale */
.annual{
  --paper: #fffdf8;                /* fallback, verrà sovrascritto dal tema in dark mode */
  --line:  rgba(0,0,0,.14);
  --accent: #2b6cb0;

  position: relative;
  margin: 1.25rem 0 1.75rem;
  padding: 1rem 1rem 1rem 1.25rem; /* spazio a sinistra per la barra */
  background: color-mix(in oklab, var(--paper) 92%, white);
  border: 1px solid var(--line);
  border-left: 6px solid var(--accent);
  border-radius: .5rem;
  box-shadow: 0 1px 0 rgba(0,0,0,.02), 0 12px 24px rgba(0,0,0,.04);
}

/* Etichetta flottante (es. "Y25") */
.annual::before{
  content: attr(data-label);
  position: absolute;
  left: -1px; top: -0.75rem;
  transform: translateY(-50%);
  font-size: .80rem;
  font-weight: 700;
  letter-spacing: .02em;
  background: var(--paper);
  color: color-mix(in oklab, var(--accent) 80%, black);
  border: 1px solid var(--line);
  border-left: 6px solid var(--accent);
  padding: .15rem .5rem .15rem .4rem;
  border-top-left-radius: .35rem;
  border-bottom-left-radius: .35rem;
  border-top-right-radius: .35rem;
}

/* Titoli dentro il box: togli margine alto così il box appare "unico" */
.annual h3, .annual h2{ margin-top: .2rem; }

/* dark mode di cortesia, se il tema la supporta */
@media (prefers-color-scheme: dark){
  .annual{
    --paper: #0f1115;
    --line: rgba(255,255,255,.18);
    background: color-mix(in oklab, var(--paper) 92%, black);
    box-shadow: 0 1px 0 rgba(255,255,255,.02), 0 12px 24px rgba(0,0,0,.35);
  }
}
</style>

<em>
I like setting goals that are measurable through clear KPIs and concrete, objective sub-tasks.

Even when I set more abstract goals, I try to define tangible milestones to track and validate my progress.

I find it very helpful to work in “Quarters”, which don’t follow the usual business quarters but rather the academic ones, starting in September and lasting around ten weeks each.

This page will be updated quarter by quarter to increase personal accountability, keep my thoughts organized, and, above all, to connect with people who share similar goals or experiences, maybe even someone who’s already been there and can share their insights.

Some goals will last throughout the year but evolve over time, all inspired by one simple principle: **“**Mens sana in corpore sano**.”**
</em>

<div class="annual" data-label="Y25">
  
### Y25 Mens Sana

At TU/e, the academic environment is genuinely healthy, no one asks for your grades or GPA.

Since you can’t reject exam results here, there’s no point in punishing yourself; the focus is on learning for your own growth, not for numbers.

My numerical goals aren’t just checkboxes to tick, I could easily surpass them by cheating on tests (I do not know if it would be easy here).

Instead, assuming that grades reflect true understanding, I want to verify that I’ve learned as much as possible while staying passionate about each subject.

So, my aim is to achieve an **average grade of 8/10,** meaning I’ve absorbed roughly 80% of each course’s content.

</div>

<div class="annual" data-label="Y25">

### Y25 Corpore Sano

*“Imagine you only had one car for your whole life, you’d change the tires monthly, the brakes every semester, the oil weekly, and always use the best fuel available.”*

That’s exactly how I want to treat my body.

I follow a balanced diet, avoid bad habits (smoking, drugs, alcohol, caffeine), and train consistently to improve both strength and mobility.

During this quarter, in addition to my 4 weekly weight sessions, I plan to add 2 swimming workouts to boost mobility and introduce new challenges.

|Goal|KPI|
| --- | --- |
| **Increase upper body strength** | 4x10 80kg Incline Bench (Smith Machine) |
| **Increase lower body strength** | 4x10 85kg Free Squat |
| **Improve flexibility** | Touch my toes standing |
| **Increase mass** | Reach 74 kg (morning, empty stomach) |

</div>

### Q2 Personal Project *Simple Poker Solver*

I see this project as a great opportunity to combine passion and purpose.

I’m a huge fan of poker, and I call it a “sport” because it’s not gambling: it’s driven by probability, game theory, and economic dynamics.

Since I plan to apply for summer internships, hackathons, and research projects, I believe a solid ML project could add real value to my profile.

So, my goal is to build something that merges machine learning and AI with poker, probably a solver that computes optimal decisions in simple cases like pre-flop or heads-up scenarios.

Sub-tasks:

- Build the blueprint
- Test it against GTO Wizard (allowing a 5% error margin)
- Publish it on GitHub

### Q2 Identifying Companies for Summer Internship 2026

Next summer, I’m still deciding whether to take a break from academics or dive into a new work experience, something stimulating yet not overwhelming.

Meanwhile, I’ll start researching companies and positions that align with my interests, to understand where I’d actually like to apply.

Internships are highly competitive, and statistically speaking, I should apply to many.

However, I prefer quality over quantity: first define the country, then the industry, and finally the specific role.

As a junior, I’m quite flexible, I’d like to explore roles such as Data Analyst, Data Scientist, or AI Engineer, to discover which path truly fits me.

