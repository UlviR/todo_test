export interface Task {
	id: number;
	name: string;
	status: boolean;
}

export interface Goal {
	id: string;
	name: string;
	tasks: Task[];
}

export interface FormValues {
	goal: string;
	tasks: string[];
}
