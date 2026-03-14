<template>
  <div :class="['splash-screen', { 'brand-loaded': brandLoaded }]">
    <div class="splash-avatar-wrapper">
      <div :class="['splash-avatar', { 'brand-loaded': brandLoaded }]">
        <svg v-if="brandLoaded" width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8682 7.14697L21.5409 0H15.9998L18.8574 8.77795C19.3785 10.378 20.6315 11.6322 22.2315 12.1556L32.0001 15.3465V9.80418L23.867 7.14812L23.8682 7.14697Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.13301 7.14706L10.4592 8.85725e-05H16.0003L13.1427 8.77804C12.6216 10.3781 11.3686 11.6322 9.76855 12.1557L0 15.3466V9.80427L8.13301 7.14821V7.14706Z" fill="white"/>
        </svg>
      </div>
      <div style="--i: 0" class="splash-pulse" />
      <div style="--i: 1" class="splash-pulse" />
      <div style="--i: 2" class="splash-pulse" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['done'])

const brandLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    brandLoaded.value = true
  }, 1500)

  setTimeout(() => {
    emit('done')
  }, 3000)
})
</script>

<style scoped>
.splash-screen {
  width: 384px;
  height: 600px;
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  background-color: #1C2B39;
  transition: background-color 0.6s ease-in-out;
  overflow: hidden;
}

.splash-screen.brand-loaded {
  background-color: #E20074;
}

.splash-avatar-wrapper {
  position: relative;
  width: 32px;
  height: 32px;
}

.splash-avatar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: #2a3f50;
  animation: pulse 1500ms infinite linear;
  transition: background-color 0.6s ease-in-out, border-color 0.6s ease-in-out;
  z-index: 1;
}

.splash-avatar.brand-loaded {
  background-color: #E20074;
  border-color: rgba(255, 255, 255, 0.5);
}

.splash-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  animation: pulse-outline 3000ms infinite linear calc(var(--i) * 1500ms) forwards;
}

@keyframes pulse {
  from { transform: scale(1); }
  90% { transform: scale(1.2); }
  to { transform: scale(1); }
}

@keyframes pulse-outline {
  from { transform: translate(-50%, -50%); opacity: 1; }
  to { transform: translate(-50%, -50%); width: 2000%; height: 2000%; opacity: 0; }
}
</style>
