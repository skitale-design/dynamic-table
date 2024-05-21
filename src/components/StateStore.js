import { reactive } from "vue";
export const state = reactive({
  summCol: { hidden: false },
  mainCol: { hidden: false },
  fontWeight: { bool: false, weight: "bold" },
  currentId: { id: null },
});
