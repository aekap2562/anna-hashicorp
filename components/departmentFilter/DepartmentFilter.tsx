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

const DepartmentFilter: FC<Props> = ({ name, title, avatar, department }) => {
	return (
		<div>
			<p className={style.filterDepartmentTitle}>Filter By Department</p>
		</div>
	)
}

export default DepartmentFilter
