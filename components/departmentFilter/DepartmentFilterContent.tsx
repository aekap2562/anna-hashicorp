import classNames from 'classnames'
import style from './style.module.css'

export default function DepartmentTree() {
	return (
		<ul className={classNames(style.node)}>
			<li>
				<span className={classNames(style.caret, style.caret)}></span>
				<button className={classNames(style.departmentButton)}>Design</button>
			</li>
			<li>
				<button
					className={classNames(style.caret, style.expandedCaret)}
				></button>
				<button className={classNames(style.departmentButton)}>
					Engineering
				</button>
				<ul className={classNames(style.node, style.subBranch)}>
					<li>
						<button
							className={classNames(style.caret, style.expandedCaret)}
						></button>
						<button className={classNames(style.departmentButton)}>
							Release Engineering
						</button>
						<ul className={classNames(style.node, style.subBranch)}>
							<li>
								<span
									className={classNames(style.caret, style.hiddenCaret)}
								></span>
								<button className={classNames(style.departmentButton)}>
									Quality Assurance
								</button>
								<ul className={classNames(style.node)}></ul>
							</li>
						</ul>
					</li>
					<li>
						<span className={classNames(style.caret, style.caret)}></span>
						<button className={classNames(style.departmentButton)}>
							Web dev
						</button>
					</li>
				</ul>
			</li>
			<li>
				<button className={classNames(style.caret)}></button>
				<button className={classNames(style.departmentButton)}>Finance</button>
			</li>
			<li>
				<button className={classNames(style.caret)}></button>
				<button className={classNames(style.departmentButton)}>HR</button>
			</li>
			<li>
				<button className={classNames(style.caret)}></button>
				<button className={classNames(style.departmentButton)}>IT</button>
			</li>
			<li>
				<span className={classNames(style.caret, style.caret)}></span>
				<button className={classNames(style.departmentButton)}>Legal</button>
			</li>
			<li>
				<button className={classNames(style.caret)}></button>
				<button className={classNames(style.departmentButton)}>
					Marketing
				</button>
			</li>
			<li>
				<span className={classNames(style.caret, style.caret)}></span>
				<button className={classNames(style.departmentButton)}>Research</button>
			</li>
			<li>
				<button className={classNames(style.caret)}></button>
				<button className={classNames(style.departmentButton)}>
					Workplace
				</button>
			</li>
		</ul>
	)
}
