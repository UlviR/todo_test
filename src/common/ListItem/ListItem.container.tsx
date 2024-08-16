import { FC, useEffect, useState } from "react";
import ListItemView from "./ListItem.view";
import { Goal, Task } from "../../types/ListTypes";
import { useTodoStore } from "../../store/TodoStore";

interface ListItemProps {
	item: Goal;
}
const ListItemContainer: FC<ListItemProps> = ({ item }) => {
	const [goal, setGoal] = useState<Goal>(item);
	const editGoal = useTodoStore((store) => store.editGoal);
	const deleteGoal = useTodoStore((store) => store.deleteGoal);
	function statusChanged(task: Task, checked: boolean) {
		setGoal({
			...goal,
			tasks: goal.tasks.map((t) =>
				t.id === task.id ? { ...t, status: checked } : t
			),
		});
	}
	function onDeleteTask(item: Task) {
		setGoal({
			...goal,
			tasks: goal.tasks.filter((e) => e.id !== item.id),
		});
	}
	function onDeleteGoal() {
		console.log("delete goal");
		deleteGoal(goal);
	}
	useEffect(() => {
		editGoal(goal);
	}, [goal]);
	return (
		<ListItemView
			name={goal.name}
			tasks={goal.tasks}
			onStatusChange={statusChanged}
			onDeleteTask={onDeleteTask}
			onDeleteGoal={onDeleteGoal}
		/>
	);
};

export default ListItemContainer;
