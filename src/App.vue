<template>
  <Toolbar
    @select-parent="selectParent"
    @set-style-property="setStyleProperty"
  />
  <div class="paper-container">
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
  </div>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { useSelectedBoxIdStore } from "./stores/selectedBoxId";
import Box from "./components/Box.vue";
import Paper from "./components/Paper.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  components: {
    Box,
    Paper,
    Toolbar,
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
    setStyleProperty(propertyName: string, value: any) {
      if (!this.selectedBoxElement) {
        return;
      }
      this.selectedBoxElement.style.setProperty(propertyName, value);
    },
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
