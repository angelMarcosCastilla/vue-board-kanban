import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      board: [
        { id: 1, name: "Board 1" },
        { id: 2, name: "Board 2" },
        { id: 3, name: "Board 3" },
      ],
    };
  },
});
