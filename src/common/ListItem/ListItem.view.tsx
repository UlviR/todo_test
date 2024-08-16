import { Button, Card, Checkbox, Space } from "antd";
import { FC } from "react";
import { Task } from "../../types/ListTypes";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./ListItem.module.css";

interface ListItemViewProps {
	name: string;
	tasks: Task[];
	onStatusChange: (item: Task, checked: boolean) => void;
	onDeleteTask: (item: Task) => void;
	onDeleteGoal: () => void;
}

const ListItemView: FC<ListItemViewProps> = ({
	name,
	tasks,
	onStatusChange,
	onDeleteGoal,
	onDeleteTask,
}) => {
	return (
		<Card
			title={name}
			size="small"
			style={{ margin: "10px", maxWidth: "100%" }}
			extra={
				<span>
					<Button shape="round" onClick={onDeleteGoal}>
						<DeleteOutlined />
					</Button>
				</span>
			}
		>
			{tasks.map((elem) => {
				return (
					<Space
						key={elem.id}
						direction="horizontal"
						size="middle"
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "3px",
						}}
					>
						<Checkbox
							checked={elem.status}
							onChange={(c) => onStatusChange(elem, c.target.checked)}
						/>
						<div
							style={{
								wordBreak: "normal",
								// textDecorationLine: "line-through",
							}}
							className={elem.status ? styles.line_through : styles.normal}
						>
							{elem.name}
						</div>
						<span>
							<Button
								size="small"
								children="Delete"
								onClick={() => onDeleteTask(elem)}
							/>
						</span>
					</Space>
				);
			})}
		</Card>
	);
};

export default ListItemView;
