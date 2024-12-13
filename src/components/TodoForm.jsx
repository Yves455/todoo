import { useState } from "react";

const TodoForm = ({ addNewTodoItem }) => {
	const [todoItem, setTodoItem] = useState("");

	const handleTodoItemChange = (e) => {
		setTodoItem(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && todoItem.trim()) {
			e.preventDefault();
			addNewTodoItem(todoItem);
			setTodoItem("");
		}
	};

	return (
		<form className="pb-1 mb-4 border-b-2 border-b-gray-300 dark:border-b-gray-700 shadow-md">
			<input
				className="border-2 border-gray-300 text-gray-700 dark:text-gray-100 w-full rounded-full px-4 py-2 text-lg bg-white dark:bg-slate-800 dark:border-slate-600"
				type="text"
				placeholder="Create a new todo."
				value={todoItem}
				onChange={handleTodoItemChange}
				onKeyDown={handleKeyDown}
			/>
			<p className="text-xs px-4 py-1 text-right text-slate-400 italic">
				Tap 'Enter' to add
			</p>
		</form>
	);
};
export default TodoForm;
