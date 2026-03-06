<template>
  <div class="launchpad-app">
    <TopBar />
    <div class="launchpad-body">
      <LeftSidebar />
      <main class="launchpad-content">
        <LaunchpadHeader />
        <WidgetGrid />
      </main>
    </div>
  </div>
</template>

<script setup>
import TopBar from './components/TopBar.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import LaunchpadHeader from './components/LaunchpadHeader.vue'
import WidgetGrid from './components/WidgetGrid.vue'
</script>

<style scoped>
.launchpad-app {
  display: grid;
  grid-template-rows: 60px 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: var(--dt-font-family-body);
}

.launchpad-body {
  display: grid;
  grid-template-columns: 300px 1fr;
  overflow: hidden;
}

.launchpad-content {
  overflow-y: auto;
  background-color: var(--dt-color-surface-secondary);
}
</style>
