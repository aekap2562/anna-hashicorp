import classNames from 'classnames'
import style from './style.module.css'
import { FC, useState } from 'react'
import { Props } from './DepartmentFilter'

const DepartmentFilterContent: FC<Props> = ({ allDepartments }) => {
	const [openDepartment, setOpenDepartment] = useState([])

	const toggleDepartment = (name) => {
		setOpenDepartment((prevOpenDepartments) => {
			const isOpen = prevOpenDepartments.includes(name)
			return isOpen
				? prevOpenDepartments.filter((deptName) => deptName !== name)
				: [...prevOpenDepartments, name]
		})
	}

	//TODO (AK 01/02/2024): get rid of children that are duplicates
	const renderDepartments = (deptList) => {
		return (
			<ul className={classNames(style.node)}>
				{deptList.map((department) => (
					<li key={department.name}>
						<span
							className={classNames(style.caret, {
								[style.hiddenCaret]: !department.children.length,
								[style.expandedCaret]: openDepartment.includes(department.name),
							})}
							onClick={() => toggleDepartment(department.name)}
						></span>
						<button className={classNames(style.departmentButton)}>
							{department.name}
						</button>
						{openDepartment.includes(department.name) &&
							department.children.length > 0 && (
								<ul className={classNames(style.node, style.subBranch)}>
									{renderDepartments(department.children)}
								</ul>
							)}
					</li>
				))}
			</ul>
		)
	}

	return (
		<>
			<div>{renderDepartments(allDepartments)}</div>
		</>
	)
}

export default DepartmentFilterContent
