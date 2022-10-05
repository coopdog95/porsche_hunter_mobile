import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'
import HuntsContainer from './huntsContainer'
import Spinner from '../common/Spinner'
import styles from './styles'
import EditHuntModal from '../Hunts/editHuntModal'

const Home = ({ userId, navigation, hunts, fetchHunts, loadingHunts }) => {
  const [modalOpen, setModalOpen] = useState(null)
  const [tempCars, setTempCars] = useState([])

  useEffect(() => {
    fetchHunts()
  }, [])

  return (
    <View style={styles.container}>
      {loadingHunts ? (
        <View style={styles.spinner}>
          <Spinner />
        </View>
      ) : (
        <View style={{ flex: 1, paddingBottom: 20 }}>
          <View style={styles.createHuntButton}>
            <Button
              title="Create Hunt"
              onPress={() => setModalOpen(true)}
              color="white"
            />
          </View>
          <HuntsContainer
            hunts={hunts}
            navigation={navigation}
            userId={userId}
          />
          <EditHuntModal
            visible={modalOpen}
            hunt={null}
            toggleModal={setModalOpen}
            fetchHunt={() => {}}
            fetchHunts={fetchHunts}
            tempCars={tempCars}
            updateCars={setTempCars}
            navigation={navigation}
          />
        </View>
      )}
    </View>
  )
}

export default Home
