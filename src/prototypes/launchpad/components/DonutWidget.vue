<template>
  <div class="donut-widget">
    <div class="donut-top">
      <span class="donut-title d-body-base">{{ title }}</span>
    </div>
    <div class="donut-body">
      <div class="donut-chart-container">
        <Doughnut :data="chartConfig" :options="chartOptions" />
        <div class="donut-center">
          <span class="donut-center-value d-headline-extra-large">{{ centerValue }}</span>
          <span class="donut-center-label d-body-base" style="color: var(--dt-color-foreground-secondary);">{{ centerLabel }}</span>
        </div>
      </div>
      <div class="donut-legend-area">
        <div v-if="secondaryStat" class="donut-secondary">
          <span class="d-body-compact-small" style="color: var(--dt-color-foreground-secondary);">{{ secondaryStat.label }}</span>
          <div class="donut-secondary-value">
            <span class="d-headline-medium">{{ secondaryStat.value }}</span>
            <span v-if="secondaryStat.trend" class="donut-trend">
              <svg v-if="secondaryStat.trend.direction === 'down'" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 11V3M4 8l3 3 3-3" :stroke="secondaryStat.trend.color || '#4CAF50'" stroke-width="1.5" fill="none"/>
              </svg>
              <span class="d-body-compact-small" :style="{ color: secondaryStat.trend.color || '#4CAF50' }">{{ secondaryStat.trend.amount }}</span>
            </span>
          </div>
        </div>
        <div class="donut-legend">
          <div v-for="seg in segments" :key="seg.label" class="donut-legend-item">
            <span class="donut-legend-dot" :style="{ background: seg.color }"></span>
            <span class="d-body-base">{{ seg.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'

ChartJS.register(ArcElement, Tooltip)

const props = defineProps({
  title: String,
  segments: Array,
  centerValue: [String, Number],
  centerLabel: String,
  secondaryStat: { type: Object, default: null },
})

const chartConfig = computed(() => ({
  labels: props.segments.map(s => s.label),
  datasets: [{
    data: props.segments.map(s => s.value),
    backgroundColor: props.segments.map(s => s.color),
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    hoverOffset: 4,
  }],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: '62%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
}
</script>

<style scoped>
.donut-widget {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.donut-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.donut-title {
  font-weight: 500;
}

.donut-body {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex: 1;
}

.donut-chart-container {
  position: relative;
  width: 240px;
  height: 240px;
  flex-shrink: 0;
}

.donut-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.donut-center-value {
  line-height: 1;
}

.donut-legend-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.donut-secondary {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.donut-secondary-value {
  display: flex;
  align-items: center;
  gap: 4px;
}

.donut-trend {
  display: flex;
  align-items: center;
  gap: 2px;
}

.donut-legend {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.donut-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.donut-legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 4px;
  flex-shrink: 0;
}
</style>
