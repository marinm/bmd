import { defineStore } from "pinia";

export const useSheetStore = defineStore("sheet", {
  state: () => {
    return { children: [], showBoxOutline: true };
  },
  actions: {
    setChildren(children: any) {
      this.children = children;
    },
    setShowBoxOutline(value: boolean) {
      this.showBoxOutline = value;
    },
  },
});
