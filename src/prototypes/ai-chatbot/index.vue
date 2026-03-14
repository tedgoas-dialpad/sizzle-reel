<template>
  <div class="ai-chatbot-page">
    <Transition name="widget">
      <div v-if="isOpen" class="chat-widget-wrapper">
        <ChatWidget :active="isOpen" @close="isOpen = false" />
      </div>
    </Transition>

    <button v-if="!isOpen" class="fab" @click="isOpen = true" aria-label="Open chat">
      <!-- Aerolabs logo -->
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8682 7.14697L21.5409 0H15.9998L18.8574 8.77795C19.3785 10.378 20.6315 11.6322 22.2315 12.1556L32.0001 15.3465V9.80418L23.867 7.14812L23.8682 7.14697Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.13301 7.14706L10.4592 8.85725e-05H16.0003L13.1427 8.77804C12.6216 10.3781 11.3686 11.6322 9.76855 12.1557L0 15.3466V9.80427L8.13301 7.14821V7.14706Z" fill="white"/>
</svg>

    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChatWidget from './components/ChatWidget.vue'

const isOpen = ref(false)
</script>

<style scoped>
.ai-chatbot-page {
  width: 100vw;
  height: 100vh;
  background: #F0F0F0;
  font-family: var(--dt-font-family-body, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
}

.fab {
  position: fixed;
  top: calc(50% + 244px);
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1C2B39;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
  transition: filter 0.15s;
  z-index: 10;
}

.fab:hover {
  filter: brightness(1.2);
}

.chat-widget-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  z-index: 10;
}

/* Widget transition */
.widget-enter-active {
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}

.widget-leave-active {
  transition: opacity 0.15s ease-in, transform 0.15s ease-in;
}

.widget-enter-from,
.widget-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
}

.widget-enter-to,
.widget-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
</style>
