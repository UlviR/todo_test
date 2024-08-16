import { FC } from "react";
import AddGoalFormView from "./AddGoalForm.view";
import { useForm } from "antd/es/form/Form";
import { FormValues, Goal, Task } from "../../types/ListTypes";
import { useTodoStore } from "../../store/TodoStore";

interface AddGoalFormContainerProps {
	isModalOpen: boolean;
	handleClose: () => void;
}

const AddGoalFormContainer: FC<AddGoalFormContainerProps> = ({
	isModalOpen,
	handleClose,
}) => {
	const [form] = useForm();
	const addGoal = useTodoStore((store) => store.addGoal);
	const handleOk = (values: FormValues) => {
		console.log(values);
		if (values["goal"] !== undefined) {
			form.submit();
			console.log("submit");
			addNewGoal(values);
			handleClose();
			form.resetFields();
		}
	};
	function addNewGoal(values: FormValues) {
		const goall: Goal = {
			id: (new Date().getTime() / 1000).toString(),
			name: values["goal"],
			tasks: values["tasks"].map(
				(task: string, i) =>
					({
						id: new Date().getTime() / 1000 + i,
						name: task,
						status: false,
					} as Task)
			),
		};
		console.log(goall);
		addGoal(goall);
	}
	const handleCancel = () => {
		handleClose();
		console.log("close");
	};
	return (
		<AddGoalFormView
			cancelModal={handleCancel}
			submitModal={handleOk}
			isModalOpen={isModalOpen}
			form={form}
		/>
	);
};

export default AddGoalFormContainer;
