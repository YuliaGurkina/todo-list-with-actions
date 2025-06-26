import styles from './../app.module.css';

export const SearchLayout = ({ value, onChange }) => {
	return (
		<input
			type="text"
			className={styles.search}
			placeholder="Search todo..."
			value={value}
			onChange={onChange}
		/>
	);
};
