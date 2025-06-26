import { useState } from 'react';

export const useRequestDeleteFirstTodo = (setTodos, todos) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteFirstTodo = () => {
		setIsDeleting(true);
		const minId = Math.min(...todos.map((todo) => todo.id));
		fetch(`http://localhost:3000/todos/${minId}`, {
			method: 'DELETE',
		})
			.then(() => {
				setTodos((prevProducts) =>
					prevProducts.filter((product) => product.id !== minId),
				);
			})
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteFirstTodo, isDeleting };
};
