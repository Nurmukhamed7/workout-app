import React from 'react'
import { RiCloseLine, RiMenu3Fill } from 'react-icons/ri'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, setIsShow, ref } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} aria-label='Open menu'>
				{isShow ? <RiCloseLine /> : <RiMenu3Fill />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
