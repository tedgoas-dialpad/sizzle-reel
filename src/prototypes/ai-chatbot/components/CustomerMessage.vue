<template>
  <div class="customer-message" :class="{ 'is-new': isNew }">
    <div class="customer-avatar">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
      </svg>
    </div>
    <div class="customer-message-content">
      <div class="message-meta">
        <span class="message-name">You</span>
        <span class="message-time">{{ time }}</span>
      </div>
      <div class="message-text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  time: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.customer-message {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.customer-message.is-new {
  animation: fadeSlideUp 0.35s ease;
}

.customer-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #7C4DFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.customer-message-content {
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
