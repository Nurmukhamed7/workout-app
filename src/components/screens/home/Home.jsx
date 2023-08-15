import { useNavigate } from 'react-router-dom'

import Layout from '../../layout/Layout'

import Button from '../../ui/button/Button'

import Statistics from '../profile/statistics/Statistics'
import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/public/images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>Exercises for the shoulders</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
