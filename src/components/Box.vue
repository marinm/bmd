<template>
  <div
    class="box"
    :class="{
      selected: isSelected,
      outline: selectedBoxIdStore.showBoxOutline,
    }"
    @click.stop="select"
    :data-box-id="boxId"
  >
    <slot />
    <textarea :spellcheck="selectedBoxIdStore.spellcheck"></textarea>
  </div>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import BoxTools from "./BoxTools.vue";
import { useSelectedBoxIdStore } from "../stores/selectedBoxId";

export default {
  components: {
    BoxTools,
  },
  data() {
    return {
      boxId: crypto.randomUUID(),
    };
  },
  computed: {
    ...mapStores(useSelectedBoxIdStore),
    isSelected() {
      return this.boxId === this.selectedBoxIdStore.boxId;
    },
  },
  methods: {
    select() {
      this.selectedBoxIdStore.set(this.boxId);
    },
  },
};
</script>

<style scoped>
.box {
  display: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-grow: 1;
  position: relative;
}
.box.selected {
  background-color: aliceblue;
}
.box.outline {
  outline: 0.1mm solid blue;
}
.box textarea {
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  margin: 0;
  font-family: sans-serif;
  resize: none;
  background-color: transparent;
}
.box textarea:focus {
  outline: none;
}
</style>
