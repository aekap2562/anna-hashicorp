import { FC, useEffect, useState } from 'react'
import style from './style.module.css'
import placeHolderImg from '../images/placeHolderImg.png'
import useMediaQuery from 'components/shared/useMediaQuery'

export interface Props {
	name?: string
	title?: string
	avatar?: string
	department?: string
}

const Card: FC<Props> = ({ name, title, avatar, department }) => {
	const isMobile = useMediaQuery('(max-width: 600px')
	return (
		<div className={style.box}>
			<img
				src={avatar ? avatar : placeHolderImg}
				className={style.personAvatar}
			/>
			<p className={style.personName}>{name}</p>
			<p className={style.personTitle}>{title}</p>
			{!isMobile ? (
				<p className={style.personDepartment}>{department}</p>
			) : (
				<></>
			)}
		</div>
	)
}

export default Card
