<template>
  <div class="question-detail" v-if="question">
    <div class="question-detail-fields">
      <!-- Header -->
      <div class="question-detail-header">
        <span class="question-detail-label">{{ question.isAi ? 'Ai' : '' }} Question #{{ question.number }}</span>
      </div>

      <!-- Question text input with compose bar -->
      <div class="question-compose">
        <div class="question-compose-input">
          <div class="question-compose-text">
            <textarea
              ref="textareaRef"
              v-model="localText"
              class="question-compose-textarea"
              rows="1"
            ></textarea>
          </div>
          <div class="question-compose-actions">
            <button class="compose-action-btn" @click="handleRewrite">
              <span class="compose-action-icon">&#10024;</span>
              Rewrite
            </button>
            <button class="compose-action-btn">
              <span class="compose-action-icon">&#127760;</span>
              Translate
            </button>
          </div>
        </div>
      </div>

      <!-- AI Rewrite inline -->
      <AiRewriteInline
        v-if="rewriteState !== 'idle'"
        :state="rewriteState"
        :suggestion="currentSuggestion"
        @dismiss="rewriteState = 'idle'"
        @rewrite="handleRewrite"
        @accept="handleAccept"
      />

      <!-- Response type + Responses + Points row -->
      <div class="question-detail-row">
        <div class="question-detail-response-type">
          <label class="field-label">Response type</label>
          <div class="fake-select">
            {{ question.responseType }}
            <span class="fake-select-arrow">&#9662;</span>
          </div>
        </div>

        <div class="question-detail-responses">
          <label class="field-label">Responses</label>
          <div
            v-for="(resp, i) in question.responses"
            :key="i"
            class="response-row"
          >
            <span class="response-number">{{ i + 1 }}.</span>
            <div class="response-input">{{ resp.label }}</div>
          </div>
        </div>

        <div class="question-detail-points">
          <div class="points-header">
            <label class="field-label">Points</label>
            <span class="points-info">&#9432;</span>
          </div>
          <div
            v-for="(resp, i) in question.responses"
            :key="i"
            class="points-input"
          >{{ resp.points }}</div>
        </div>
      </div>

      <!-- Trigger words -->
      <div class="question-detail-trigger">
        <label class="field-label">Trigger words/phrases (optional)</label>
        <div class="trigger-description">An improved LLM now powers Ai questions for better accuracy. Only use trigger words for exact transcript matches.</div>
        <div class="fake-input">{{ question.triggerWords || 'Example: "hello there"' }}</div>
      </div>

      <!-- Checkboxes -->
      <div class="question-detail-checkboxes">
        <label class="checkbox-item">
          <input type="checkbox" disabled />
          <div class="checkbox-content">
            <span>Include follow-up question based on response</span>
            <span class="checkbox-desc">Follow-up questions cannot be automated. To use this feature, change setting to Assisted by Ai</span>
          </div>
        </label>
        <label class="checkbox-item">
          <input type="checkbox" disabled />
          <span>Add a comment field</span>
        </label>
        <label class="checkbox-item">
          <input type="checkbox" disabled />
          <span>Allow question to be skipped</span>
        </label>
        <label class="checkbox-item">
          <input type="checkbox" disabled />
          <div class="checkbox-content">
            <span>Automatically fail entire scorecard for certain responses</span>
            <span class="checkbox-desc">Specific responses can automatically assign a 0% grade to a call</span>
          </div>
        </label>
        <label class="checkbox-item">
          <input type="checkbox" disabled />
          <span>Save question as template</span>
        </label>
      </div>
    </div>

    <!-- Footer buttons -->
    <div class="question-detail-footer">
      <div class="question-detail-footer-actions">
        <button class="footer-btn footer-btn--delete">Delete</button>
        <button class="footer-btn footer-btn--save">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import AiRewriteInline from './AiRewriteInline.vue'

const props = defineProps({
  question: { type: Object, default: null },
})

const localText = ref('')
const rewriteState = ref('idle') // 'idle' | 'thinking' | 'suggestion'
const currentSuggestion = ref('')
const suggestionIndex = ref(0)

watch(
  () => props.question,
  (q) => {
    if (q) {
      localText.value = q.text
      rewriteState.value = 'idle'
      suggestionIndex.value = 0
    }
  },
  { immediate: true }
)

