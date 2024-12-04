import Header from "./Header.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import Note from "./Note.jsx";

const Container = () => {
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
						<TodoForm />

						{/* Todo List Component goes here */}
						<TodoList />

						{/* Todo Note Component goes here */}
						<Note />
					</div>
				</main>
			</div>
		</div>
	);
};
export default Container;
