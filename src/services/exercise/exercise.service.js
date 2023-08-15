import { $axios } from '../../api'

export const EXERCISES = '/exercises'

class ExercisesService {
	async getAll() {
		return $axios.get(EXERCISES)
	}

	// name, times ,iconPath это все body
	async create(body) {
		return $axios.post(EXERCISES, body)
	}

	async update(id, body) {
		return $axios.put(`${EXERCISES}/${id}`, body)
	}

	async delete(id, body) {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default new ExercisesService()
