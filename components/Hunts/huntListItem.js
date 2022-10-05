import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { formatHuntDate } from '../../services/serializeDate'
import Avatar from '../common/Avatar'
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
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.carImages}>{mappedThumbnails()}</View>
        <View style={styles.bottomRow}>
          <View style={styles.user}>
            <Avatar
              name={username}
              diameter={25}
              textColor="white"
              backgroundColor="#a22b33"
              fontSize={15}
            />
            <Text style={styles.username}>{username}</Text>
          </View>
          <Text>{formattedDate}</Text>
        </View>
      </>
    </TouchableHighlight>
  )
}

export default HuntListItem
