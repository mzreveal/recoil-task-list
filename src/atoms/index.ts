import { atom, RecoilState } from "recoil";

export const ongoingTasksAtom: RecoilState<string[]> = atom({
  key: "ongoingTasksAtom",
  default: ["Task 1", "Task 2"],
});

export const completedTasksAtom: RecoilState<string[]> = atom({
  key: "completedTasksAtom",
  default: ["Completed Task 1", "Completed Task 2"],
});

export const textInputAtom = atom({
  key: "textInputAtom",
  default: "",
});

// FIXME: create selector for number of ongoing tasks
// FIXME: create selector for length of completed tasks
