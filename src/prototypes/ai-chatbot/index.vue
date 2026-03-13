<template>
  <div class="ai-chatbot-page">
    <ChatWidget />
  </div>
</template>

<script setup>
import ChatWidget from './components/ChatWidget.vue'
</script>

<style scoped>
.ai-chatbot-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #F0F0F0;
  font-family: var(--dt-font-family-body, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
}
</style>
