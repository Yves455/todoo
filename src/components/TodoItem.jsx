import { BsFillTrash3Fill } from "react-icons/bs";

const TodoItem = ({ todo, toggleCompletionStatus, deleteTodoItem }) => {
	return (
		<div className="border-slate-300 border-2 flex gap-2 px-4 py-1 rounded-lg text-sm dark:border-gray-700">
			<input
				onChange={() => toggleCompletionStatus(todo.id, todo.completed)}
				type="checkbox"
				name="completed"
				id="completed"
				checked={todo.completed ? true : false}
			/>
			<span
				className={`flex justify-between w-full items-center text-gray-500 dark:text-gray-200 ${
					todo.completed ? "text-gray-900 dark:text-gray-400" : ""
				}`}
			>
				{todo.title}
				<BsFillTrash3Fill
					className="cursor-pointer text-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
					onClick={() => deleteTodoItem(todo.id)}
				/>
			</span>
		</div>
	);
};
export default TodoItem;
