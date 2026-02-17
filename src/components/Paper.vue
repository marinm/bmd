<template>
  <div class="paper">
    <slot></slot>
  </div>
</template>

<style scoped>
.paper {
  width: 8.5in;
  height: 11in;
  min-width: 8.5in;
  min-height: 11in;
  background-color: white;
  box-shadow: 1mm 1mm 1mm 0 gray;
  box-sizing: border-box;
  padding: 1in;
}
</style>
