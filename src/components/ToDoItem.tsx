import { useState } from 'react';

interface ItemProp {
	index: number;
	value: string;
}

export default function ToDoItem(prop: ItemProp) {
	const [done, setDone] = useState<boolean>(false)
	function handleClick() {
		setDone(!done);
	}

	return (
		<>
			<li key={prop.index} onClick={() => handleClick()} className={`list-group-item ${done ? 'active' : ''} `}>{prop.value}</li>
		</>
	)
}

