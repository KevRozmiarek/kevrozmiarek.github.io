---
layout: page
permalink: /publications/
title: publications
description: published research and manuscripts in progress.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<section class="publication-section" aria-labelledby="coming-soon-title">
<h2 id="coming-soon-title">Coming soon — submitted &amp; under review</h2>

{% bibliography -f forthcoming --query @*[stage=review] --group_by none %}

</section>
<section class="publication-section" aria-labelledby="in-preparation-title">
<h2 id="in-preparation-title">In preparation</h2>

{% bibliography -f forthcoming --query @*[stage=preparation] --group_by none %}

</section>
<section class="publication-section" aria-labelledby="published-title">
<h2 id="published-title">Published work</h2>

{% bibliography %}

</section>
<p id="publication-no-results" hidden>No publications match your search.</p>
</div>
