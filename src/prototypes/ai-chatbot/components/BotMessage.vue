<template>
  <div class="bot-message" :class="{ 'is-new': isNew }">
    <div
      class="bot-avatar"
      :style="{ backgroundColor: avatarColor }"
    >
      <svg v-if="sender === 'bot'" width="18" height="9" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8682 7.14697L21.5409 0H15.9998L18.8574 8.77795C19.3785 10.378 20.6315 11.6322 22.2315 12.1556L32.0001 15.3465V9.80418L23.867 7.14812L23.8682 7.14697Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.13301 7.14706L10.4592 8.85725e-05H16.0003L13.1427 8.77804C12.6216 10.3781 11.3686 11.6322 9.76855 12.1557L0 15.3466V9.80427L8.13301 7.14821V7.14706Z" fill="white"/>
      </svg>
      <span v-else class="agent-initial">S</span>
    </div>
    <div class="bot-message-content">
      <div class="message-meta">
        <span class="message-name">{{ senderName }}</span>
        <span class="message-time">{{ time }}</span>
      </div>
      <div class="message-text" v-html="formattedText" />
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  sender: {
    type: String,
    default: 'bot',
  },
  senderName: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  avatarColor: {
    type: String,
    default: '#1B7D4E',
  },
  isNew: {
    type: Boolean,
    default: false,
  },
})

const formattedText = computed(() => {
  return props.text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
})
</script>

<style scoped>
.bot-message {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.bot-message.is-new {
  animation: fadeSlideUp 0.35s ease;
}

.bot-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.agent-initial {
  color: #fff;
  font-weight: 600;
  font-size: 13px;
}

.bot-message-content {
  flex: 1;
  min-width: 0;
}

.message-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.message-name {
  font-weight: 600;
  font-size: 13px;
  color: #1C1C1C;
}

.message-time {
  font-size: 11px;
  color: #9A9A9A;
}

.message-text {
  font-size: 13px;
  color: #3A3A3A;
  line-height: 1.55;
}

.message-text :deep(strong) {
  font-weight: 600;
  color: #1C1C1C;
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
