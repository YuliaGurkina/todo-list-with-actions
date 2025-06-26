import styles from './../app.module.css';

export const ButtonsPanel = ({
	isCreating,
	requestAddTodo,
	isUpdating,
	requestUpdateLastTodo,
	isDeleting,
	requestDeleteFirstTodo,
}) => {
	return (
		<>
			<button
				className={styles.button}
				disabled={isCreating}
				onClick={requestAddTodo}
			>
				Добавить todo
			</button>
			<button
				className={styles.button}
				disabled={isUpdating}
				onClick={requestUpdateLastTodo}
			>
				Чекнуть last todo
			</button>
			<button
				className={styles.button}
				disabled={isDeleting}
				onClick={requestDeleteFirstTodo}
			>
				Удалить first todo
			</button>
		</>
	);
};
