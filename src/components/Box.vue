<template>
  <div
    class="box"
    :class="{ selected: isSelected }"
    @click.stop="select"
    :data-box-id="boxId"
  >
    <slot />
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
  outline: 1px solid blue;
}
.box.selected {
  background-color: aliceblue;
}
</style>
