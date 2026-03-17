<template>
  <aside class="call-sidebar">
    <!-- Nav -->
    <div class="call-sidebar-nav">
      <span class="call-sidebar-nav-link">History</span>
      <div class="call-sidebar-nav-arrows">
        <button class="call-sidebar-nav-btn"><DtIconArrowLeft size="100" /> Prev</button>
        <button class="call-sidebar-nav-btn">Next <DtIconArrowRight size="100" /></button>
      </div>
    </div>

    <!-- Details -->
    <div class="call-sidebar-section">
      <div class="call-sidebar-section-title">
        <DtIconCalendar size="100" class="call-sidebar-icon" />
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
        <DtIconMap size="100" class="call-sidebar-icon" />
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
          <DtIconDialpadSparkle v-else class="chapter-ai-icon" size="100" />
          <span class="chapter-label">{{ ch.label }}</span>
        </button>
      </div>
    </div>

    <!-- Moments -->
    <div class="call-sidebar-section">
      <div class="call-sidebar-section-title">
        <DtIconLightningBolt size="100" class="call-sidebar-icon" />
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
      <button class="call-sidebar-action-btn"><DtIconShare2 size="100" /> Share</button>
      <button class="call-sidebar-action-btn"><DtIconDownload size="100" /> Download</button>
      <button class="call-sidebar-action-btn"><DtIconListAdd size="100" /> Add to playlist</button>
    </div>
  </aside>
</template>

<script setup>
import { callDetails, chapters, moments } from '../data/callData.js'
import DtIconCalendar from '@dialpad/dialtone-icons/vue3/calendar'
import DtIconMap from '@dialpad/dialtone-icons/vue3/map'
import DtIconLightningBolt from '@dialpad/dialtone-icons/vue3/lightning-bolt'
import DtIconDialpadSparkle from '@dialpad/dialtone-icons/vue3/dialpad-sparkle'
import DtIconShare2 from '@dialpad/dialtone-icons/vue3/share-2'
import DtIconDownload from '@dialpad/dialtone-icons/vue3/download'
import DtIconListAdd from '@dialpad/dialtone-icons/vue3/list-add'
import DtIconArrowLeft from '@dialpad/dialtone-icons/vue3/arrow-left'
import DtIconArrowRight from '@dialpad/dialtone-icons/vue3/arrow-right'

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
  display: flex;
  align-items: center;
  gap: 4px;
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
  width: 14px;
  height: 14px;
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
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #1c1c1c;
  background: none;
  border: none;
  cursor: default;
}
</style>
