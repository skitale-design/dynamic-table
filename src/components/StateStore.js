import { reactive } from "vue";
export const state = reactive({
  summCol: { hidden: false },
  mainCol: { hidden: false },
  fontColor: { red: false, color: "blue" },
  currentId: { id: null },
});
