<template>
  <div class="playback-bar">
    <button class="playback-play-btn"><DtIconPlay size="200" /></button>
    <div class="playback-tray-wrapper">
      <div class="playback-tray">
        <div
          v-for="(seg, i) in segments"
          :key="i"
          class="playback-segment"
          :style="{ background: seg.color, flex: seg.width }"
        ></div>
      </div>
      <span class="playback-time">0:00 / 8:10</span>
    </div>
    <div class="playback-controls">
      <button class="playback-ctrl-btn"><DtIconRewind size="100" /></button>
      <button class="playback-ctrl-btn"><DtIconFastForward size="100" /></button>
      <button class="playback-ctrl-btn">1x</button>
    </div>
  </div>
</template>

<script setup>
import { playbackSegments } from '../data/callData.js'
import DtIconPlay from '@dialpad/dialtone-icons/vue3/play'
import DtIconRewind from '@dialpad/dialtone-icons/vue3/rewind'
import DtIconFastForward from '@dialpad/dialtone-icons/vue3/fast-forward'

const segments = playbackSegments
</script>

<style scoped>
.playback-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 0;
  height: 66px;
  box-sizing: border-box;
}

.playback-play-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  font-size: 14px;
  cursor: default;
  color: #3a3a3a;
  flex-shrink: 0;
}

.playback-tray-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 0;
}

.playback-tray {
  display: flex;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  flex: 1;
  background: #e5e5e5;
}

.playback-segment {
  min-width: 4px;
}

.playback-time {
  font-size: 12px;
  color: #808080;
  white-space: nowrap;
  flex-shrink: 0;
}

.playback-controls {
  display: flex;
  gap: 0;
  flex-shrink: 0;
}

.playback-ctrl-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 12px;
  color: #3a3a3a;
  cursor: default;
  border-radius: 50%;
}
</style>
