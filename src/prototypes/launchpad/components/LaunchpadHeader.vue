<template>
  <div class="lp-header">
    <div class="lp-header-top">
      <div class="lp-header-left">
        <h1 class="d-headline-medium">Good afternoon, Carolina</h1>
        <div class="lp-header-subtitle">
          <span class="d-body-base" style="color: var(--dt-color-foreground-secondary);">Here is a look at your snapshot for today.</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="margin-left: 6px; cursor: pointer;">
            <circle cx="7" cy="7" r="6" stroke="#999" stroke-width="1.2" fill="none"/>
            <path d="M7 6v4M7 4.5v0" stroke="#999" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="lp-header-controls">
          <button class="lp-filter-btn">
            <span>5 CCs</span>
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
          </button>
          <button class="lp-filter-btn">
            <span>43 agents</span>
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
          </button>
          <div class="lp-divider"></div>
          <div class="lp-time-tabs">
            <button
              v-for="tab in timeTabs"
              :key="tab"
              class="lp-time-tab"
              :class="{ 'lp-time-tab--active': activeTimeTab === tab }"
              @click="activeTimeTab = tab"
            >
              {{ tab }}
            </button>
          </div>
        </div>
      </div>
      <div class="lp-header-right">
        <button class="lp-action-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 10a7 7 0 0 1 10-6M11 4V1h3" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
          <span>Refresh</span>
        </button>
        <button class="lp-action-btn lp-action-btn--primary">
          <span>Supervisor view</span>
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const timeTabs = ['1D', '1W', '1M']
const activeTimeTab = ref('1D')
</script>

<style scoped>
.lp-header {
  padding: 16px 32px;
}

.lp-header-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.lp-header-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.lp-header-subtitle {
  display: flex;
  align-items: center;
}

.lp-header-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}

.lp-filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border: 1px solid var(--dt-color-border-default);
  border-radius: 6px;
  background: var(--dt-color-surface-primary);
  cursor: pointer;
  font-size: var(--dt-font-size-200);
  height: 30px;
}

.lp-filter-btn:hover {
  background: var(--dt-color-surface-secondary);
}

.lp-divider {
  width: 2px;
  height: 30px;
  background: var(--dt-color-border-default);
  margin: 0 4px;
}

.lp-time-tabs {
  display: flex;
  gap: 4px;
}

.lp-time-tab {
  padding: 4px 10px;
  border: 1px solid var(--dt-color-border-default);
  border-radius: 6px;
  background: var(--dt-color-surface-primary);
  cursor: pointer;
  font-size: var(--dt-font-size-200);
  font-weight: 600;
  height: 30px;
}

.lp-time-tab:hover {
  background: var(--dt-color-surface-secondary);
}

.lp-time-tab--active {
  background: var(--dt-color-foreground-primary);
  color: white;
  border-color: var(--dt-color-foreground-primary);
}

.lp-header-right {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.lp-action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid var(--dt-color-border-default);
  border-radius: 8px;
  background: var(--dt-color-surface-primary);
  cursor: pointer;
  font-size: var(--dt-font-size-200);
  height: 34px;
  white-space: nowrap;
}

.lp-action-btn:hover {
  background: var(--dt-color-surface-secondary);
}

.lp-action-btn--primary {
  font-weight: 500;
}
</style>
