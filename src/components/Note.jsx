const Note = ({ todos }) => {
	const todosCount = todos.length;
	const completedTodosCount = todos.filter(
		(todo) => todo.completed === true
	).length;

	return (
		<div>
			<p className="mt-8 text-right text-slate-400 absolute bottom-4 right-4">
				{completedTodosCount}/{todosCount} todos completed
			</p>
		</div>
	);
};
export default Note;
