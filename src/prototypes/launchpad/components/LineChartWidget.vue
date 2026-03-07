<template>
  <div class="linechart-widget">
    <div class="linechart-main" :class="{ 'linechart-main--with-rankings': rankings }">
      <div class="linechart-left">
        <div class="linechart-header">
          <div class="linechart-header-content">
            <span class="linechart-title d-body-base">{{ title }}</span>
            <span class="linechart-value d-headline-extra-large">{{ value }}</span>
          </div>
        </div>
        <div class="linechart-chart" @mouseleave="clearHover">
          <Line ref="chartRef" :data="chartDataConfig" :options="chartOptionsConfig" :plugins="[progressiveRevealPlugin, hoverEffectsPlugin]" />
          <transition name="tooltip-fade">
            <div v-if="activePointIndex !== null" class="linechart-tooltip" :style="tooltipPosition">
              <div class="linechart-tooltip-body">
                <div class="linechart-tooltip-header">
                  {{ chartData.labels[activePointIndex] }}
                </div>
                <template v-for="(row, ri) in tooltipRows" :key="ri">
                  <div class="linechart-tooltip-divider" v-if="ri === 2"></div>
                  <div class="linechart-tooltip-row">
                    <span class="linechart-tooltip-row-label">
                      <span class="linechart-tooltip-dot" :style="{ background: row.color }"></span>
                      <span>{{ row.label }}:</span>
                    </span>
                    <span>{{ row.value }}</span>
                  </div>
                </template>
              </div>
            </div>
          </transition>
        </div>
        <div class="linechart-legend">
          <div
            v-for="(ds, i) in chartData.datasets"
            :key="ds.label"
            class="linechart-legend-item"
            :class="{
              'linechart-legend-item--selected': selectedDatasetIndex === i,
              'linechart-legend-item--faded': selectedDatasetIndex !== null && selectedDatasetIndex !== i,
            }"
            @click="toggleSelection(i)"
          >
            <span
              class="linechart-legend-dot"
              :style="legendDotStyle(ds, i)"
            ></span>
            <span>{{ ds.label }}</span>
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
import { ref, computed, watch, onMounted, nextTick } from 'vue'
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

const chartRef = ref(null)
const activePointIndex = ref(null)
const hoveredDatasetIndex = ref(null)
const selectedDatasetIndex = ref(null)

function clearHover() {
  activePointIndex.value = null
  hoveredDatasetIndex.value = null
}

function toggleSelection(index) {
  selectedDatasetIndex.value = selectedDatasetIndex.value === index ? null : index
}

function legendDotStyle(ds, index) {
  if (selectedDatasetIndex.value === index) {
    return {
      '--dot-size': '16px',
      '--dot-radius': '6px',
      '--dot-bg': ds.borderColor,
      '--dot-border': `1.5px solid ${ds.borderColor}`,
    }
  }
  if (selectedDatasetIndex.value !== null && selectedDatasetIndex.value !== index) {
    return {
      '--dot-size': '12px',
      '--dot-radius': '4px',
      '--dot-bg': 'rgba(28,28,28,0.02)',
      '--dot-border': '1px solid rgba(28,28,28,0.3)',
    }
  }
  return {
    '--dot-size': '12px',
    '--dot-radius': '4px',
    '--dot-bg': ds.borderColor,
    '--dot-border': 'none',
  }
}

const chartDataConfig = computed(() => ({
  labels: props.chartData.labels,
  datasets: props.chartData.datasets.map((ds, i) => {
    const selected = selectedDatasetIndex.value
    if (selected !== null) {
      return {
        ...ds,
        fill: false,
        borderWidth: selected === i ? 4 : 2,
        borderColor: selected === i ? ds.borderColor : ds.borderColor + '40',
      }
    }
    return {
      ...ds,
      fill: false,
      borderWidth: hoveredDatasetIndex.value !== null && hoveredDatasetIndex.value === i ? 4 : 2,
    }
  }),
}))

// Tooltip rows: one per dataset at the hovered index
const tooltipRows = computed(() => {
  if (activePointIndex.value === null) return []
  return props.chartData.datasets.map(ds => ({
    label: ds.label,
    color: ds.borderColor,
    value: ds.data[activePointIndex.value],
  }))
})

// Position tooltip to the right of the hovered point, clamped within container
const tooltipPosition = computed(() => {
  if (activePointIndex.value === null) return {}
  const chart = chartRef.value?.chart
  if (!chart) return {}

  const meta = chart.getDatasetMeta(0)
  const point = meta.data[activePointIndex.value]
  if (!point) return {}

  const { x, y } = point.getProps(['x', 'y'], true)
  const tooltipW = 170
  const tooltipH = 120
  const pad = 8

  let tipX = x + 16
  let tipY = y - tooltipH / 2

  // Clamp within chart area
  if (tipX + tooltipW > chart.width - pad) {
    tipX = x - tooltipW - 16
  }
  tipX = Math.max(pad, tipX)
  tipY = Math.max(pad, Math.min(tipY, chart.height - tooltipH - pad))

  return {
    top: `${tipY}px`,
    left: `${tipX}px`,
  }
})

