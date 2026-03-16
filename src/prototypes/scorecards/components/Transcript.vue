<template>
  <div class="transcript" ref="transcriptRef">
    <!-- Fog overlay at top -->
    <div class="transcript-fog"></div>

    <!-- AI Insights block -->
    <div class="transcript-insights" :id="`chapter-insights`">
      <div class="transcript-insights-avatar">
        <span class="insights-avatar-icon">&#10024;</span>
      </div>
      <div class="transcript-insights-content">
        <div class="transcript-insights-label">Insights</div>
        <p class="transcript-insights-text">{{ aiInsight }}</p>
      </div>
    </div>

    <!-- Messages grouped by chapter -->
    <template v-for="chapter in chapters" :key="chapter.id">
      <div class="transcript-chapter-divider" :id="`chapter-${chapter.id}`">
        <span class="transcript-chapter-line"></span>
        <span class="transcript-chapter-label">{{ chapter.time ? `${chapter.time} - ` : '' }}{{ chapter.label }}</span>
        <span class="transcript-chapter-line"></span>
      </div>

      <div
        v-for="(msg, i) in getChapterMessages(chapter.id)"
        :key="`${chapter.id}-${i}`"
        class="transcript-message"
        :class="`transcript-message--${msg.speaker}`"
      >
        <div class="transcript-message-avatar" :class="`transcript-message-avatar--${msg.speaker}`">
          {{ msg.name[0] }}
        </div>
        <div class="transcript-message-body">
          <div class="transcript-message-header">
            <span class="transcript-message-name">{{ msg.name }}</span>
            <span class="transcript-message-time">{{ msg.time }}</span>
          </div>
          <p class="transcript-message-text">{{ msg.text }}</p>
        </div>
      </div>
    </template>

    <!-- Search bar at bottom -->
    <div class="transcript-search">
      <div class="transcript-search-input">
        <span class="transcript-search-icon">&#10024;</span>
        <span class="transcript-search-placeholder">Explore this conversation</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { aiInsight, transcript, chapters } from '../data/callData.js'

const transcriptRef = ref(null)

function getChapterMessages(chapterId) {
  return transcript.filter(m => m.chapter === chapterId)
}

function scrollToChapter(chapterId) {
  const el = document.getElementById(`chapter-${chapterId}`)
  if (el && transcriptRef.value) {
    transcriptRef.value.scrollTo({
      top: el.offsetTop - transcriptRef.value.offsetTop - 20,
      behavior: 'smooth',
    })
  }
}

defineExpose({ scrollToChapter })
</script>

<style scoped>
.transcript {
  flex: 1;
  overflow-y: auto;
  position: relative;
  padding: 0 0 16px;
}

.transcript-fog {
  position: sticky;
  top: 0;
  height: 45px;
  background: linear-gradient(to bottom, white, transparent);
  z-index: 2;
  pointer-events: none;
}

.transcript-insights {
  display: flex;
  gap: 10px;
  padding: 16px;
  margin-bottom: 16px;
}

.transcript-insights-avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #7C52FF, #E92F6F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 14px;
}

.insights-avatar-icon {
  color: white;
}

.transcript-insights-content {
  flex: 1;
}

.transcript-insights-label {
  font-size: 12px;
  font-weight: 600;
  color: #1c1c1c;
  margin-bottom: 4px;
}

.transcript-insights-text {
  font-size: 14px;
  color: #1c1c1c;
  line-height: 1.6;
  margin: 0;
}

.transcript-chapter-divider {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  margin: 8px 0;
}

.transcript-chapter-line {
  flex: 1;
  height: 1px;
  background: #e5e5e5;
}

.transcript-chapter-label {
  font-size: 14px;
  color: #808080;
  white-space: nowrap;
  flex-shrink: 0;
}

.transcript-message {
  display: flex;
  gap: 10px;
  padding: 8px 16px;
}

.transcript-message-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
}

.transcript-message-avatar--agent {
  background: #7C52FF;
}

.transcript-message-avatar--customer {
  background: #52C926;
}

.transcript-message-body {
  flex: 1;
  min-width: 0;
}

.transcript-message-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
}

.transcript-message-name {
  font-size: 12px;
  font-weight: 600;
  color: #1c1c1c;
}

.transcript-message-time {
  font-size: 12px;
  color: #808080;
}

.transcript-message-text {
  font-size: 14px;
  color: #1c1c1c;
  line-height: 1.5;
  margin: 0;
}

.transcript-search {
  padding: 16px;
}

.transcript-search-input {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: white;
}

.transcript-search-icon {
  font-size: 18px;
}

.transcript-search-placeholder {
  font-size: 14px;
  color: #808080;
}
</style>
