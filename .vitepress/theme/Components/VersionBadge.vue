<script setup>
import { ref, onMounted, computed } from 'vue'

const version = ref('...')
const docversion = ref('...')

onMounted(async () => {
  try {
    const [engineRes, docsRes] = await Promise.all([
      fetch('https://api.github.com/repos/MiraDiv-git/SharpCraft/tags'),
      fetch('https://api.github.com/repos/MiraDiv-git/SharpCraft-Docs/tags')
    ])

    const engineData = await engineRes.json()
    const docsData = await docsRes.json()

    version.value = engineData[0]?.name ?? 'dev'
    docversion.value = docsData[0]?.name ?? 'dev'
  } catch (e) {
    version.value = 'dev'
    docversion.value = 'dev'
  }
})

const isSameVersion = computed(() => {
  if (version.value === '...' || docversion.value === '...') return false
  return version.value === docversion.value
})
</script>

<template>
  <div class="badges-container">
    <span class="version-badge">
      {{ isSameVersion ? version : 'Engine: ' + version }}
    </span>
    
    <span v-if="!isSameVersion" class="docversion-badge">
      {{ 'Docs: ' + docversion }}
    </span>
  </div>
</template>

<style scoped>
.badges-container {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;

  --badge-engine-color: #5e8fff;
  --badge-docs-color: #c586c0;
}

.version-badge {
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 9999px;
  border: 1px solid var(--badge-engine-color);
  color: var(--badge-engine-color);
  margin-left: 8px;
}

.docversion-badge {
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 9999px;
  border: 1px solid var(--badge-docs-color);
  color: var(--badge-docs-color);
  margin-left: 8px;
}
</style>