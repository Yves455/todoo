import TodoItem from "./TodoItem.jsx";

import cloudImg from "../assets/cloud.png";

const TodoList = ({ todos, toggleCompletionStatus, deleteTodoItem }) => {
	return (
		<div className="flex flex-col gap-2 h-2/3 overflow-y-auto pr-2">
			{todos && todos.length > 0 ? (
				<>
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							toggleCompletionStatus={toggleCompletionStatus}
							deleteTodoItem={deleteTodoItem}
						/>
					))}
				</>
			) : (
				<>
					<img
						className="w-48 mx-auto opacity-25 dark:opacity-10 mt-8 mb-0"
						src={cloudImg}
						alt="No Todos"
					/>
					<p className="italic text-slate-400 text-center">
						No todos available! Add some.
					</p>
				</>
			)}
		</div>
	);
};
export default TodoList;
