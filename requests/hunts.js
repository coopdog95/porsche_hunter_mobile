import fetchApi from '../services/fetchApi'

export const getMyHunts = async () => await fetchApi('/hunts', 'GET')

export const getAllHunts = async () => await fetchApi('/hunts?all=true', 'GET')
