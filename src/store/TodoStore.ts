import { create } from "zustand";
import { Goal } from "../types/ListTypes";

interface TodoStoreType {
	goals: Goal[];
	addGoal: (goal: Goal) => void;
	editGoal: (goal: Goal) => void;
}

export const useTodoStore = create<TodoStoreType>()((set) => ({
	goals: [
		{
			id: "test",
			name: "test",
			tasks: [
				{ id: 1, name: "taska", status: true, description: "desc" },
				{ id: 2, name: "taska2", status: false, description: "desc2" },
			],
		},
		{
			id: "test2",
			name: "test2",
			tasks: [
				{ id: 1, name: "taska23", status: false, description: "desc3" },
				{ id: 2, name: "taska2", status: true, description: "desc2" },
			],
		},
	],
	addGoal: (goal: Goal) =>
		set((state) => ({
			goals: [...state.goals, goal],
		})),
	editGoal: (goal: Goal) =>
		set((state) => ({
			goals: state.goals.map((x) => (x.id === goal.id ? goal : x)),
		})),
}));
