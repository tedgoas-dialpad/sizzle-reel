<template>
  <div class="typing-indicator-row">
    <div class="typing-avatar" :style="{ backgroundColor: avatarColor }">
      <svg v-if="sender === 'bot'" width="18" height="9" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8682 7.14697L21.5409 0H15.9998L18.8574 8.77795C19.3785 10.378 20.6315 11.6322 22.2315 12.1556L32.0001 15.3465V9.80418L23.867 7.14812L23.8682 7.14697Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.13301 7.14706L10.4592 8.85725e-05H16.0003L13.1427 8.77804C12.6216 10.3781 11.3686 11.6322 9.76855 12.1557L0 15.3466V9.80427L8.13301 7.14821V7.14706Z" fill="white"/>
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
    default: '#1B7D4E',
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
