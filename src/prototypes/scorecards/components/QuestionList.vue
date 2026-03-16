<template>
  <div class="question-list">
    <div class="question-list-header">
      <h2 class="question-list-title">Questions</h2>
      <div class="question-list-meta">
        <span class="question-list-meta-text">{{ questions.length }} questions</span>
        <span class="question-list-meta-dot"></span>
        <span class="question-list-meta-text">{{ totalPoints }} points</span>
      </div>
    </div>

    <div class="question-list-items">
      <button
        v-for="q in questions"
        :key="q.id"
        class="question-item"
        :class="{ 'question-item--selected': selectedId === q.id }"
        @click="$emit('select', q.id)"
      >
        <div class="question-item-content">
          <span class="question-item-number">{{ q.number }}.</span>
          <div class="question-item-body">
            <span class="question-item-text">{{ q.text }}</span>
            <div class="question-item-meta">
              <span>{{ q.responses[0]?.points || 10 }} points</span>
              <span>{{ q.responseType }}</span>
              <span v-if="q.isAi" class="question-item-ai">&#10024;</span>
            </div>
          </div>
        </div>
      </button>
    </div>

    <div class="question-list-footer">
      <button class="question-list-btn question-list-btn--ai">
        <span class="question-list-btn-icon">&#10024;</span>
        Add Ai Questions
      </button>
      <button class="question-list-btn question-list-btn--create">
        <span class="question-list-btn-icon">&#9998;</span>
        Create Question
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  questions: { type: Array, required: true },
  selectedId: { type: Number, default: null },
})

defineEmits(['select'])

const totalPoints = computed(() =>
  props.questions.reduce((sum, q) => sum + (q.responses[0]?.points || 10), 0)
)
</script>

<style scoped>
.question-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.question-list-header {
  padding-left: 12px;
}

.question-list-title {
  font-size: 19px;
  font-weight: 700;
  color: #1c1c1c;
  margin: 0;
  line-height: 1.6;
}

.question-list-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.question-list-meta-text {
  font-size: 15px;
  color: #535353;
  line-height: 1.4;
}

.question-list-meta-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #535353;
}

.question-list-items {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.question-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(0,0,0,0.03), 0px 2px 4px rgba(0,0,0,0.04), 0px 2px 16px rgba(0,0,0,0.08);
}

.question-item:hover {
  background: #fafafa;
}

.question-item--selected {
  border-color: #471571;
  background: #faf8ff;
}

.question-item-content {
  display: flex;
  gap: 2px;
  flex: 1;
}

.question-item-number {
  font-size: 15px;
  color: #1c1c1c;
  line-height: 1.4;
  width: 24px;
  flex-shrink: 0;
}

.question-item-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.question-item-text {
  font-size: 15px;
  color: #1c1c1c;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.question-item-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #808080;
  line-height: 1.2;
}

.question-item-ai {
  font-size: 12px;
}

.question-list-footer {
  display: flex;
  gap: 8px;
  padding-top: 8px;
}

.question-list-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.2;
}

.question-list-btn-icon {
  font-size: 12px;
}

.question-list-btn--ai {
  background: #7C52FF;
  color: white;
  border: none;
}

.question-list-btn--ai:hover {
  background: #6a3fef;
}

.question-list-btn--create {
  background: white;
  color: #7C52FF;
  border: 1px solid #7C52FF;
}

.question-list-btn--create:hover {
  background: #faf8ff;
}
</style>
