<template>
  <header class="topbar">
    <div class="topbar-left">
      <div class="topbar-window-controls">
        <span class="window-dot window-dot--close"></span>
        <span class="window-dot window-dot--minimize"></span>
        <span class="window-dot window-dot--maximize"></span>
      </div>
      <div class="topbar-logo">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="6" fill="#7C52FF"/>
          <text x="7" y="19" fill="white" font-size="14" font-weight="700">D</text>
        </svg>
      </div>
      <nav class="topbar-nav">
        <button v-for="icon in navIcons" :key="icon" class="topbar-nav-btn" :title="icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="20" height="20" rx="4" fill="transparent"/>
            <path v-if="icon === 'phone'" d="M4 3h4l2 4-2.5 1.5A11 11 0 0 0 12.5 13.5L14 11l4 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 5a2 2 0 0 1 2-2z" stroke="#666" stroke-width="1.5" fill="none"/>
            <path v-else-if="icon === 'chat'" d="M3 4h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4l-3 3v-3H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="#666" stroke-width="1.5" fill="none"/>
            <path v-else-if="icon === 'video'" d="M2 6h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm12 2l5-2v8l-5-2z" stroke="#666" stroke-width="1.5" fill="none"/>
            <path v-else-if="icon === 'screen'" d="M3 4h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm4 11h6" stroke="#666" stroke-width="1.5" fill="none"/>
          </svg>
        </button>
      </nav>
    </div>
    <div class="topbar-center">
      <button class="topbar-nav-btn topbar-nav-back" title="Back">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4l-6 6 6 6" stroke="#666" stroke-width="1.5" fill="none"/></svg>
      </button>
      <button class="topbar-nav-btn" title="Forward">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="#666" stroke-width="1.5" fill="none"/></svg>
      </button>
      <button class="topbar-nav-btn" title="Reload">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10a7 7 0 0 1 13-3.5M17 10a7 7 0 0 1-13 3.5" stroke="#666" stroke-width="1.5" fill="none"/><path d="M16 3v4h-4" stroke="#666" stroke-width="1.5" fill="none"/></svg>
      </button>
      <button class="topbar-nav-btn" title="Search">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="#666" stroke-width="1.5"/><path d="M11 11l3 3" stroke="#666" stroke-width="1.5"/></svg>
      </button>
      <div class="topbar-search">
        <span class="topbar-search-text">Search Dialpad</span>
      </div>
    </div>
    <div class="topbar-right">
      <button class="topbar-nav-btn" title="Settings">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="#666" stroke-width="1.5" fill="none"/><path d="M10 1v2m0 14v2m-7-9H1m18 0h-2M4.22 4.22l1.42 1.42m8.72 8.72l1.42 1.42M4.22 15.78l1.42-1.42m8.72-8.72l1.42-1.42" stroke="#666" stroke-width="1.5"/></svg>
      </button>
      <button class="topbar-nav-btn" title="Calendar">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="14" rx="2" stroke="#666" stroke-width="1.5" fill="none"/><path d="M2 8h16M7 2v4M13 2v4" stroke="#666" stroke-width="1.5"/></svg>
      </button>
      <div class="topbar-status">
        <span class="d-body-small" style="color: var(--dt-color-foreground-secondary);">Available to chat</span>
        <div class="topbar-avatar">
          <div class="avatar-circle">
            <img src="https://i.pravatar.cc/32?img=49" alt="User avatar" width="32" height="32" />
          </div>
          <span class="avatar-status avatar-status--available"></span>
        </div>
      </div>
      <button class="topbar-nav-btn topbar-more" title="More">
        <svg width="4" height="16" viewBox="0 0 4 16" fill="none"><circle cx="2" cy="2" r="1.5" fill="#666"/><circle cx="2" cy="8" r="1.5" fill="#666"/><circle cx="2" cy="14" r="1.5" fill="#666"/></svg>
      </button>
    </div>
  </header>
</template>

<script setup>
const navIcons = ['phone', 'chat', 'video', 'screen']
</script>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 12px;
  background: var(--dt-color-surface-primary);
  border-bottom: 1px solid var(--dt-color-border-default);
  gap: 8px;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.topbar-window-controls {
  display: flex;
  gap: 6px;
  padding: 0 4px;
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
  margin-left: 4px;
}

.topbar-nav {
  display: flex;
  gap: 2px;
}

.topbar-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: none;
  border-radius: 8px;
  cursor: pointer;
  color: var(--dt-color-foreground-secondary);
}

.topbar-nav-btn:hover {
  background: var(--dt-color-surface-secondary);
}

.topbar-center {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  gap: 4px;
}

.topbar-search {
  display: flex;
  align-items: center;
  background: var(--dt-color-surface-secondary);
  border: 1px solid var(--dt-color-border-default);
  border-radius: 8px;
  padding: 6px 16px;
  min-width: 200px;
  cursor: pointer;
}

.topbar-search-text {
  color: var(--dt-color-foreground-placeholder);
  font-size: var(--dt-font-size-200);
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.topbar-status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
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
  border: 2px solid var(--dt-color-surface-primary);
}

.avatar-status--available {
  background: #28CA41;
}
</style>
