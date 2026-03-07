<template>
  <div class="donut-widget">
    <div class="donut-top">
      <span class="donut-title d-body-base">{{ title }}</span>
    </div>
    <div class="donut-body">
      <div class="donut-chart-container" @mouseleave="activeSegmentIndex = null">
        <Doughnut ref="chartRef" :data="chartConfig" :options="chartOptions" />
        <div class="donut-center">
          <span class="donut-center-value d-headline-extra-large">{{ centerValue }}</span>
          <span class="donut-center-label d-body-base" style="color: var(--dt-color-foreground-secondary);">{{ centerLabel }}</span>
        </div>
        <transition name="tooltip-fade">
          <div v-if="activeSegmentIndex !== null && activeSegment" class="donut-tooltip" :style="tooltipPosition">
            <div class="donut-tooltip-body">
              <div class="donut-tooltip-header">
                <span class="donut-tooltip-dot" :style="{ background: activeSegment.color }"></span>
                <span>{{ activeSegment.tooltipData.heading }}</span>
              </div>
              <div v-for="(row, ri) in activeSegment.tooltipData.rows" :key="'r' + ri" class="donut-tooltip-row">
                <span>{{ row.label }}</span>
                <span>{{ row.value }}</span>
              </div>
              <div class="donut-tooltip-divider"></div>
              <div v-for="(row, ei) in activeSegment.tooltipData.extraRows" :key="'e' + ei" class="donut-tooltip-row">
                <span>{{ row.label }}</span>
                <span>{{ row.value }}</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="donut-legend-area">
        <div v-if="secondaryStat" class="donut-secondary" :style="{ opacity: activeSegmentIndex !== null ? 0.3 : 1, transition: 'opacity 0.25s ease' }">
          <span class="d-body-base" style="color: #1c1c1c;">{{ secondaryStat.label }}</span>
          <div class="donut-secondary-value">
            <span class="d-headline-extra-large">{{ secondaryStat.value }}</span>
            <span v-if="secondaryStat.trend" class="donut-trend">
              <svg v-if="secondaryStat.trend.direction === 'down'" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 11V3M4 8l3 3 3-3" :stroke="secondaryStat.trend.color || '#4CAF50'" stroke-width="1.5" fill="none"/>
              </svg>
              <span class="d-body-base" :style="{ color: secondaryStat.trend.color || '#4CAF50' }">{{ secondaryStat.trend.amount }}</span>
            </span>
          </div>
        </div>
        <div class="donut-legend">
          <div
            v-for="(seg, i) in segments"
            :key="seg.label"
            class="donut-legend-item"
            :style="{ opacity: activeSegmentIndex === null || activeSegmentIndex === i ? 1 : 0.3, transition: 'opacity 0.25s ease' }"
          >
            <span class="donut-legend-dot" :style="{ background: seg.color }"></span>
            <span class="d-body-base">{{ seg.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
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

const chartRef = ref(null)
const activeSegmentIndex = ref(null)

const activeSegment = computed(() => {
  if (activeSegmentIndex.value === null) return null
  return props.segments[activeSegmentIndex.value] || null
})

const chartConfig = computed(() => ({
  labels: props.segments.map(s => s.label),
  datasets: [{
    data: props.segments.map(s => s.value),
    backgroundColor: props.segments.map((s, i) => {
      if (activeSegmentIndex.value === null) return s.color
      return i === activeSegmentIndex.value ? s.color : s.color + '40'
    }),
    borderWidth: 3,
    borderColor: props.segments.map((s, i) => {
      return activeSegmentIndex.value === i ? s.color : '#FFFFFF'
    }),
    borderRadius: 4,
    hoverOffset: 12,
  }],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: '62%',
  layout: {
    padding: 14,
  },
  animation: {
    duration: 200,
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  onHover: (event, elements) => {
    activeSegmentIndex.value = elements.length ? elements[0].index : null
  },
}

const tooltipPosition = computed(() => {
  if (activeSegmentIndex.value === null) return {}
  const chart = chartRef.value?.chart
  if (!chart) return {}

  const meta = chart.getDatasetMeta(0)
  const arc = meta.data[activeSegmentIndex.value]
  if (!arc) return {}

  const { x: cx, y: cy, startAngle, endAngle, innerRadius } = arc.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius'], true)
  const midAngle = (startAngle + endAngle) / 2

  // Push tooltip toward the hovered segment — use the midpoint between
  // inner and outer radius so the position clearly follows each arc.
  const { outerRadius } = arc.getProps(['outerRadius'], true)
  const offsetDistance = (innerRadius + outerRadius) / 2
  let tipX = cx + Math.cos(midAngle) * offsetDistance
  let tipY = cy + Math.sin(midAngle) * offsetDistance

  // Approximate tooltip size for clamping
  const tooltipW = 170
  const tooltipH = 140
  const containerW = chart.width
  const containerH = chart.height
  const pad = 4

  // Clamp so tooltip stays fully inside the container
  tipX = Math.max(pad, Math.min(tipX, containerW - tooltipW - pad))
  tipY = Math.max(pad, Math.min(tipY, containerH - tooltipH - pad))

  return {
    top: `${tipY}px`,
    left: `${tipX}px`,
  }
})
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
  pointer-events: none;
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
  align-items: flex-end;
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

/* Tooltip */
.donut-tooltip {
  position: absolute;
  z-index: 10;
  pointer-events: none;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.25s ease;
}
.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
}

.donut-tooltip-body {
  background: rgba(249, 249, 249, 0.92);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 4px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 160px;
  font-size: 12px;
  color: #3a3a3a;
  white-space: nowrap;
}

.donut-tooltip-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.donut-tooltip-dot {
  width: 12px;
  height: 12px;
  border-radius: 4px;
  flex-shrink: 0;
}

.donut-tooltip-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.donut-tooltip-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.18);
}

</style>
