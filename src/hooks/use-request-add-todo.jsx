import { useState } from 'react';

export const useRequestAddTodo = (setTodos) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodo = () => {
		setIsCreating(true);

		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: 'One more todo',
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((newTodo) => {
				console.log('Tofo добавлен, ответ сервера:', newTodo);
				setTodos((prevTodos) => [...prevTodos, newTodo]);
			})
			.finally(() => setIsCreating(false));
	};

	return { requestAddTodo, isCreating };
};
