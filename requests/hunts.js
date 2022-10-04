import fetchApi from '../services/fetchApi'

export const getMyHunts = async () => await fetchApi('/hunts', 'GET')

export const getAllHunts = async () => await fetchApi('/hunts?all=true', 'GET')

export const getHuntById = async huntId =>
  await fetchApi(`/hunts/${huntId}`, 'GET')

export const updateHunt = async (huntId, huntProps, cars) => {
  const body = JSON.stringify({ huntProps, cars })
  return await fetchApi(`/hunts/${huntId}`, 'PATCH', { body })
}

export const createHunt = async (huntProps, cars) => {
  const body = JSON.stringify({ huntProps, cars })
  return await fetchApi(`/hunts`, 'POST', { body })
}

export const deleteHunt = async huntId =>
  await fetchApi(`/hunts/${huntId}`, 'DELETE')
