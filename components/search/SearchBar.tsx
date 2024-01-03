import style from './style.module.css'

export interface Props {
	searchValue: string
	handleInputChange: () => void
}

const SearchBar = ({ searchValue, handleInputChange }) => {
	return (
		<>
			<div className={style.searchBar}>
				<input
					type="text"
					className={style.inputField}
					placeholder="&#128269; Search people by name (case sensitive)"
					value={searchValue}
					onChange={handleInputChange}
				/>
			</div>
		</>
	)
}

export default SearchBar
