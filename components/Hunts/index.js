import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import { getHuntById } from '../../requests/hunts'
import { formatHuntDate } from '../../services/serializeDate'
import CarListItem from './carListItem'
import EditHuntModal from './editHuntModal'
import LocationSelector from './locationSelector'
import Avatar from '../common/Avatar'
import styles from './styles'

const red = '#a22b33'
const yellow = '#c1914a'

export default function Hunts({
  navigation,
  userId,
  fetchHunts,
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
    const huntLocation = { latitude: hunt.latitude, longitude: hunt.longitude }
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
        <LocationSelector editable={false} location={huntLocation} />
        {renderCars()}
      </ScrollView>
    )
  }

  const renderHeader = () => {
    const {
      title,
      description,
      created_at: createdAt,
      user: { id: huntUserId, username },
    } = hunt
    const formattedDate = formatHuntDate(createdAt)
    const avatarColor = huntUserId === userId ? red : yellow
    const avatarTextColor = huntUserId === userId ? 'white' : 'black'
    return (
      <View style={styles.topInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.bottomRow}>
          <View style={styles.user}>
            <Avatar
              name={username}
              diameter={25}
              textColor={avatarTextColor}
              backgroundColor={avatarColor}
              fontSize={15}
            />
            <Text style={styles.username}>{username}</Text>
          </View>
          <Text style={styles.createdAt}>{formattedDate}</Text>
        </View>
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
        fetchHunts={fetchHunts}
        navigation={navigation}
      />
    </View>
  )
}
