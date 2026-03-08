<template>
  <header class="topbar">
    <div class="topbar-left">
      <div class="topbar-window-controls">
        <span class="window-dot window-dot--close"></span>
        <span class="window-dot window-dot--minimize"></span>
        <span class="window-dot window-dot--maximize"></span>
      </div>
      <div class="topbar-logo">
        <DtIconDialpadLogo size="500" />
      </div>
      <div class="topbar-primary-actions">
        <button class="topbar-circle-btn" title="Phone">
          <DtIconDpPhone size="400" />
        </button>
        <button class="topbar-circle-btn" title="Message">
          <DtIconMessage size="400" />
        </button>
        <button class="topbar-circle-btn" title="Video">
          <DtIconVideo size="400" />
        </button>
      </div>
    </div>
    <div class="topbar-center">
      <div class="topbar-nav-buttons">
        <button class="topbar-circle-btn" title="Back">
          <DtIconArrowLeft size="400" />
        </button>
        <button class="topbar-circle-btn" title="Forward">
          <DtIconArrowRight size="400" />
        </button>
        <button class="topbar-circle-btn" title="Reload">
          <DtIconRefresh size="400" />
        </button>
      </div>
      <div class="topbar-search">
        <DtIconSearch size="300" class="topbar-search-icon" />
        <span class="topbar-search-text">Search Dialpad</span>
      </div>
    </div>
    <div class="topbar-right">
      <button class="topbar-circle-btn" title="Settings">
        <DtIconSettings size="400" />
      </button>
      <button class="topbar-circle-btn" title="Calendar">
        <DtIconCalendar size="400" />
      </button>
      <div class="topbar-profile">
        <span class="topbar-profile-text">Available to chat</span>
        <div class="topbar-avatar">
          <div class="avatar-circle">
            <img src="https://i.pravatar.cc/32?img=49" alt="User avatar" width="32" height="32" />
          </div>
          <span class="avatar-status avatar-status--available"></span>
        </div>
      </div>
      <button class="topbar-circle-btn" title="More">
        <DtIconMoreVertical size="400" />
      </button>
    </div>
  </header>
</template>

<script setup>
import DtIconDialpadLogo from '@dialpad/dialtone-icons/vue3/dialpad-logo'
import DtIconDpPhone from '@dialpad/dialtone-icons/vue3/dp-phone'
import DtIconMessage from '@dialpad/dialtone-icons/vue3/message'
import DtIconVideo from '@dialpad/dialtone-icons/vue3/video'
import DtIconArrowLeft from '@dialpad/dialtone-icons/vue3/arrow-left'
import DtIconArrowRight from '@dialpad/dialtone-icons/vue3/arrow-right'
import DtIconRefresh from '@dialpad/dialtone-icons/vue3/refresh'
import DtIconSearch from '@dialpad/dialtone-icons/vue3/search'
import DtIconSettings from '@dialpad/dialtone-icons/vue3/settings'
import DtIconCalendar from '@dialpad/dialtone-icons/vue3/calendar'
import DtIconMoreVertical from '@dialpad/dialtone-icons/vue3/more-vertical'
</script>

<style scoped>
.topbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 var(--dt-space-500);
  background: #F9F9F9;
  border-bottom: 1px solid rgba(28, 28, 28, 0.11);
}

.topbar-left {
  position: absolute;
  left: var(--dt-space-500);
  display: flex;
  align-items: center;
  gap: var(--dt-space-525);
}

.topbar-window-controls {
  display: flex;
  gap: 8px;
}

.window-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.window-dot--close { background: #FF5F57; }
.window-dot--minimize { background: #FFBD2E; }
.window-dot--maximize { background: #28CA41; }

.topbar-logo {
  display: flex;
  align-items: center;
}

.topbar-primary-actions {
  display: flex;
  gap: var(--dt-space-400);
}

.topbar-circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  border-radius: 16px;
  cursor: pointer;
  color: rgba(28, 28, 28, 0.65);
  padding: 0;
}

.topbar-circle-btn:hover {
  background: rgba(28, 28, 28, 0.05);
}

.topbar-center {
  display: flex;
  align-items: center;
  gap: var(--dt-space-500);
  transform: translateX(-64px);
}

.topbar-nav-buttons {
  display: flex;
  gap: var(--dt-space-400);
}

.topbar-search {
  display: flex;
  align-items: center;
  width: 440px;
  height: 32px;
  background: rgba(28, 28, 28, 0.05);
  border-radius: 27px;
  padding: 0 var(--dt-space-450);
  gap: var(--dt-space-400);
  cursor: pointer;
}

.topbar-search-icon {
  color: rgba(28, 28, 28, 0.5);
  flex-shrink: 0;
}

.topbar-search-text {
  color: rgba(28, 28, 28, 0.5);
  font-size: var(--dt-font-size-200);
}

.topbar-right {
  position: absolute;
  right: var(--dt-space-500);
  display: flex;
  align-items: center;
  gap: var(--dt-space-400);
}

.topbar-profile {
  display: flex;
  align-items: center;
  background: rgba(28, 28, 28, 0.05);
  border-radius: 16px;
  padding-left: var(--dt-space-450);
  gap: var(--dt-space-400);
}

.topbar-profile-text {
  color: rgba(28, 28, 28, 0.8);
  font-size: var(--dt-font-size-200);
  white-space: nowrap;
}

.topbar-avatar {
  position: relative;
}

.avatar-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-circle img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-status {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #F9F9F9;
}

.avatar-status--available {
  background: #28CA41;
}
</style>
