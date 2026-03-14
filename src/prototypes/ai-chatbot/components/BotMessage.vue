<template>
  <div class="bot-message" :class="{ 'is-new': isNew }">
    <div
      class="bot-avatar"
      :style="{ backgroundColor: avatarColor }"
    >
      <svg v-if="sender === 'bot'" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="white"/>
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
