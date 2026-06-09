<script setup>
const props = defineProps({
  version: {
    type: String,
    default: 'dev'
  }
})
</script>

<template>
  <span class="version-badge">{{ props.version }}</span>
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