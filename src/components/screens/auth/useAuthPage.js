import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import AuthService from '../../../services/auth.service'

export const useAuthPage = () => {
	// состояние хранит текущий тип операции например 'login'
	const [type, setType] = useState('login')

	// управлять и обрабатывать состояние и события формы
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	// получения значения аутентификации из контекста
	const { isAuth, setIsAuth } = useAuth()

	// возможность перенаправлять пользователя на другие страницы
	const navigate = useNavigate()

	// Если пользователь аутентифицирован вы перенаправляете его на главную страницу
	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	// для управления асинхронной мутацией
	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: data => {
				setIsAuth(true)
				reset()
			}
		}
	)

	// инициирует выполнение мутации с переданными данными
	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}
