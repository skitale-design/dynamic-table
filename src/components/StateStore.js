import { ref, reactive } from "vue";
export const state = {
  summCol: reactive({ hidden: false }),
  mainCol: reactive({ hidden: false }),
  fontWeight: reactive({ bool: false, weight: "bold" }),
  currentId: reactive({ id: null }),
  RenderedSystemIds: ref([]),
};
