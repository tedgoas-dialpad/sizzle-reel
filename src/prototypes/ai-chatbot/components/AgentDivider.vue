<template>
  <div class="agent-divider" :class="{ 'is-new': isNew }">
    <div class="divider-line" />
    <div class="divider-content" :class="{ 'is-connecting': connecting }">
      <span v-if="connecting" class="connecting-dot" />
      <span class="divider-text">{{ text }}</span>
    </div>
    <div class="divider-line" />
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  connecting: {
    type: Boolean,
    default: false,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.agent-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.agent-divider.is-new {
  animation: fadeSlideUp 0.35s ease;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #E8E8E8;
}

.divider-content {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #9A9A9A;
  white-space: nowrap;
}

.connecting-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #E20074;
  animation: pulse 1.2s infinite ease-in-out;
}

.divider-text {
  font-weight: 500;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.8);
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
