import { BsFillTrash3Fill } from "react-icons/bs";

const TodoItem = ({ todo, toggleCompletionStatus, deleteTodoItem }) => {
	return (
		<div className="border-slate-600 border-2 flex gap-2 px-4 py-1 rounded-lg text-sm">
			<input
				onChange={() => toggleCompletionStatus(todo.id, todo.completed)}
				type="checkbox"
				name="completed"
				id="completed"
				checked={todo.completed ? true : false}
			/>
			<span className={`flex justify-between w-full items-center`}>
				{todo.title}
				<BsFillTrash3Fill
					className="cursor-pointer hover:text-gray-400"
					onClick={() => deleteTodoItem(todo.id)}
				/>
			</span>
		</div>
	);
};
export default TodoItem;
