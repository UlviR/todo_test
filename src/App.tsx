import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./common/MainLayout";
import TodoPage from "./pages/TodoPage";
import { Goal } from "./types/ListTypes";

function App() {
	const tasks = [
		{
			id: "test",
			name: "test",
			tasks: [
				{ name: "taska", status: true, description: "desc" },
				{ name: "taska2", status: false, description: "desc2" },
			],
		},
		{
			id: "test2",
			name: "test2",
			tasks: [
				{ name: "taska23", status: false, description: "desc3" },
				{ name: "taska2", status: true, description: "desc2" },
			],
		},
	];
	return (
		<MainLayout>
			<BrowserRouter>
				<Routes>
					<Route path="/todo" element={<TodoPage />} />
					<Route path="*" element={<Navigate to={"/todo"} replace />} />
				</Routes>
			</BrowserRouter>
		</MainLayout>
	);
}

export default App;
