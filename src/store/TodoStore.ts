import { create } from "zustand";
import { Goal } from "../types/ListTypes";

interface TodoStoreType {
	goals: Goal[];
	addGoal: (goal: Goal) => void;
	editGoal: (goal: Goal) => void;
	deleteGoal: (goal: Goal) => void;
}

export const useTodoStore = create<TodoStoreType>()((set) => ({
	goals: [
		{
			id: "1",
			name: "Make a repair",
			tasks: [
				{ id: 1, name: "Buy building materials", status: true },
				{ id: 2, name: "Call to worker", status: false },
			],
		},
		{
			id: "2",
			name: "Shopping list",
			tasks: [
				{ id: 1, name: "Mealons", status: false },
				{ id: 2, name: "Pineapples", status: true },
				{ id: 2, name: "Bananas", status: true },
			],
		},
		{
			id: "3",
			name: "List of books to read",
			tasks: [
				{ id: 1, name: "Le Petit Prince", status: true },
				{ id: 2, name: "A Scandal in Bohemia", status: false },
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
	deleteGoal: (goal: Goal) =>
		set((state) => ({
			goals: state.goals.filter((x) => x.id !== goal.id),
		})),
}));
