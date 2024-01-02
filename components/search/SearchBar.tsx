import style from './style.module.css'

export interface Props {
	searchValue: string
	handleInputChange: () => void
}

const SearchBar = ({ searchValue, handleInputChange }) => {
	return (
		<>
			<div className={style.searchBar}>
				<span>&#128269;</span>
				<input
					type="text"
					className={style.inputField}
					placeholder="Search people by name (case sensitive)"
					value={searchValue}
					onChange={handleInputChange}
				/>
			</div>
		</>
	)
}

export default SearchBar
