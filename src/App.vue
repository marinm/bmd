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
    selectedBoxElement() {
      return document.querySelector(
        `[data-box-id="${this.selectedBoxIdStore.boxId}"]`,
      ) as HTMLElement;
    },
    parentBoxElement() {
      if (!this.selectedBoxElement) {
        return null;
      }
      const parentBoxDiv =
        this.selectedBoxElement.parentElement?.closest("[data-box-id]") ?? null;
      return parentBoxDiv as HTMLElement;
    },
  },
  methods: {
    selectParent() {
      this.selectedBoxIdStore.set(this.parentBoxElement?.dataset.boxId ?? "");
    },
    onKeyUp(event: KeyboardEvent) {
      switch (event.key) {
        case "Shift":
          this.selectParent();
          break;
        case "c":
          this.setStyleProperty("flex-direction", "column");
          break;
        case "r":
          this.setStyleProperty("flex-direction", "row");
          break;
      }
    },
    setStyleProperty(propertyName: string, value: any) {
      if (!this.selectedBoxElement) {
        return;
      }
      this.selectedBoxElement.style.setProperty(propertyName, value);
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
