<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-grow: 1;
  outline: 1px solid blue;
}
</style>
