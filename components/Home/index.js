import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import HuntsContainer from './huntsContainer'
import Spinner from '../common/Spinner'
import styles from './styles'
import { getAllHunts } from '../../requests/hunts'

const Home = ({ navigation }) => {
  const [loadingHunts, setLoadingHunts] = useState(false)
  const [hunts, setHunts] = useState(null)

  useEffect(() => {
    fetchHunts()
  }, [])

  const fetchHunts = async () => {
    setLoadingHunts(true)
    const fetchedHunts = await getAllHunts()
    setHunts(fetchedHunts)
    setLoadingHunts(false)
  }

  return (
    <View style={styles.container}>
      {loadingHunts ? (
        <View style={styles.spinner}>
          <Spinner />
        </View>
      ) : (
        <View style={styles.hunts}>
          <HuntsContainer hunts={hunts} navigation={navigation} />
        </View>
      )}
    </View>
  )
}

export default Home
