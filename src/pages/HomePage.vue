<template>
  <div class="d-stack d-stack--gap-500 d-p24 d-ta-center">
    <h1 class="d-headline-large">Sizzle Reel</h1>
    <p v-if="prototypes.length === 0" class="d-body-base">
      No prototypes yet.
    </p>
    <ul v-else class="d-stack d-stack--gap-300">
      <li v-for="proto in prototypes" :key="proto.name">
        <router-link :to="`/prototypes/${proto.name}`" class="d-link">
          {{ proto.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { prototypes } from '../router'
</script>
