import { defineStore } from "pinia";

export const useSelectedBoxIdStore = defineStore("selectedBoxId", {
  state: () => {
    return { boxId: "", spellcheck: false, showBoxOutline: true };
  },
  actions: {
    set(boxId: string) {
      this.boxId = boxId;
    },
    setSpellcheck(value: boolean) {
      this.spellcheck = value;
    },
    setShowBoxOutline(value: boolean) {
      this.showBoxOutline = value;
    },
  },
});