// Chart.js plugin for hover effects: vertical dashed line + colored dots
const hoverEffectsPlugin = {
  id: 'lineChartHoverEffects',
  afterDraw(chart) {
    if (activePointIndex.value === null) return
    const ctx = chart.ctx
    const meta = chart.getDatasetMeta(0)
    const point = meta.data[activePointIndex.value]
    if (!point) return

    const { x } = point.getProps(['x'], true)
    const yAxis = chart.scales.y

    // Draw vertical dashed line
    ctx.save()
    ctx.beginPath()
    ctx.setLineDash([4, 4])
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)'
    ctx.lineWidth = 1
    ctx.moveTo(x, yAxis.top)
    ctx.lineTo(x, yAxis.bottom)
    ctx.stroke()
    ctx.restore()

    // Draw colored dots on each line
    chart.data.datasets.forEach((ds, dsIndex) => {
      const dsMeta = chart.getDatasetMeta(dsIndex)
      const dp = dsMeta.data[activePointIndex.value]
      if (!dp) return

      const { x: px, y: py } = dp.getProps(['x', 'y'], true)
      ctx.save()
      ctx.beginPath()
      ctx.arc(px, py, 4, 0, Math.PI * 2)
      ctx.fillStyle = ds.borderColor
      ctx.fill()
      ctx.restore()
    })
  },
}

// easeOutQuart easing (matches donut chart)
function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

// Chart.js plugin: clips dataset drawing to smoothly reveal lines left-to-right
const progressiveRevealPlugin = {
  id: 'progressiveReveal',
  beforeDatasetsDraw(chart) {
    if (!chart._revealProgress || chart._revealProgress >= 1) return
    const { ctx, chartArea: { left, top, right, bottom } } = chart
    ctx.save()
    ctx.beginPath()
    ctx.rect(left, top - 10, (right - left) * chart._revealProgress, bottom - top + 20)
    ctx.clip()
  },
  afterDatasetsDraw(chart) {
    if (!chart._revealProgress || chart._revealProgress >= 1) return
    chart.ctx.restore()
  },
}

onMounted(() => {
  nextTick(() => {
    const chart = chartRef.value?.chart
    if (!chart) return

    chart._revealProgress = 0
    const startTime = performance.now()
    const duration = 700

    function tick(now) {
      const t = Math.min((now - startTime) / duration, 1)
      chart._revealProgress = easeOutQuart(t)
      chart.draw()
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  })
})

const chartOptionsConfig = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 0 },
  transitions: {
    active: {
      animation: { duration: 200 },
    },
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  onHover: (event, elements, chart) => {
    if (!elements.length) {
      activePointIndex.value = null
      hoveredDatasetIndex.value = null
      return
    }
    activePointIndex.value = elements[0].index

    // Find the nearest dataset to the cursor
    if (event.y != null) {
      let closestDist = Infinity
      let closestDs = 0
      elements.forEach(el => {
        const meta = chart.getDatasetMeta(el.datasetIndex)
        const pt = meta.data[el.index]
        if (!pt) return
        const { y: py } = pt.getProps(['y'], true)
        const dist = Math.abs(event.y - py)
        if (dist < closestDist) {
          closestDist = dist
          closestDs = el.datasetIndex
        }
      })
      hoveredDatasetIndex.value = closestDs
    }
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
  gap: 6px;
  justify-content: center;
}

.linechart-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 6px 2px 4px;
  cursor: pointer;
  font-size: 15px;
  color: #1c1c1c;
  border-radius: 8px;
}

.linechart-legend-item--selected {
  background: rgba(28, 28, 28, 0.05);
}

.linechart-legend-dot {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linechart-legend-dot::after {
  content: '';
  display: block;
  width: var(--dot-size, 12px);
  height: var(--dot-size, 12px);
  border-radius: var(--dot-radius, 4px);
  background: var(--dot-bg);
  border: var(--dot-border, none);
  transition: all 0.15s ease;
}

.linechart-right {
  width: 200px;
  flex-shrink: 0;
  border-left: 1px solid var(--dt-color-border-default);
  padding-left: 16px;
}

/* Tooltip */
.linechart-tooltip {
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

.linechart-tooltip-body {
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

.linechart-tooltip-header {
  font-weight: 500;
}

.linechart-tooltip-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.linechart-tooltip-row-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.linechart-tooltip-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.linechart-tooltip-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.18);
}
</style>
