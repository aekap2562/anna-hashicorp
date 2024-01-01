import style from './style.module.css'

const SearchBar = () => {
	return (
		<>
			<div className={style.searchBar}>
				<span>&#128269;</span>
				<input
					type="text"
					className={style.inputField}
					placeholder="Search people by name"
				/>
			</div>
		</>
	)
}

export default SearchBar
