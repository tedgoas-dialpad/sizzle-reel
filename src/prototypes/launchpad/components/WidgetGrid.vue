<template>
  <div class="widget-grid">
    <!-- Row 1: Handled Calls (narrow ~40%) + Avg Call Duration (wide ~60%) -->
    <div class="widget-row">
      <div class="widget-card widget-card--narrow">
        <div v-if="loading" class="skeleton-donut">
          <DtSkeletonText width="40%" :animate="true" />
          <DtSkeletonShape shape="circle" class="skeleton-donut-circle" />
          <div class="skeleton-donut-legend">
            <DtSkeletonText v-for="n in 3" :key="n" :width="`${50 + n * 10}%`" :animate="true" />
          </div>
        </div>
        <DonutWidget
          v-else
          :title="handledCalls.title"
          :segments="handledCalls.segments"
          :center-value="handledCalls.total"
          :center-label="handledCalls.centerLabel"
        />
      </div>
      <div class="widget-card widget-card--wide">
        <div v-if="loading" class="skeleton-linechart">
          <DtSkeletonText width="30%" :animate="true" />
          <DtSkeletonText width="15%" type="heading" heading-height="lg" :animate="true" />
          <DtSkeletonShape shape="square" class="skeleton-linechart-chart" />
          <DtSkeletonParagraph :rows="2" />
        </div>
        <LineChartWidget
          v-else
          :title="avgCallDuration.title"
          :value="avgCallDuration.value"
          :chart-data="avgCallDuration.chartData"
          :rankings="avgCallDuration.rankings"
        />
      </div>
    </div>

    <!-- Row 2: Ai Scorecards (wide ~60%) + Unanswered Calls (narrow ~40%) -->
    <div class="widget-row widget-row--flipped">
      <div class="widget-card widget-card--wide">
        <div v-if="loading" class="skeleton-linechart">
          <DtSkeletonText width="30%" :animate="true" />
          <DtSkeletonText width="15%" type="heading" heading-height="lg" :animate="true" />
          <DtSkeletonShape shape="square" class="skeleton-linechart-chart" />
          <DtSkeletonParagraph :rows="2" />
        </div>
        <LineChartWidget
          v-else
          :title="aiScorecards.title"
          :value="aiScorecards.value"
          :chart-data="aiScorecards.chartData"
          :rankings="aiScorecards.rankings"
        />
      </div>
      <div class="widget-card widget-card--narrow">
        <div v-if="loading" class="skeleton-donut">
          <DtSkeletonText width="40%" :animate="true" />
          <DtSkeletonShape shape="circle" class="skeleton-donut-circle" />
          <div class="skeleton-donut-legend">
            <DtSkeletonText v-for="n in 4" :key="n" :width="`${50 + n * 10}%`" :animate="true" />
          </div>
        </div>
        <DonutWidget
          v-else
          :title="unansweredCalls.title"
          :segments="unansweredCalls.segments"
          :center-value="unansweredCalls.total"
          :center-label="unansweredCalls.centerLabel"
          :secondary-stat="unansweredCalls.secondaryStat"
        />
      </div>
    </div>

    <!-- Row 3: Ai Chatbot (narrow ~40%) + Ai CSAT (wide ~60%) -->
    <div class="widget-row">
      <div class="widget-card widget-card--narrow">
        <div v-if="loading" class="skeleton-donut">
          <DtSkeletonText width="40%" :animate="true" />
          <DtSkeletonShape shape="circle" class="skeleton-donut-circle" />
          <div class="skeleton-donut-legend">
            <DtSkeletonText v-for="n in 4" :key="n" :width="`${50 + n * 10}%`" :animate="true" />
          </div>
        </div>
        <DonutWidget
          v-else
          :title="aiChatbot.title"
          :segments="aiChatbot.segments"
          :center-value="aiChatbot.total"
          :center-label="aiChatbot.centerLabel"
          :secondary-stat="aiChatbot.secondaryStat"
        />
      </div>
      <div class="widget-card widget-card--wide">
        <div v-if="loading" class="skeleton-linechart">
          <DtSkeletonText width="30%" :animate="true" />
          <DtSkeletonText width="15%" type="heading" heading-height="lg" :animate="true" />
          <DtSkeletonShape shape="square" class="skeleton-linechart-chart" />
          <DtSkeletonParagraph :rows="2" />
        </div>
        <LineChartWidget
          v-else
          :title="aiCsat.title"
          :value="aiCsat.value"
          :chart-data="aiCsat.chartData"
          :rankings="aiCsat.rankings"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { DtSkeletonText, DtSkeletonShape, DtSkeletonParagraph } from '@dialpad/dialtone/vue3/lib/skeleton'
import DonutWidget from './DonutWidget.vue'
import LineChartWidget from './LineChartWidget.vue'
import {
  handledCalls,
  avgCallDuration,
  aiScorecards,
  unansweredCalls,
  aiChatbot,
  aiCsat,
} from '../data/mockData.js'

const loading = ref(true)

function startLoading() {
  loading.value = true
  setTimeout(() => { loading.value = false }, 2000)
}

onMounted(() => { startLoading() })

defineExpose({ startLoading })
</script>

<style scoped>
.widget-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px 16px;
}

.widget-row {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 16px;
}

.widget-row--flipped {
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
}

.widget-card {
  background: var(--dt-color-surface-primary);
  border: 1px solid var(--dt-color-border-default);
  border-radius: 12px;
  padding: 16px;
  min-height: 340px;
}

/* Skeleton: donut card */
.skeleton-donut {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100%;
}

.skeleton-donut :deep(.d-bar-circle) {
  width: 200px !important;
  height: 200px !important;
}

.skeleton-donut-legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

/* Skeleton: line chart card */
.skeleton-linechart {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
}

.skeleton-linechart :deep(.d-bar2) {
  width: 100% !important;
  height: 180px !important;
}
</style>
