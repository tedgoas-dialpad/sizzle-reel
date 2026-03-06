<template>
  <div>
    <nav class="d-d-flex d-ai-center d-p16" style="border-bottom: 1px solid var(--dt-color-border-default);">
      <div style="max-width: 960px; width: 100%; margin: 0 auto;">
        <router-link to="/" class="d-link d-headline-small">Sizzle Reel</router-link>
      </div>
    </nav>
    <main style="max-width: 960px; width: 100%; margin: 0 auto;">
      <router-view />
    </main>
  </div>
</template>
