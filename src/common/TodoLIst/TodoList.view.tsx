import { FC } from "react";
import { ListItem } from "../ListItem";
import { Goal } from "../../types/ListTypes";

interface TodolistViewProps {
	items: Goal[];
}

const TodoListView: FC<TodolistViewProps> = ({ items }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				flexWrap: "wrap",
			}}
		>
			{items.map((item) => {
				return <ListItem item={item} key={item.id} />;
			})}
		</div>
	);
};

export default TodoListView;
