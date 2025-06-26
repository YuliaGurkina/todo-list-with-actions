import { useState } from 'react';

export const useRequestUpdateLastTodo = (setTodos, todos) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateLastTodo = () => {
		setIsUpdating(true);
		const maxId = Math.max(...todos.map((todo) => todo.id));
		fetch(`http://localhost:3000/todos/${maxId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: true,
			}),
		})
			.then((response) => response.json())
			.then((updatedTodo) => {
				setTodos((prevTodos) =>
					prevTodos.map((todo) =>
						todo.id === updatedTodo.id ? updatedTodo : todo,
					),
				);
			})
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateLastTodo, isUpdating };
};
