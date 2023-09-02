import ToDoItem from './ToDoItem';

export default function ToDoList() {

	const todos: string[] = ["Buy groceries", "Clean the house", "Walk the dog"]

	return (
		<>
			<h2>To-Do List</h2>
			<ul className="list-group">
				{todos.map((todo, index) => <ToDoItem index={index} value={todo}/>)}
			</ul>
		</>
	)
}

