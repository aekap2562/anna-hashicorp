import { FC, useEffect, useState } from 'react'
import style from './style.module.css'
import placeHolderImg from '../images/placeHolderImg.png'

export interface Props {
	name?: string
	title?: string
	avatar?: string
	department?: string
}

const Card: FC<Props> = ({ name, title, avatar, department }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	return (
		<div className={style.box}>
			<img
				src={avatar ? avatar : placeHolderImg}
				className={style.personAvatar}
			/>
			<p className={style.personName}>{name}</p>
			<p className={style.personTitle}>{title}</p>
			{windowWidth >= 600 ? (
				<p className={style.personDepartment}>{department}</p>
			) : (
				<></>
			)}
		</div>
	)
}

export default Card
