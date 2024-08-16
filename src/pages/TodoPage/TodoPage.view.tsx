import { Button } from "antd";
import TodoList from "../../common/TodoLIst";
import { PlusOutlined } from "@ant-design/icons";
import AddGoalForm from "../../common/AddGoalForm";
import { FC, useState } from "react";

const TodoPageView: FC = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<div>
				<Button shape="round" onClick={() => setShowModal(true)}>
					<PlusOutlined />
				</Button>
			</div>

			<AddGoalForm
				isModalOpen={showModal}
				handleClose={() => setShowModal(false)}
			/>

			<TodoList />
		</div>
	);
};

export default TodoPageView;
