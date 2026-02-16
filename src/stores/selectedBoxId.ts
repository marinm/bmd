import { defineStore } from "pinia";

export const useSelectedBoxIdStore = defineStore("selectedBoxId", {
  state: () => {
    return { boxId: "" };
  },
  actions: {
    set(boxId: string) {
      this.boxId = boxId;
    },
  },
});