function handleRewrite() {
  rewriteState.value = 'thinking'
  setTimeout(() => {
    const suggestions = props.question?.aiSuggestions || []
    currentSuggestion.value = suggestions[suggestionIndex.value % suggestions.length] || 'Improved question text.'
    suggestionIndex.value++
    rewriteState.value = 'suggestion'
  }, 2000)
}

function handleAccept() {
  localText.value = currentSuggestion.value
  rewriteState.value = 'idle'
}
</script>

<style scoped>
.question-detail {
  background: white;
  border: 1px solid transparent;
  border-image: linear-gradient(135deg, #471571 0%, #551B84 3.08%, #7C229E 14.48%, #9024A4 23.67%, #B02290 35.5%, #D32B86 48.3%, #E92F6F 60.29%, #F6484F 70.08%, #FB7328 90.02%, #F3960F 97.29%, #F3960F 100%) 1;
  overflow: hidden;
  box-shadow: 0px 1px 2px rgba(0,0,0,0.03), 0px 2px 4px rgba(0,0,0,0.04), 0px 2px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  width: 724px;
  flex-shrink: 0;
}

.question-detail-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
}

.question-detail-header {
  padding-bottom: 4px;
}

.question-detail-label {
  font-size: 15px;
  font-weight: 600;
  color: #3a3a3a;
  line-height: 1.4;
}

.question-compose {
  display: flex;
  flex-direction: column;
}

.question-compose-input {
  border: 1px solid rgba(28, 28, 28, 0.5);
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  background: white;
}

.question-compose-text {
  padding: 4px 8px;
}

.question-compose-textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 15px;
  color: #3a3a3a;
  font-family: inherit;
  line-height: 1.2;
  background: transparent;
}

.question-compose-actions {
  display: flex;
  gap: 2px;
  padding: 2px 0;
  justify-content: flex-end;
}

.compose-action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: none;
  border: none;
  color: #808080;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
}

.compose-action-btn:hover {
  background: rgba(0, 0, 0, 0.03);
  color: #3a3a3a;
}

.compose-action-icon {
  font-size: 12px;
}

.question-detail-row {
  display: flex;
  gap: 6px;
}

.question-detail-response-type {
  display: flex;
  flex-direction: column;
  padding-right: 32px;
  flex-shrink: 0;
}

.question-detail-responses {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.question-detail-points {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 65px;
  flex-shrink: 0;
}

.points-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.points-info {
  font-size: 14px;
  color: #808080;
}

.field-label {
  font-size: 15px;
  font-weight: 600;
  color: #1c1c1c;
  line-height: 1.4;
  padding-bottom: 4px;
  display: block;
}

.fake-select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.12);
  border: 1.5px solid transparent;
  border-radius: 8px;
  font-size: 15px;
  color: #808080;
  cursor: default;
}

.fake-select-arrow {
  font-size: 10px;
  color: #808080;
}

.response-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.response-number {
  font-size: 14px;
  color: black;
  width: 24px;
}

.response-input {
  flex: 1;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.12);
  border: 1.5px solid transparent;
  border-radius: 8px;
  font-size: 15px;
  color: #808080;
}

.points-input {
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.12);
  border: 1.5px solid transparent;
  border-radius: 8px;
  font-size: 15px;
  color: #808080;
  text-align: center;
}

.question-detail-trigger {
  display: flex;
  flex-direction: column;
}

.trigger-description {
  font-size: 12px;
  color: #808080;
  margin-bottom: 4px;
}

.fake-input {
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.12);
  border: 1.5px solid transparent;
  border-radius: 8px;
  font-size: 15px;
  color: #808080;
}

.question-detail-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkbox-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 15px;
  color: #1c1c1c;
  cursor: default;
}

.checkbox-item input[type="checkbox"] {
  margin-top: 3px;
  accent-color: #7C52FF;
}

.checkbox-content {
  display: flex;
  flex-direction: column;
}

.checkbox-desc {
  font-size: 12px;
  color: #808080;
  line-height: 1.4;
}

.question-detail-footer {
  border-top: 1px solid rgba(28, 28, 28, 0.11);
  padding: 16px;
  display: flex;
  justify-content: flex-end;
}

.question-detail-footer-actions {
  display: flex;
  gap: 4px;
}

.footer-btn {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.footer-btn--delete {
  background: none;
  color: #D90A45;
}

.footer-btn--delete:hover {
  background: rgba(217, 10, 69, 0.05);
}

.footer-btn--save {
  background: #7C52FF;
  color: white;
}

.footer-btn--save:hover {
  background: #6a3fef;
}
</style>
