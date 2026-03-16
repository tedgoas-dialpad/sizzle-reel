<template>
  <div class="builder-view">
    <!-- Admin sidebar -->
    <aside class="builder-admin-nav">
      <div class="admin-nav-search">
        <div class="admin-nav-search-input">
          Dialpad Office
          <span class="admin-nav-search-arrow">&#9662;</span>
        </div>
      </div>
      <div
        v-for="item in adminNavItems"
        :key="item.label"
        class="admin-nav-item"
        :class="{ 'admin-nav-item--active': item.active }"
      >
        <span>{{ item.label }}</span>
        <span v-if="item.hasPlus" class="admin-nav-plus">+</span>
      </div>
    </aside>

    <!-- Main content -->
    <div class="builder-main">
      <!-- Top bar -->
      <div class="builder-top-bar">
        <div class="builder-breadcrumbs">
          <span v-for="(crumb, i) in scorecardMeta.breadcrumbs" :key="i">
            <span :class="i < scorecardMeta.breadcrumbs.length - 1 ? 'crumb-muted' : 'crumb-active'">{{ crumb }}</span>
            <span v-if="i < scorecardMeta.breadcrumbs.length - 1" class="crumb-separator"> / </span>
          </span>
        </div>
        <div class="builder-search-bar">
          <span class="builder-search-icon">&#128269;</span>
          Search help center
        </div>
      </div>

      <!-- Page title area -->
      <div class="builder-title-area">
        <div class="builder-title-left">
          <div class="builder-title-row">
            <h1 class="builder-title">{{ scorecardMeta.name }}</h1>
            <div class="builder-ai-badge">
              <span class="builder-ai-badge-sparkle">&#10024;</span>
              {{ scorecardMeta.gradeBy }}
              <span class="builder-ai-badge-arrow">&#9662;</span>
            </div>
          </div>
          <p class="builder-description">Add a description</p>
          <div class="builder-filters">
            <button class="builder-filter-btn">Contact centers (0) <span>&#9662;</span></button>
            <button class="builder-filter-btn">Coaching teams (0) <span>&#9662;</span></button>
          </div>
        </div>
        <div class="builder-title-right">
          <div class="builder-actions-row">
            <span class="builder-status-badge">Draft</span>
            <button class="builder-icon-btn">&#128465;</button>
            <button class="builder-icon-btn">&#128203;</button>
            <div class="builder-language-select">
              English <span>&#9662;</span>
            </div>
            <button class="builder-publish-btn">Publish</button>
          </div>
        </div>
      </div>

      <!-- Two column layout -->
      <div class="builder-content">
        <div class="builder-left">
          <QuestionList
            :questions="localQuestions"
            :selectedId="selectedQuestionId"
            @select="selectQuestion"
          />
        </div>
        <div class="builder-right">
          <QuestionDetail :question="selectedQuestion" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import QuestionList from './QuestionList.vue'
import QuestionDetail from './QuestionDetail.vue'
import { questions, scorecardMeta, adminNavItems } from '../data/builderData.js'

const localQuestions = ref([...questions])
const selectedQuestionId = ref(questions[0]?.id || null)

const selectedQuestion = computed(() =>
  localQuestions.value.find(q => q.id === selectedQuestionId.value) || null
)

function selectQuestion(id) {
  selectedQuestionId.value = id
}
</script>

<style scoped>
.builder-view {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.builder-admin-nav {
  width: 215px;
  background: #f9f9f9;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  overflow-y: auto;
}

.admin-nav-search {
  padding: 9px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.admin-nav-search-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.03);
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 12px;
  color: #3a3a3a;
}

.admin-nav-search-arrow {
  font-size: 10px;
  color: #808080;
}

.admin-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  height: 52px;
  box-sizing: border-box;
  font-size: 15px;
  color: #18181b;
  cursor: default;
}

.admin-nav-item--active {
  background: #e9e9e9;
}

.admin-nav-plus {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #808080;
  border-radius: 50%;
}

.builder-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
}

.builder-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 24px;
  background: #f9f9f9;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.builder-breadcrumbs {
  display: flex;
  gap: 6px;
  font-size: 12px;
}

.crumb-muted { color: #888; }
.crumb-active { color: black; }
.crumb-separator { color: #888; }

.builder-search-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.03);
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 12px;
  color: #808080;
  width: 261px;
}

.builder-search-icon {
  font-size: 12px;
}

.builder-title-area {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 32px;
  border-bottom: 1px solid #d2d2d2;
  flex-shrink: 0;
}

.builder-title-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.builder-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.builder-title {
  font-size: 27px;
  font-weight: 500;
  color: #1c1c1c;
  margin: 0;
  line-height: 1.2;
}

.builder-ai-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 6px 3px 4px;
  border: 1px solid rgba(28, 28, 28, 0.11);
  border-radius: 6px;
  font-size: 12px;
  color: #1c1c1c;
  background: linear-gradient(170deg, rgba(71,21,113,0.1) 0%, rgba(124,34,158,0.1) 14%, rgba(176,34,144,0.1) 35%, rgba(233,47,111,0.1) 60%, rgba(246,72,79,0.1) 70%, rgba(251,115,40,0.1) 90%, rgba(243,150,15,0.1) 100%);
}

.builder-ai-badge-sparkle {
  font-size: 12px;
}

.builder-ai-badge-arrow {
  font-size: 8px;
}

.builder-description {
  font-size: 12px;
  color: #535353;
  margin: 0;
  line-height: 1.4;
}

.builder-filters {
  display: flex;
  gap: 4px;
}

.builder-filter-btn {
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

.builder-title-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

.builder-actions-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.builder-status-badge {
  padding: 4px 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  color: #3a3a3a;
  background: white;
}

.builder-icon-btn {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: default;
  font-size: 14px;
  color: #3a3a3a;
}

.builder-language-select {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.03);
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 12px;
  color: #3a3a3a;
  cursor: default;
}

.builder-publish-btn {
  padding: 8px 20px;
  background: #7C52FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: default;
}

.builder-content {
  display: flex;
  gap: 16px;
  padding: 32px 32px 32px 20px;
  flex: 1;
  overflow-y: auto;
  align-items: flex-start;
}

.builder-left {
  flex: 1;
  min-width: 0;
}

.builder-right {
  flex-shrink: 0;
}
</style>
