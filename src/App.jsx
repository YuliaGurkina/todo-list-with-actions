import styles from './app.module.css';
import {
	useRequestAddTodo,
	useRequestUpdateLastTodo,
	useRequestDeleteFirstTodo,
	useRequestGetTodos,
	useSearchTodo,
	useSortTodo,
} from './hooks';
import { ButtonsPanel } from './components/buttonsPanel';
import { Search } from './components/Search';
import { Sort } from './components/Sort';

export const App = () => {
	const { todos, setTodos, isLoading } = useRequestGetTodos();
	const { requestAddTodo, isCreating } = useRequestAddTodo(setTodos);
	const { requestUpdateLastTodo, isUpdating } = useRequestUpdateLastTodo(
		setTodos,
		todos,
	);
	const { requestDeleteFirstTodo, isDeleting } = useRequestDeleteFirstTodo(
		setTodos,
		todos,
	);
	const { filteredTodos, setFilteredTodos, searchTerm, setSearchTerm } = useSearchTodo({
		todos,
	});
	const { setIsSort, isSort } = useSortTodo({ filteredTodos, setFilteredTodos });

	const handleLabelClick = () => {
		console.log('Click checkbox');
	};

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchClick = () => {
		setIsSort((prevValue) => {
			const newValue = !prevValue;
			return newValue;
		});
	};

	return (
		<div className={styles.app}>
			<h1>Todo list with JSON Server</h1>
			<div className={styles.actions}>
				<ButtonsPanel
					isCreating={isCreating}
					requestAddTodo={requestAddTodo}
					isUpdating={isUpdating}
					requestUpdateLastTodo={requestUpdateLastTodo}
					isDeleting={isDeleting}
					requestDeleteFirstTodo={requestDeleteFirstTodo}
				/>
				<br />
				<Search value={searchTerm} onChange={handleInputChange} />
			</div>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<div className={styles['todos-container']}>
					<Sort isSort={isSort} onClick={handleSearchClick} />
					{filteredTodos.map(({ id, title, completed }) => (
						<div key={id} className={styles['todo-item']}>
							<input
								type="checkbox"
								name={`todo-${id}`}
								id={`todo-${id}`}
								checked={completed}
								onChange={() => {}}
								hidden
							/>
							<label htmlFor={`todo-${id}`} onClick={handleLabelClick}>
								<span className={styles.checkmark}></span>
							</label>
							{title}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
