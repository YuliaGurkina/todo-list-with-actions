import { useState, useEffect } from 'react';

export const useSortTodo = ({ filteredTodos, setFilteredTodos }) => {
	const [isSort, setIsSort] = useState(false);

	useEffect(() => {
		const sortedItems = [...filteredTodos].sort((a, b) => {
			return a.title.localeCompare(b.name);
		});
		setFilteredTodos(sortedItems);
	}, [isSort]);

	return { isSort, setIsSort };
};
