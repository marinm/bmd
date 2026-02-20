<template>
  <Toolbar />
  <div class="paper-container">
    <Paper>
      <Box :box-node="rootBoxNode" />
    </Paper>
  </div>
</template>

<script lang="ts">
import Box from "./components/Box.vue";
import Paper from "./components/Paper.vue";
import Toolbar from "./components/Toolbar.vue";
import type { BoxNode } from "./types/BoxNode";

function newBoxNode(children: BoxNode[]) {
  return {
    boxId: crypto.randomUUID(),
    style: {},
    children: children,
  };
}

export default {
  components: {
    Box,
    Paper,
    Toolbar,
  },
  data() {
    return {
      rootBoxNode: newBoxNode([
        newBoxNode([
          newBoxNode([
            newBoxNode([newBoxNode([]), newBoxNode([]), newBoxNode([])]),
            newBoxNode([]),
            newBoxNode([]),
          ]),
          newBoxNode([]),
          newBoxNode([]),
        ]),
        newBoxNode([]),
        newBoxNode([]),
      ]),
    };
  },
};
</script>

<style scoped>
.paper-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.3in;
  box-sizing: border-box;
}
</style>
