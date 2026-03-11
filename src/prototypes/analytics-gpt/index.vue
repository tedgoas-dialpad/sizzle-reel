<template>
  <div class="analytics-gpt-app">
    <LeftBar activeItem="trending-up" />
    <main class="analytics-gpt-content">
      <ChatWorkspace />
    </main>
  </div>
</template>

<script setup>
import LeftBar from '@/components/LeftBar.vue'
import ChatWorkspace from './components/ChatWorkspace.vue'
</script>

<style scoped>
.analytics-gpt-app {
  display: grid;
  grid-template-columns: 50px 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: var(--dt-font-family-body);
}

.analytics-gpt-content {
  overflow-y: auto;
  background-color: var(--dt-color-surface-secondary);
}
</style>
