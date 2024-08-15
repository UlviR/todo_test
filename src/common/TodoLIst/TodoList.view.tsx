import React, { FC } from "react";
import { ListItem } from "../ListItem";
import { Goal } from "../../types/ListTypes";

interface TodolistViewProps {
	items: Goal[];
}

const TodoListView: FC<TodolistViewProps> = ({ items }) => {
	return (
		<div>
			{items.map((item) => {
				return <ListItem item={item} />;
			})}
		</div>
	);
};

export default TodoListView;
