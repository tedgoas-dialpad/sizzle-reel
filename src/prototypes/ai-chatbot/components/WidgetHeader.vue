<template>
  <div class="widget-header">
    <div class="header-left">
      <Transition name="avatar-swap" mode="out-in">
        <div
          :key="config.name"
          class="header-avatar"
          :style="{ backgroundColor: config.avatarColor }"
        >
          <svg v-if="config.name === 'Aerobot'" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="white"/>
          </svg>
          <span v-else class="agent-initial">S</span>
        </div>
      </Transition>
      <Transition name="text-swap" mode="out-in">
        <div :key="config.name" class="header-info">
          <span class="header-name">{{ config.name }}</span>
          <span class="header-role">{{ config.role }}</span>
        </div>
      </Transition>
    </div>
    <div class="header-actions">
      <button class="header-btn" aria-label="Minimize">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <button class="header-btn" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  config: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.widget-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #E8E8E8;
  background: #fff;
  border-radius: 16px 16px 0 0;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.agent-initial {
  color: #fff;
  font-weight: 600;
  font-size: 15px;
}

.header-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.header-name {
  font-weight: 600;
  font-size: 14px;
  color: #1C1C1C;
  line-height: 1.2;
}

.header-role {
  font-size: 12px;
  color: #9A9A9A;
  line-height: 1.2;
}

.header-actions {
  display: flex;
  gap: 4px;
}

.header-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9A9A9A;
  transition: background-color 0.15s, color 0.15s;
}

.header-btn:hover {
  background: #F5F5F5;
  color: #535353;
}

/* Transition: avatar crossfade */
.avatar-swap-enter-active,
.avatar-swap-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.avatar-swap-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.avatar-swap-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Transition: text crossfade */
.text-swap-enter-active,
.text-swap-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.text-swap-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.text-swap-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
