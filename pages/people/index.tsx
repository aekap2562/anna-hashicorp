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
import useMediaQuery from 'components/shared/useMediaQuery'
import DepartmentFilter from 'components/departmentFilter/DepartmentFilter'

interface Props {
	allPeople: PersonRecord[]
	allDepartments: DepartmentRecord[]
}

export default function PeoplePage({
	allPeople,
	allDepartments,
}: Props): React.ReactElement {
	//TODO (AK 01/02/2024): state management so state can persist
	// even after a refresh. Attempted localStorage but using redux or
	// something similar would be more ideal
	const isMobile = useMediaQuery('(max-width: 600px')
	const [imageFilter, setImageFilter] = useState(false)
	const [searchValue, setSearchValue] = useState<string>('')
	const filteredByImage: PersonRecord[] = allPeople.filter(
		(person) => person.avatar?.url !== (null || undefined)
	)
	const searchFilter: PersonRecord[] = allPeople.filter((person) =>
		person.name.includes(searchValue)
	)
	const searchAndImageFilter: PersonRecord[] = filteredByImage.filter(
		(person) => person.name.includes(searchValue)
	)

	const handleImageCheckboxClick = () => {
		if (imageFilter === false) {
			setImageFilter(true)
		} else {
			setImageFilter(false)
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const trimmedValue = value.trim()
		setSearchValue(trimmedValue)
	}

	const peopleDetails = useMemo(() => {
		if (imageFilter === true) {
			//if person doesn't have an image AND name is searched
			if (searchValue.length !== 0) {
				return searchAndImageFilter.map((person) => {
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
			//if person doesn't have an image and there's no name search
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
		} else if (searchValue.length !== 0) {
			return searchFilter.map((person) => {
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
	}, [allPeople, imageFilter, searchValue, filteredByImage, searchFilter])

	return (
		<main className="g-grid-container">
			<div>
				<Title />
				<SearchBar
					searchValue={searchValue}
					handleInputChange={handleInputChange}
				/>
				<CheckBox
					imageFilter={imageFilter}
					handleClick={handleImageCheckboxClick}
				/>
				<div className={style.filterAndCards}>
					{!isMobile && <DepartmentFilter allDepartments={allDepartments} />}
					{peopleDetails.length === 0 ? (
						<div className={style.noResults}>No results found.</div>
					) : (
						<div className={style.cardContainer}>{peopleDetails}</div>
					)}
				</div>
			</div>
		</main>
	)
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const data = await rivetQuery({ query })
	return { props: data }
}

PeoplePage.layout = BaseLayout
