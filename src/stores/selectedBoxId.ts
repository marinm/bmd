import { defineStore } from "pinia";

export const useSelectedBoxIdStore = defineStore("selectedBoxId", {
  state: () => {
    return { boxId: "", spellcheck: false };
  },
  actions: {
    set(boxId: string) {
      this.boxId = boxId;
    },
    setSpellcheck(value: boolean) {
      this.spellcheck = value;
    },
  },
});
