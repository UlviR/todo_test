export interface Task {
  id:number;
	name: string;
	description: string;
	status: boolean;
}

export interface Goal {
	id: string;
	name: string;
	tasks: Task[];
}
