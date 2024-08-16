import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./common/MainLayout";
import TodoPage from "./pages/TodoPage";

function App() {
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
