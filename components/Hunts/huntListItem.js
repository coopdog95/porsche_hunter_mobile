import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import CarImageThumbnail from './carImageThumbnail'
import styles from './styles/huntListItem'

const HuntListItem = ({ hunt }) => {
  const {
    cars,
    title,
    created_at: createdAt,
    user: { username },
  } = hunt

  const viewHunt = () => {
    console.log('hunt.id', hunt.id)
  }

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
        <View style={styles.carImages}>
          {cars.map(car => (
            <CarImageThumbnail imageUrl={car.image_url} />
          ))}
        </View>
        <View style={styles.bottomRow}>
          <Text>{username}</Text>
          <Text>{createdAt}</Text>
        </View>
      </>
    </TouchableHighlight>
  )
}

export default HuntListItem
