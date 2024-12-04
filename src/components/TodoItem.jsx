const TodoItem = () => {
	return (
		<div className="border-slate-600 border-2 flex gap-2 px-4 py-1 rounded-lg text-sm">
			<input checked type="checkbox" name="completed" id="completed" />
			<span>Schedule a dentist appointment</span>
		</div>
	);
};
export default TodoItem;
