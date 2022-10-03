import fetchApi from '../services/fetchApi'

export const deleteCar = async carId =>
  await fetchApi(`/cars/${carId}`, 'DELETE')
