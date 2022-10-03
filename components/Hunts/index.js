import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import { getHuntById } from '../../requests/hunts'
import { formatHuntDate } from '../../services/serializeDate'
import CarListItem from './carListItem'
import EditHuntModal from './editHuntModal'
import styles from './styles'

export default function Hunts({
  navigation,
  userId,
  route: {
    params: { huntId },
  },
}) {
  const [hunt, setHunt] = useState(null)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [tempCars, setTempCars] = useState([])

  const huntOwner = !!hunt?.user_id && hunt?.user_id === userId

  useEffect(() => {
    fetchHunt()
  }, [])

  const fetchHunt = async () => {
    const fetchedHunt = await getHuntById(huntId)
    setHunt(fetchedHunt)
    setTempCars(fetchedHunt.cars)
  }

  const updateCars = newCars => setTempCars(newCars)

  const renderHunt = () => {
    return (
      <ScrollView style={styles.scrollView}>
        {huntOwner && (
          <View style={styles.editButton}>
            <Button
              title="Edit Hunt"
              onPress={() => setEditModalOpen(true)}
              color="white"
            />
          </View>
        )}
        {renderHeader()}
        {renderCars()}
      </ScrollView>
    )
  }

  const renderHeader = () => {
    const { title, description, created_at: createdAt } = hunt
    const formattedDate = formatHuntDate(createdAt)
    return (
      <View style={styles.topInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.createdAt}>{formattedDate}</Text>
      </View>
    )
  }

  const renderCars = () => (
    <View style={styles.carsList}>
      {hunt.cars?.map(car => (
        <CarListItem car={car} key={car.id} />
      ))}
    </View>
  )

  return (
    <View style={styles.container}>
      {!hunt ? <Text>Loading...</Text> : renderHunt()}
      <EditHuntModal
        visible={editModalOpen}
        hunt={hunt}
        toggleModal={setEditModalOpen}
        updateCars={updateCars}
        tempCars={tempCars}
        fetchHunt={fetchHunt}
      />
    </View>
  )
}
