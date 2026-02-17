<template>
  <div class="toolbar">
    <button @click="$emit('selectParent')">Parent</button>
    <button @click="$emit('setStyleProperty', 'flex-direction', 'row')">
      Row
    </button>
    <button @click="$emit('setStyleProperty', 'flex-direction', 'column')">
      Column
    </button>
  </div>
</template>

<script lang="ts">
export default {
  emits: ["selectParent", "setStyleProperty"],
};
</script>

<style scoped>
.toolbar {
  width: 100%;
  height: 3em;
  display: flex;
  gap: 0.1in;
  padding: 0.1in;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
}
</style>
