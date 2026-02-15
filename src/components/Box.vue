<template>
  <div
    class="box"
    :class="{ selected: isSelected }"
    @click.stop="isSelected = true"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import BoxTools from "./BoxTools.vue";

export default {
  components: {
    BoxTools,
  },
  emits: ["deselect"],
  data() {
    return {
      isSelected: false,
    };
  },
  watch: {
    isSelected() {
      if (this.isSelected) {
        this.addKeyListener();
      } else {
        this.removeKeyListener();
      }
    },
  },
  methods: {
    deselect() {
      this.isSelected = false;
      this.$emit("deselect");
    },
    onSlotDeselect() {
      this.isSelected = true;
      console.log("slot deselect");
    },
    onKeyDown(event: KeyboardEvent) {
      if (event.key === "Shift") {
        this.deselect();
      }
    },
    addKeyListener() {
      window.addEventListener("keydown", this.onKeyDown);
    },
    removeKeyListener() {
      window.removeEventListener("keydown", this.onKeyDown);
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
