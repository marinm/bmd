<template>
  <div class="box" :style="boxNode.style">
    <Box
      v-for="child in boxNode.children"
      :key="child.boxId"
      :box-node="child"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Box",
  props: ["boxNode"],
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
