import style from './style.module.css'
import DepartmentFilterContent from './DepartmentFilterContent'
import { DepartmentRecord } from 'types'
import { FC } from 'react'

export interface Props {
	allDepartments: DepartmentRecord[]
}

const DepartmentFilter: FC<Props> = ({ allDepartments }) => {
	return (
		<div>
			<p className={style.filterDepartmentTitle}>Filter By Department</p>
			<DepartmentFilterContent allDepartments={allDepartments} />
		</div>
	)
}

export default DepartmentFilter
