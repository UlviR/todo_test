import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, Button, Form, FormInstance, Modal } from "antd";
import { FC } from "react";

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 4 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 20 },
	},
};

const formItemLayoutWithOutLabel = {
	wrapperCol: {
		xs: { span: 24, offset: 0 },
		sm: { span: 20, offset: 4 },
	},
};

interface AddGoalFormViewProps {
	cancelModal: () => void;
	submitModal: (values) => void;
	isModalOpen: boolean;
	form: FormInstance;
}

const AddGoalFormView: FC<AddGoalFormViewProps> = ({
	cancelModal,
	submitModal,
	isModalOpen,
	form,
}) => {
	return (
		<Modal open={isModalOpen} onCancel={cancelModal} onOk={form.submit}>
			<Form
				name="dynamic_form_item"
				{...formItemLayoutWithOutLabel}
				onFinish={submitModal}
				style={{ maxWidth: 600 }}
				form={form}
			>
				<Form.Item
					validateTrigger={["onChange", "onBlur"]}
					name="goal"
					rules={[
						{
							required: true,
							whitespace: true,
							message: "Please input the goal name",
						},
					]}
					noStyle
				>
					<Input
						placeholder="Please input the goal name"
						style={{ width: "60%" }}
					/>
				</Form.Item>
				<Form.List
					name="tasks"
					rules={[
						{
							validator: async (_, names) => {
								if (!names || names.length < 1) {
									return Promise.reject(new Error("At least 1 task"));
								}
							},
						},
					]}
				>
					{(fields, { add, remove }, { errors }) => (
						<>
							{fields.map((field, index) => (
								<Form.Item
									{...(index === 0
										? formItemLayout
										: formItemLayoutWithOutLabel)}
									label={index === 0 ? "Passengers" : ""}
									required={false}
									key={field.key}
								>
									<Form.Item
										{...field}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Please input task name or delete this field.",
											},
										]}
										noStyle
									>
										<Input placeholder="task name" style={{ width: "60%" }} />
									</Form.Item>
									{fields.length > 1 ? (
										<MinusCircleOutlined
											className="dynamic-delete-button"
											onClick={() => remove(field.name)}
										/>
									) : null}
								</Form.Item>
							))}
							<Form.Item>
								<Button
									type="dashed"
									onClick={() => add()}
									style={{ width: "60%" }}
									icon={<PlusOutlined />}
								>
									Add task
								</Button>
								<Form.ErrorList errors={errors} />
							</Form.Item>
						</>
					)}
				</Form.List>
			</Form>
		</Modal>
	);
};

export default AddGoalFormView;
