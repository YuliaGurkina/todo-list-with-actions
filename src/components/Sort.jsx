import styles from './../app.module.css';

export const Sort = ({ isSort, onClick }) => {
	return (
		<span
			className={styles.sort + ' ' + (isSort ? styles.active : '')}
			onClick={onClick}
		>
			Сортировка по алфавиту
			<i className={styles.arrow}></i>
		</span>
	);
};
