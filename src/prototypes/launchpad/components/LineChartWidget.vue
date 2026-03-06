<template>
  <div class="linechart-widget">
    <div class="linechart-main" :class="{ 'linechart-main--with-rankings': rankings }">
      <div class="linechart-left">
        <div class="linechart-header">
          <div class="linechart-header-content">
            <span class="linechart-title d-body-base">{{ title }}</span>
            <span class="linechart-value d-headline-large">{{ value }}</span>
          </div>
        </div>
        <div class="linechart-chart">
          <Line :data="chartDataConfig" :options="chartOptionsConfig" />
        </div>
        <div class="linechart-legend">
          <div v-for="ds in chartData.datasets" :key="ds.label" class="linechart-legend-item">
            <span
              class="linechart-legend-line"
              :style="{
                borderColor: ds.borderColor,
                borderStyle: ds.borderDash?.length ? 'dashed' : 'solid',
              }"
            ></span>
            <span class="d-body-compact-small" style="color: var(--dt-color-foreground-secondary);">{{ ds.label }}</span>
          </div>
        </div>
      </div>
      <div v-if="rankings" class="linechart-right">
        <RankingTable
          :title="rankings.title"
          :tabs="['By CCs', 'By agents']"
          :data="rankings"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from 'chart.js'
import RankingTable from './RankingTable.vue'

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler)

const props = defineProps({
  title: String,
  value: String,
  chartData: Object,
  rankings: { type: Object, default: null },
})

const chartDataConfig = computed(() => ({
  labels: props.chartData.labels,
  datasets: props.chartData.datasets.map(ds => ({
    ...ds,
    fill: false,
  })),
}))

const chartOptionsConfig = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        font: { size: 11 },
        color: '#999',
      },
    },
    y: {
      grid: {
        color: '#f0f0f0',
      },
      ticks: {
        font: { size: 11 },
        color: '#999',
      },
    },
  },
}
</script>

<style scoped>
.linechart-widget {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.linechart-main {
  display: flex;
  gap: 16px;
  height: 100%;
}

.linechart-main--with-rankings .linechart-left {
  flex: 1;
  min-width: 0;
}

.linechart-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.linechart-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.linechart-header-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.linechart-title {
  font-weight: 500;
}

.linechart-chart {
  flex: 1;
  min-height: 160px;
  position: relative;
}

.linechart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.linechart-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.linechart-legend-line {
  width: 20px;
  height: 0;
  border-bottom-width: 2px;
  display: inline-block;
}

.linechart-right {
  width: 200px;
  flex-shrink: 0;
  border-left: 1px solid var(--dt-color-border-default);
  padding-left: 16px;
}
</style>
