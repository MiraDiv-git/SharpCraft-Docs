<<template>
  <div class="tree-node">
    <div class="node-content" :style="{ paddingLeft: depth * 12 + 'px' }">
      <span class="icon">{{ getIcon(node) }}</span>
      <span class="name" :class="{ 'is-folder': node.children }">{{ node.name }}</span>
    </div>
    <div v-if="node.children" class="children">
      <TreeNode 
        v-for="child in node.children" 
        :key="child.name" 
        :node="child" 
        :depth="depth + 1" 
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  node: Object,
  depth: { type: Number, default: 0 }
})

function getIcon(node) {
  if (node.children) return '📁'
  const ext = node.name.split('.').pop()?.toLowerCase()
  if (ext === 'cs') return '⚙️'
  if (ext === 'json') return '📜'
  if (['png','jpg','jpeg','gif','webp','ico','svg'].includes(ext)) return '🖼️'
  return '📄'
}
</script>

<style scoped>
.tree-node { line-height: 1.4; }
.node-content {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 1px 0;
  border-radius: 3px;
}
.node-content:hover { background: var(--vp-c-bg-mute); }
.icon { font-size: 12px; flex-shrink: 0; width: 16px; text-align: center; }
.name { color: var(--vp-c-text-2); }
.is-folder { color: var(--vp-c-brand-1); font-weight: 500; }
.children {
  border-left: 1px solid var(--vp-c-border);
  margin-left: 5px;
  padding-left: 2px;
}
</style>