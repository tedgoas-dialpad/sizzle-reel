<template>
  <div class="ai-rewrite">
    <!-- Thinking state -->
    <div v-if="state === 'thinking'" class="ai-rewrite-thinking">
      <div class="ai-rewrite-thinking-content">
        <span class="ai-rewrite-spinner"></span>
        <span class="ai-rewrite-thinking-text">Thinking to improve the wording on this question...</span>
      </div>
      <button class="ai-rewrite-dismiss" @click="$emit('dismiss')">&times;</button>
    </div>

    <!-- Suggestion state -->
    <div v-if="state === 'suggestion'" class="ai-rewrite-suggestion">
      <div class="ai-rewrite-suggestion-label">
        <span class="ai-rewrite-sparkle">&#10024;</span>
        Ai Suggestion
      </div>
      <p class="ai-rewrite-suggestion-text">{{ suggestion }}</p>
      <div class="ai-rewrite-suggestion-actions">
        <button class="ai-rewrite-btn ai-rewrite-btn--secondary" @click="$emit('rewrite')">Rewrite</button>
        <button class="ai-rewrite-btn ai-rewrite-btn--primary" @click="$emit('accept')">Accept</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  state: {
    type: String,
    default: 'idle', // 'idle' | 'thinking' | 'suggestion'
  },
  suggestion: {
    type: String,
    default: '',
  },
})

defineEmits(['dismiss', 'rewrite', 'accept'])
</script>

<style scoped>
.ai-rewrite-thinking {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, rgba(124, 82, 255, 0.06) 0%, rgba(233, 47, 111, 0.06) 100%);
  border: 1px solid rgba(124, 82, 255, 0.2);
  border-radius: 8px;
  margin-top: 8px;
}

.ai-rewrite-thinking-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ai-rewrite-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(124, 82, 255, 0.3);
  border-top-color: #7C52FF;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.ai-rewrite-thinking-text {
  font-size: 13px;
  color: #535353;
}

.ai-rewrite-dismiss {
  background: none;
  border: none;
  color: #808080;
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}

.ai-rewrite-dismiss:hover {
  color: #3a3a3a;
}

.ai-rewrite-suggestion {
  padding: 16px;
  background: linear-gradient(135deg, rgba(124, 82, 255, 0.06) 0%, rgba(233, 47, 111, 0.06) 100%);
  border: 1px solid rgba(124, 82, 255, 0.2);
  border-radius: 8px;
  margin-top: 8px;
}

.ai-rewrite-suggestion-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #7C52FF;
  margin-bottom: 8px;
}

.ai-rewrite-sparkle {
  font-size: 14px;
}

.ai-rewrite-suggestion-text {
  font-size: 15px;
  color: #1c1c1c;
  line-height: 1.4;
  margin: 0 0 12px;
}

.ai-rewrite-suggestion-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.ai-rewrite-btn {
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.ai-rewrite-btn--secondary {
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #3a3a3a;
}

.ai-rewrite-btn--secondary:hover {
  background: rgba(0, 0, 0, 0.03);
}

.ai-rewrite-btn--primary {
  background: #7C52FF;
  color: white;
}

.ai-rewrite-btn--primary:hover {
  background: #6a3fef;
}
</style>
