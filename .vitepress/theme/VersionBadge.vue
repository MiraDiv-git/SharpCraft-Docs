<script setup>
import { ref, onMounted } from 'vue'

const version = ref('...')

onMounted(async () => {
  const res = await fetch('https://api.github.com/repos/MiraDiv-git/SharpCraft/releases')
  const data = await res.json()
  version.value = data[0]?.tag_name ?? 'dev'
})
</script>

<template>
  <span class="version-badge">{{ version }}</span>
</template>

<style scoped>
.version-badge {
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 9999px;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  margin-left: 8px;
  vertical-align: middle;
}
</style>