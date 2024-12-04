import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
	const todos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	return (
		<div className="flex flex-col gap-2 h-2/3 overflow-y-auto pr-2">
			{todos.map((todo) => (
				<TodoItem key={todo} />
			))}
		</div>
	);
};
export default TodoList;
