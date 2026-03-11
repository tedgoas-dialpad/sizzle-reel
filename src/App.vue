<template>
  <div v-if="isPrototype">
    <router-view />
  </div>
  <div v-else>
    <main style="max-width: 960px; width: 100%; margin: 0 auto;">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isPrototype = computed(() => route.path.startsWith('/prototypes/'))
</script>
