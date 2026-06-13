<<template>
  <div class="file-tree">
    <TreeNode v-for="node in data" :key="node.name" :node="node" />
  </div>
</template>

<script setup>
import TreeNode from './TreeNode.vue'

defineProps({
  data: Array
})
</script>

<style scoped>
.file-tree {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.4;
}
</style>