import { useEffect, useState } from "react";

import Header from "./Header.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import Note from "./Note.jsx";

const Wrapper = () => {
	const apiBaseUrl = "/api/todos";

	const [todos, setTodos] = useState([]);

	const addNewTodoItem = (title) => {
		const createTodoItem = async () => {
			try {
				const res = await fetch(apiBaseUrl, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ title, completed: false }),
				});

				if (!res.ok) {
					throw new Error("Error creating todo entry");
				}
			} catch (err) {
				console.error(err);
			}
		};

		createTodoItem();
	};

	const toggleCompletionStatus = (id, status) => {
		const toggleTodoStatus = async () => {
			try {
				const res = await fetch(`${apiBaseUrl}/${id}`, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ completed: !status }),
				});
			} catch (err) {
				console.error(err);
			}
		};

		toggleTodoStatus();
	};

	const deleteTodoItem = (id) => {
		const deleteTodo = async () => {
			try {
				const res = await fetch(`${apiBaseUrl}/${id}`, {
					method: "DELETE",
				});
			} catch (err) {
				console.error(err);
			}
		};

		deleteTodo();
	};

	useEffect(() => {
		const fetchTodoItems = async () => {
			try {
				const res = await fetch(apiBaseUrl);
				const todoData = await res.json();
				setTodos(todoData);
			} catch (err) {
				console.error(err);
			}
		};
		fetchTodoItems();
	}, [todos]);

	return (
		<div>
			<div className="h-svh">
				<div className="bg-slate-900 h-1/3"></div>
				<div className="h-2/3"></div>
			</div>
			<div className="sm:flex sm:justify-center sm:items-center">
				<main className="py-4 px-2 h-5/6 absolute top-24 w-full sm:w-5/6 lg:w-2/3 xl:w-1/3">
					{/* Header Component goes here */}
					<Header />

					<div className="bg-slate-800 text-gray-100 px-2 py-4 rounded-md h-5/6 relative">
						{/* Todo Form Component goes here */}
						<TodoForm addNewTodoItem={addNewTodoItem} />

						{/* Todo List Component goes here */}
						<TodoList
							todos={todos}
							toggleCompletionStatus={toggleCompletionStatus}
							deleteTodoItem={deleteTodoItem}
						/>

						{/* Todo Note Component goes here */}
						<Note todos={todos} />
					</div>
				</main>
			</div>
		</div>
	);
};
export default Wrapper;
