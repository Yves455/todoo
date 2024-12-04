const TodoForm = () => {
	return (
		<form className="pb-1 mb-4 border-b-2 border-b-slate-600 shadow-xl">
			<input
				className="border-2 border-slate-600 w-full rounded-full px-4 py-2 text-lg bg-slate-800"
				type="text"
				placeholder="Create a new todo."
			/>
			<p className="text-xs px-4 py-1 text-right text-slate-400 italic">
				Tap 'Enter' to add
			</p>
		</form>
	);
};
export default TodoForm;
