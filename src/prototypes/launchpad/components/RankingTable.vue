<template>
  <div class="ranking-table">
    <div class="ranking-header">
      <span class="ranking-title d-body-base" style="font-weight: 600;">{{ title }}</span>
    </div>
    <div v-if="tabs" class="ranking-tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="ranking-tab"
        :class="{ 'ranking-tab--active': activeTab === tab }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="ranking-list">
      <div
        v-for="item in currentData"
        :key="item.rank"
        class="ranking-row"
      >
        <span class="ranking-rank d-body-compact-small">{{ item.rank }}</span>
        <span v-if="item.trend" class="ranking-trend">
          <svg v-if="item.trend === 'up'" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M3 5l3-3 3 3" stroke="#4CAF50" stroke-width="1.5" fill="none"/>
          </svg>
          <svg v-else-if="item.trend === 'down'" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 10V2M3 7l3 3 3-3" stroke="#E53935" stroke-width="1.5" fill="none"/>
          </svg>
          <span v-else style="width: 12px; display: inline-block;"></span>
        </span>
        <span class="ranking-name d-body-compact-small">{{ item.name }}</span>
        <span class="ranking-value d-body-compact-small">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  tabs: { type: Array, default: null },
  data: Object,
})

const activeTab = ref(props.tabs ? props.tabs[0] : null)

const currentData = computed(() => {
  if (!props.tabs) return props.data?.default || []
  const key = activeTab.value === 'By CCs' ? 'byCCs' : 'byAgents'
  return props.data?.[key] || []
})
</script>

<style scoped>
.ranking-table {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.ranking-header {
  display: flex;
  align-items: center;
}

.ranking-tabs {
  display: flex;
  gap: 0;
  border: 1px solid var(--dt-color-border-default);
  border-radius: 8px;
  overflow: hidden;
  width: fit-content;
}

.ranking-tab {
  padding: 4px 12px;
  border: none;
  background: var(--dt-color-surface-primary);
  cursor: pointer;
  font-size: var(--dt-font-size-100);
  font-weight: 500;
  white-space: nowrap;
}

.ranking-tab:not(:last-child) {
  border-right: 1px solid var(--dt-color-border-default);
}

.ranking-tab:hover {
  background: var(--dt-color-surface-secondary);
}

.ranking-tab--active {
  background: var(--dt-color-surface-bold);
  color: white;
}

.ranking-tab--active:hover {
  background: var(--dt-color-surface-bold);
}

.ranking-list {
  display: flex;
  flex-direction: column;
}

.ranking-row {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
}

.ranking-rank {
  width: 16px;
  text-align: right;
  color: var(--dt-color-foreground-secondary);
  flex-shrink: 0;
}

.ranking-trend {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 16px;
}

.ranking-name {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ranking-value {
  flex-shrink: 0;
  text-align: right;
  color: var(--dt-color-foreground-secondary);
}
</style>
