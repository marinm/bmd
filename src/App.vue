<template>
  <Paper>
    <Box>
      <Box>
        <Box>
          <Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Box>
          <Box></Box>
          <Box></Box>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
      <Box></Box>
      <Box></Box>
    </Box>
  </Paper>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { useSelectedBoxIdStore } from "./stores/selectedBoxId";
import Box from "./components/Box.vue";
import Paper from "./components/Paper.vue";

export default {
  components: {
    Box,
    Paper,
  },
  computed: {
    ...mapStores(useSelectedBoxIdStore),
    selectedBoxDiv() {
      return document.querySelector(
        `[data-box-id="${this.selectedBoxIdStore.boxId}"]`,
      );
    },
  },
  methods: {
    selectParent() {
      const parentBoxDiv =
        this.selectedBoxDiv?.parentElement?.closest("[data-box-id]") ?? null;
      if (parentBoxDiv) {
        this.selectedBoxIdStore.set(parentBoxDiv?.dataset.boxId ?? "");
      }
    },
    onKeyUp(event: KeyboardEvent) {
      if (event.key === "Shift") {
        this.selectParent();
      }
    },
  },
  mounted() {
    window.addEventListener("keyup", this.onKeyUp);
  },
  unmounted() {
    window.removeEventListener("keyup", this.onKeyUp);
  },
};
</script>
