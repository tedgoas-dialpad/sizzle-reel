<template>
  <aside class="call-sidebar">
    <!-- Nav -->
    <div class="call-sidebar-nav">
      <span class="call-sidebar-nav-link">History</span>
      <div class="call-sidebar-nav-arrows">
        <button class="call-sidebar-nav-btn">&larr; Prev</button>
        <button class="call-sidebar-nav-btn">Next &rarr;</button>
      </div>
    </div>

    <!-- Details -->
    <div class="call-sidebar-section">
      <div class="call-sidebar-section-title">
        <span class="call-sidebar-icon">&#128197;</span>
        Details
      </div>
      <div class="call-sidebar-details">
        <p>{{ callDetails.date }}</p>
        <p>{{ callDetails.time }} ({{ callDetails.duration }})</p>
        <p class="call-sidebar-participants">{{ callDetails.participants }}</p>
      </div>
    </div>

    <!-- Chapters -->
    <div class="call-sidebar-section">
      <div class="call-sidebar-section-title">
        <span class="call-sidebar-icon">&#128269;</span>
        Chapters
      </div>
      <div class="call-sidebar-chapters">
        <button
          v-for="ch in chapters"
          :key="ch.id"
          class="call-sidebar-chapter"
          @click="$emit('scrollToChapter', ch.id)"
        >
          <span class="chapter-time" v-if="ch.time">{{ ch.time }}</span>
          <span v-else class="chapter-ai-icon">&#10024;</span>
          <span class="chapter-label">{{ ch.label }}</span>
        </button>
      </div>
    </div>

    <!-- Moments -->
    <div class="call-sidebar-section">
      <div class="call-sidebar-section-title">
        <span class="call-sidebar-icon">&#9889;</span>
        Moments
      </div>
      <div class="call-sidebar-moments">
        <div v-for="m in moments" :key="m.label" class="call-sidebar-moment">
          <span class="moment-count">x{{ m.count }}</span>
          <span class="moment-label">{{ m.label }}</span>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="call-sidebar-actions">
      <button class="call-sidebar-action-btn">&#128279; Share</button>
      <button class="call-sidebar-action-btn">&#128229; Download</button>
      <button class="call-sidebar-action-btn">&#128203; Add to playlist</button>
    </div>
  </aside>
</template>

<script setup>
import { callDetails, chapters, moments } from '../data/callData.js'

defineEmits(['scrollToChapter'])
</script>

<style scoped>
.call-sidebar {
  width: 332px;
  flex-shrink: 0;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.call-sidebar-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.call-sidebar-nav-link {
  font-size: 14px;
  color: #1c1c1c;
}

.call-sidebar-nav-arrows {
  display: flex;
  gap: 16px;
}

.call-sidebar-nav-btn {
  font-size: 14px;
  color: #808080;
  background: none;
  border: none;
  cursor: default;
}

.call-sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.call-sidebar-section-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #1c1c1c;
}

.call-sidebar-icon {
  font-size: 14px;
}

.call-sidebar-details {
  padding-left: 28px;
}

.call-sidebar-details p {
  margin: 0;
  font-size: 14px;
  color: #1c1c1c;
  line-height: 1.6;
}

.call-sidebar-participants {
  margin-top: 8px !important;
}

.call-sidebar-chapters {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 28px;
}

.call-sidebar-chapter {
  display: flex;
  align-items: center;
  gap: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
}

.call-sidebar-chapter:hover .chapter-label {
  color: #7C52FF;
}

.chapter-time {
  width: 48px;
  font-size: 14px;
  color: #1c1c1c;
  flex-shrink: 0;
}

.chapter-ai-icon {
  width: 48px;
  font-size: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.chapter-label {
  font-size: 14px;
  color: #1c1c1c;
}

.call-sidebar-moments {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 28px;
}

.call-sidebar-moment {
  display: flex;
  gap: 8px;
}

.moment-count {
  width: 40px;
  font-size: 14px;
  color: #1c1c1c;
}

.moment-label {
  font-size: 14px;
  color: #1c1c1c;
}

.call-sidebar-actions {
  display: flex;
  gap: 24px;
  margin-top: auto;
}

.call-sidebar-action-btn {
  font-size: 14px;
  color: #1c1c1c;
  background: none;
  border: none;
  cursor: default;
}
</style>
