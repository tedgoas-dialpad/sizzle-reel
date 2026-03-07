<template>
  <div class="ranking-table">
    <div class="ranking-header">
      <span class="ranking-title d-body-base">{{ title }}</span>
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
        <span class="ranking-rank">{{ item.rank }}</span>
        <span v-if="item.trend" class="ranking-trend">
          <svg v-if="item.trend === 'up'" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M3 5l3-3 3 3" stroke="#84EE0B" stroke-width="1.5" fill="none"/>
          </svg>
          <svg v-else-if="item.trend === 'down'" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 10V2M3 7l3 3 3-3" stroke="#FF1356" stroke-width="1.5" fill="none"/>
          </svg>
          <span v-else class="ranking-trend-spacer"></span>
        </span>
        <span class="ranking-name">{{ item.name }}</span>
        <span class="ranking-value">{{ item.value }}</span>
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
  height: 100%;
}

.ranking-header {
  display: flex;
  align-items: center;
}

.ranking-title {
  font-weight: 400;
}

.ranking-tabs {
  display: flex;
  gap: 4px;
  border: 1px solid rgba(28, 28, 28, 0.11);
  border-radius: 10px;
  padding: 2px;
  width: 100%;
}

.ranking-tab {
  flex: 1;
  padding: 7px 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  color: #3a3a3a;
  white-space: nowrap;
  border-radius: 8px;
  line-height: 1.2;
}

.ranking-tab:hover {
  background: rgba(0, 0, 0, 0.04);
}

.ranking-tab--active {
  background: #F5F0FF;
  color: #7C52FF;
}

.ranking-tab--active:hover {
  background: #F5F0FF;
}

.ranking-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.ranking-row {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 8px;
  border-bottom: 0.5px solid rgba(28, 28, 28, 0.11);
  font-size: 15px;
  line-height: 1.4;
  color: #1c1c1c;
}

.ranking-row:last-child {
  border-bottom: none;
}

.ranking-rank {
  width: 20px;
  flex-shrink: 0;
}

.ranking-trend {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 12px;
}

.ranking-trend-spacer {
  width: 12px;
  display: inline-block;
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
  white-space: nowrap;
}
</style>
