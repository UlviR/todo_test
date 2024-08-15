import { FC } from "react";
import TodoListView from "./TodoList.view";
import { useTodoStore } from "../../store/TodoStore";

const TodoListContainer: FC = () => {
	const goals = useTodoStore((store) => store.goals);
	return <TodoListView items={goals} />;
};

export default TodoListContainer;
