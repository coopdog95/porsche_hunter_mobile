import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { formatHuntDate } from '../../services/serializeDate'
import CarImageThumbnail from './carImageThumbnail'
import styles from './styles/huntListItem'

const HuntListItem = ({
  hunt: {
    id: huntId,
    cars,
    title,
    created_at: createdAt,
    user: { username },
  },
  navigation,
}) => {
  const viewHunt = () => navigation.navigate('Hunts', { huntId })
  const formattedDate = formatHuntDate(createdAt)

  const mappedThumbnails = () =>
    cars.map(car => <CarImageThumbnail key={car.id} imageUrl={car.image_url} />)

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={viewHunt}
      underlayColor="white"
    >
      <>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.carImages}>{mappedThumbnails()}</View>
        <View style={styles.bottomRow}>
          <Text style={styles.username}>{username}</Text>
          <Text>{formattedDate}</Text>
        </View>
      </>
    </TouchableHighlight>
  )
}

export default HuntListItem
