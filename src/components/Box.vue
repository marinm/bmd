<template>
  <div
    class="box"
    :class="{ selected: showBoxTools }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <BoxTools v-if="showBoxTools" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import BoxTools from "./BoxTools.vue";

export default {
  components: {
    BoxTools,
  },
  data() {
    return {
      showBoxTools: false,
    };
  },
  methods: {
    onMouseEnter() {
      this.showBoxTools = true;
    },
    onMouseLeave() {
      this.showBoxTools = false;
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
</style>
