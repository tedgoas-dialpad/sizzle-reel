<template>
  <div class="widget-grid">
    <!-- Row 1: Handled Calls (narrow ~40%) + Avg Call Duration (wide ~60%) -->
    <div class="widget-row">
      <div class="widget-card widget-card--narrow">
        <DonutWidget
          :title="handledCalls.title"
          :segments="handledCalls.segments"
          :center-value="handledCalls.total"
          :center-label="handledCalls.centerLabel"
        />
      </div>
      <div class="widget-card widget-card--wide">
        <LineChartWidget
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
        <LineChartWidget
          :title="aiScorecards.title"
          :value="aiScorecards.value"
          :chart-data="aiScorecards.chartData"
          :rankings="aiScorecards.rankings"
        />
      </div>
      <div class="widget-card widget-card--narrow">
        <DonutWidget
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
        <DonutWidget
          :title="aiChatbot.title"
          :segments="aiChatbot.segments"
          :center-value="aiChatbot.total"
          :center-label="aiChatbot.centerLabel"
          :secondary-stat="aiChatbot.secondaryStat"
        />
      </div>
      <div class="widget-card widget-card--wide">
        <LineChartWidget
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
</style>
