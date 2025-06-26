import { useEffect, useState } from 'react';

export const useSearchTodo = ({ todos }) => {
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const results = todos.filter((todo) =>
			todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		setFilteredTodos(results);
	}, [searchTerm, todos]);

	return { filteredTodos, setFilteredTodos, searchTerm, setSearchTerm };
};
