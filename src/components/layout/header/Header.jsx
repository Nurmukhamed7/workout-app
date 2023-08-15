import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import Hamburger from '../hamburger/Hamburger'

import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
							aria-label='Go to profile'
							onClick={() => {
								navigate('/profile')
							}}
						>
							<SlUser fill='#fff' fontSize={27} />
						</button>
					) : (
						<button
							aria-label='Go back'
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<IoMdArrowBack fill='#fff' fontSize={29} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
