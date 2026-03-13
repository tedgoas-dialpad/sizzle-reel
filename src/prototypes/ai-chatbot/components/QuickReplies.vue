<template>
  <div class="quick-replies" :class="{ 'is-new': isNew }">
    <button
      v-for="option in options"
      :key="option.id"
      class="quick-reply-btn"
      :class="{ 'is-selected': selectedId === option.id }"
      @click="$emit('select', option.id)"
    >
      <span class="quick-reply-icon">
        <svg v-if="option.icon === 'package'" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.5 4.5L8 1.5 2.5 4.5M13.5 4.5v7L8 14.5M13.5 4.5L8 7.5M2.5 4.5v7L8 14.5M2.5 4.5L8 7.5M8 7.5v7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else-if="option.icon === 'refresh'" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1.5 2.5v4h4M14.5 13.5v-4h-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.26 6a6 6 0 00-9.9-1.64L1.5 6.5M2.74 10a6 6 0 009.9 1.64l1.86-2.14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" stroke-width="1.2"/>
          <path d="M1.5 6.5h13" stroke="currentColor" stroke-width="1.2"/>
        </svg>
      </span>
      <span class="quick-reply-label">{{ option.label }}</span>
      <svg v-if="selectedId === option.id" class="quick-reply-check" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },
  selectedId: {
    type: String,
    default: null,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['select'])
</script>

<style scoped>
.quick-replies {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
}

.quick-replies.is-new {
  animation: fadeSlideUp 0.35s ease;
}

.quick-reply-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  font-size: 13px;
  color: #3A3A3A;
}

.quick-reply-btn:hover {
  border-color: #D0D0D0;
  background: #FAFAFA;
}

.quick-reply-btn.is-selected {
  background: #1C1C1C;
  border-color: #1C1C1C;
  color: #fff;
}

.quick-reply-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.quick-reply-label {
  flex: 1;
}

.quick-reply-check {
  flex-shrink: 0;
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
