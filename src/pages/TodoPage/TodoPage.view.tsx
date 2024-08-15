import { create } from "zustand";
import ListItem from "../../common/ListItem/ListItem.view";
import TodoList from "../../common/TodoLIst";
import { Goal } from "../../types/ListTypes";



const TodoPageView = () => {
	return (
		<div>
			<TodoList />
		</div>
	);
};

export default TodoPageView;
