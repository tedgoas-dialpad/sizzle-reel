<template>
  <div class="scorecard-results">
    <!-- Tabs -->
    <div class="scorecard-tabs">
      <div class="scorecard-tabs-row">
        <button class="scorecard-tab scorecard-tab--active">Scorecard</button>
        <button class="scorecard-tab">Comments (2)</button>
      </div>
    </div>

    <!-- Questions list -->
    <div class="scorecard-questions">
      <div
        v-for="(q, i) in scorecardQuestions"
        :key="i"
        class="scorecard-question"
      >
        <div class="scorecard-question-text">
          <span class="scorecard-question-label">{{ q.text }}</span>
          <span class="scorecard-question-points">{{ q.points }}pts</span>
        </div>
        <div class="scorecard-question-answers">
          <!-- Selected answer -->
          <div class="scorecard-answer scorecard-answer--selected">
            <span class="scorecard-answer-check">&#10003;</span>
            <span class="scorecard-answer-label">{{ q.answer }}</span>
            <span v-if="q.gradedByAi" class="scorecard-ai-badge">Graded by Ai &#10024;</span>
          </div>
          <!-- Non-selected answer -->
          <div class="scorecard-answer">
            <span class="scorecard-answer-radio"></span>
            <span class="scorecard-answer-label scorecard-answer-label--muted">{{ q.answer === 'Yes' ? 'No' : 'Yes' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { scorecardQuestions } from '../data/callData.js'
</script>

<style scoped>
.scorecard-results {
  width: 464px;
  flex-shrink: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.scorecard-tabs {
  padding: 24px 24px 0;
}

.scorecard-tabs-row {
  display: flex;
}

.scorecard-tab {
  padding: 8px 12px;
  background: none;
  border: none;
  font-size: 14px;
  color: #808080;
  cursor: default;
  border-bottom: 2px solid transparent;
}

.scorecard-tab--active {
  color: #1c1c1c;
  font-weight: 600;
  border-bottom-color: #1c1c1c;
}

.scorecard-questions {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.scorecard-question {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.scorecard-question:last-child {
  border-bottom: none;
}

.scorecard-question-text {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.scorecard-question-label {
  font-size: 15px;
  color: #1c1c1c;
  line-height: 1.4;
  flex: 1;
}

.scorecard-question-points {
  font-size: 13px;
  color: #808080;
  flex-shrink: 0;
}

.scorecard-question-answers {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.scorecard-answer {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
}

.scorecard-answer--selected {
  gap: 4px;
}

.scorecard-answer-check {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #52C926;
  margin: 0 4px;
}

.scorecard-answer-radio {
  width: 14px;
  height: 14px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin: 0 3px;
  flex-shrink: 0;
}

.scorecard-answer-label {
  font-size: 14px;
  color: #1c1c1c;
}

.scorecard-answer-label--muted {
  color: #808080;
}

.scorecard-ai-badge {
  font-size: 11px;
  color: #7C52FF;
  background: rgba(124, 82, 255, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
}
</style>
