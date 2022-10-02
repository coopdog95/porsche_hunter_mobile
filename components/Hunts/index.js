import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { getHuntById } from '../../requests/hunts'
import { formatHuntDate } from '../../services/serializeDate'
import CarListItem from './carListItem'
import styles from './styles'

export default function Hunts({
  navigation,
  userId,
  route: {
    params: { huntId },
  },
}) {
  const [hunt, setHunt] = useState(null)
  const huntOwner = !!hunt?.user_id && hunt?.user_id === userId

  useEffect(() => {
    fetchHunt()
  }, [])

  const fetchHunt = async () => {
    const fetchedHunt = await getHuntById(huntId)
    setHunt(fetchedHunt)
  }

  const renderHunt = () => {
    const {
      user: { username },
      cars,
    } = hunt
    return (
      <ScrollView style={styles.scrollView}>
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
    </View>
  )
}
