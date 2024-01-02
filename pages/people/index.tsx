import rivetQuery from '@hashicorp/platform-cms'
import { GetStaticPropsResult } from 'next'
import { PersonRecord, DepartmentRecord } from 'types'
import BaseLayout from '../../layouts/base'
import style from './style.module.css'
import query from './query.graphql'
import Title from '../../components/contentHeader/Title'
import SearchBar from 'components/search/SearchBar'
import Card from 'components/card/Card'
import { useMemo, useState } from 'react'
import CheckBox from 'components/checkbox/CheckBox'

interface Props {
	allPeople: PersonRecord[]
	allDepartments: DepartmentRecord[]
}

export default function PeoplePage({
	allPeople,
	allDepartments,
}: Props): React.ReactElement {
	const [imageFilter, setImageFilter] = useState(false)
	let filteredByImage: PersonRecord[]

	const handleClick = () => {
		if (imageFilter === false) {
			setImageFilter(true)
		} else {
			setImageFilter(false)
		}
	}

	const peopleDetails = useMemo(() => {
		if (imageFilter === true) {
			filteredByImage = allPeople.filter(
				(person) => person.avatar?.url !== (null || undefined)
			)
			return filteredByImage.map((person) => {
				return (
					<div key={person.id}>
						<Card
							name={person.name}
							title={person.title}
							avatar={person.avatar?.url}
							department={person.department.name}
						/>
					</div>
				)
			})
		} else {
			return allPeople.map((person) => {
				return (
					<div key={person.id}>
						<Card
							name={person.name}
							title={person.title}
							avatar={person.avatar?.url}
							department={person.department.name}
						/>
					</div>
				)
			})
		}
	}, [allPeople, imageFilter])

	return (
		<main className="g-grid-container">
			<div>
				<Title />
				<SearchBar />
				<CheckBox imageFilter={imageFilter} handleClick={handleClick} />
				<div className={style.cardContainer}>{peopleDetails}</div>
			</div>
			<h2>People Data</h2>
			<pre className={style.myData}>{JSON.stringify(allPeople, null, 2)}</pre>
			<h2>Departments Data</h2>
			<pre className={style.myData}>
				{JSON.stringify(allDepartments, null, 2)}
			</pre>
		</main>
	)
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const data = await rivetQuery({ query })
	return { props: data }
}

PeoplePage.layout = BaseLayout
