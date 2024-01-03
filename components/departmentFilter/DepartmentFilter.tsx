import style from './style.module.css'
import DepartmentFilterContent from './DepartmentFilterContent'

const DepartmentFilter = () => {
	return (
		<div>
			<p className={style.filterDepartmentTitle}>Filter By Department</p>
			<DepartmentFilterContent />
		</div>
	)
}

export default DepartmentFilter
