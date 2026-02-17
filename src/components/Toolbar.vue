<template>
  <div class="toolbar">
    <button @click="$emit('selectParent')">Parent</button>
    <button @click="$emit('setStyleProperty', 'flex-direction', 'row')">
      Row
    </button>
    <button @click="$emit('setStyleProperty', 'flex-direction', 'column')">
      Column
    </button>
    <label>
      <input
        type="checkbox"
        :checked="selectedBoxIdStore.spellcheck"
        @change="selectedBoxIdStore.setSpellcheck($event.target.checked)"
      />
      Spellcheck
    </label>
  </div>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { useSelectedBoxIdStore } from "../stores/selectedBoxId";

export default {
  emits: ["selectParent", "setStyleProperty"],
  computed: {
    ...mapStores(useSelectedBoxIdStore),
  },
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
