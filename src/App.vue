<template>
  <Toolbar
    @select-parent="selectParent"
    @set-style-property="setStyleProperty"
  />
  <div class="paper-container">
    <Paper>
      <Box :children="children" />
    </Paper>
  </div>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { useSelectedBoxIdStore } from "./stores/selectedBoxId";
import Box from "./components/Box.vue";
import Paper from "./components/Paper.vue";
import Toolbar from "./components/Toolbar.vue";

type BoxStructure = {
  boxId: string;
  children: BoxStructure[];
};

function newBox(children: BoxStructure[]) {
  return {
    boxId: crypto.randomUUID(),
    children: children,
  };
}

function defaultChildren() {
  return [
    newBox([
      newBox([
        newBox([
          newBox([newBox([]), newBox([]), newBox([])]),
          newBox([]),
          newBox([]),
        ]),
        newBox([]),
        newBox([]),
      ]),
      newBox([]),
      newBox([]),
    ]),
  ];
}

export default {
  components: {
    Box,
    Paper,
    Toolbar,
  },
  data() {
    return {
      children: defaultChildren(),
    };
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
  mounted() {
    document.addEventListener("keyup", this.onKeyUp);
  },
  methods: {
    selectParent() {
      this.selectedBoxIdStore.set(this.parentBoxElement?.dataset.boxId ?? "");
    },
    selectNone() {
      this.selectedBoxIdStore.set("");
    },
    setStyleProperty(propertyName: string, value: any) {
      if (!this.selectedBoxElement) {
        return;
      }
      this.selectedBoxElement.style.setProperty(propertyName, value);
    },
    onKeyUp(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          this.selectNone();
          break;
      }
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
