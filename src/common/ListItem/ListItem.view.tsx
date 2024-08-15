import { Card, Space, Switch } from "antd";
import React, { FC } from "react";
import { Task } from "../../types/ListTypes";
import { SwitchChangeEventHandler } from "antd/es/switch";

interface ListItemViewProps {
	name: string;
	tasks: Task[];
	onStatusChange: (item: Task, checked: boolean) => void;
}

const ListItemView: FC<ListItemViewProps> = ({
	name,
	tasks,
	onStatusChange,
}) => {
	return (
		<div>
			<Card title={name} size="small">
				{tasks.map((elem) => {
					return (
						<Space
							direction="horizontal"
							size="small"
							style={{ display: "flex" }}
						>
							<Switch
								checked={elem.status}
								onChange={(c) => onStatusChange(elem, c)}
							/>
							<div>{elem.name}</div>
						</Space>
					);
				})}
			</Card>
		</div>
	);
};

export default ListItemView;
