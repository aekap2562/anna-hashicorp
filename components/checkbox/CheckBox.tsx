import { FC, useState } from 'react'
import style from './style.module.css'

export interface Props {
	imageFilter: boolean
	handleClick: () => void
}

const CheckBox: FC<Props> = ({ imageFilter, handleClick }) => {
	return (
		<div className={style.checkBoxWithLabel}>
			<input
				type="checkbox"
				className={style.checkBox}
				onChange={() => handleClick()}
				id="filterImage"
				name="filterImage"
				checked={imageFilter}
			/>
			<label>&nbsp; Hide people missing a profile image</label>
		</div>
	)
}

export default CheckBox
