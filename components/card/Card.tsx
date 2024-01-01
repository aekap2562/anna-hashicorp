import { FC } from 'react'
import style from './style.module.css'

export interface Props {
	name?: string
	title?: string
	avatar?: string
	department?: string
}

const Card: FC<Props> = ({ name, title, avatar, department }) => {
	return (
		<div className={style.box}>
			<img
				src={avatar ? avatar : 'placeholder avatar'}
				className={style.personAvatar}
			/>
			<p className={style.personName}>{name}</p>
			<p className={style.personTitle}>{title}</p>
			<p className={style.personDepartment}>{department}</p>
		</div>
	)
}

export default Card
