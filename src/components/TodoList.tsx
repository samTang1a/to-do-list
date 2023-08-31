import { useState } from 'react';

export default function ToDoList() {

	const [doneIndex, setDoneIndex] = useState<number | null>(null)
	function handleClick(index: number){
		// setDoneIndex(index)
		setDoneIndex(index === doneIndex ? null : index);
	}

	const todos: string[] = ["Buy groceries", "Clean the house", "Walk the dog"]

	return (
		<>
			<h2>To-Do List</h2>
			<ul className="list-group">
				{todos.length > 0 ? (todos.map((todo, index) => <li key={index} onClick={()=>handleClick(index)} className={`list-group-item ${doneIndex === index ? 'active' : ''} `}>{todo}</li>)) : (<li className="list-group-item">No item</li>)}
			</ul>
		</>
	)
}

