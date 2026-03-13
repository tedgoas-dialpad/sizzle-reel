<template>
  <div class="typing-indicator-row">
    <div class="typing-avatar" :style="{ backgroundColor: avatarColor }">
      <svg v-if="sender === 'bot'" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="white"/>
      </svg>
      <span v-else class="typing-initial">S</span>
    </div>
    <div class="typing-bubble">
      <span class="typing-dot" />
      <span class="typing-dot" />
      <span class="typing-dot" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  sender: {
    type: String,
    default: 'bot',
  },
  avatarColor: {
    type: String,
    default: '#E20074',
  },
})
</script>

<style scoped>
.typing-indicator-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  animation: fadeSlideUp 0.25s ease;
}

.typing-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.typing-initial {
  color: #fff;
  font-weight: 600;
  font-size: 13px;
}

.typing-bubble {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 14px;
  background: #F5F5F5;
  border-radius: 14px 14px 14px 4px;
}

.typing-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #BFBFBF;
  animation: bounce 1.2s infinite ease-in-out;
}

.typing-dot:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
