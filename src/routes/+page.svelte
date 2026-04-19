<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
  import Skills from '$lib/components/sections/Skills.svelte';
  import WorkedWith from '$lib/components/sections/WorkedWith.svelte';
</script>

<svelte:head>
  <title>Alexander Data Solutions Ltd | AI & Data Science Consulting</title>
  <meta name="description" content="Senior Data Scientist specializing in Computer Vision, AI, and Cloud Solutions. Contractor outside IR35. From McLaren Racing to patented innovations." />
  <meta property="og:title" content="Alexander Data Solutions Ltd | AI & Data Science Consulting" />
  <meta property="og:description" content="Senior Data Scientist specializing in Computer Vision, AI, and Cloud Solutions. Contractor outside IR35." />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="home-container">
  <Hero />
  <WorkedWith />
  <Projects />
  <Skills />
</div>

