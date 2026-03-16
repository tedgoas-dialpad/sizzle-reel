<template>
  <div class="analytics-view">
    <AnalyticsSidebar />

    <div class="analytics-main">
      <!-- Top bar -->
      <div class="analytics-top-bar">
        <div class="analytics-breadcrumbs">
          <span class="crumb-muted">Analytics</span>
          <span class="crumb-separator">/</span>
          <span class="crumb-muted">AI Scorecards</span>
          <span class="crumb-separator">/</span>
          <span class="crumb-active">By group</span>
        </div>
        <div class="analytics-search">
          <span class="search-icon">&#128269;</span>
          <span>Help center</span>
        </div>
      </div>

      <!-- Content -->
      <div class="analytics-content">
        <!-- Page title -->
        <div class="analytics-title-area">
          <div class="analytics-title-left">
            <h1 class="analytics-title">AI Scorecards by group</h1>
            <div class="analytics-filters">
              <button class="analytics-filter-btn">All groups <span>&#9662;</span></button>
              <button class="analytics-filter-btn analytics-filter-btn--active">Past 60 days <span>&times;</span></button>
            </div>
          </div>
          <div class="analytics-title-right">
            <span class="analytics-link">View graded calls</span>
            <button class="analytics-export-btn">Export</button>
          </div>
        </div>

        <!-- Chart -->
        <ComboChart />

        <!-- Spacer -->
        <div style="height: 42px;"></div>

        <!-- Agent table -->
        <AgentTable />
      </div>
    </div>
  </div>
</template>

<script setup>
import AnalyticsSidebar from './AnalyticsSidebar.vue'
import ComboChart from './ComboChart.vue'
import AgentTable from './AgentTable.vue'
</script>

<style scoped>
.analytics-view {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.analytics-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.analytics-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 32px;
  background: #fafafa;
  border-bottom: 1px solid #e5e5e5;
  flex-shrink: 0;
}

.analytics-breadcrumbs {
  display: flex;
  gap: 8px;
  font-size: 12px;
}

.crumb-muted { color: rgba(0, 0, 0, 0.5); }
.crumb-active { color: #1c1c1c; font-weight: 500; font-size: 15px; }
.crumb-separator { color: rgba(0, 0, 0, 0.5); }

.analytics-search {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.03);
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 15px;
  color: #808080;
}

.search-icon {
  font-size: 14px;
}

.analytics-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px 32px;
  background: white;
}

.analytics-title-area {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
}

.analytics-title-left {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.analytics-title {
  font-size: 27px;
  font-weight: 500;
  color: #1c1c1c;
  margin: 0;
  line-height: 1.2;
}

.analytics-filters {
  display: flex;
  gap: 4px;
  padding: 4px 0;
}

.analytics-filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: none;
  font-size: 12px;
  font-weight: 500;
  color: #3a3a3a;
  cursor: default;
}

.analytics-filter-btn--active {
  background: #F5F0FF;
  border-color: #D3BCFF;
  color: #7C52FF;
}

.analytics-title-right {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.analytics-link {
  font-size: 15px;
  color: #7C52FF;
  cursor: default;
  line-height: 2.4;
}

.analytics-export-btn {
  padding: 8px 20px;
  background: #7C52FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: default;
}
</style>
