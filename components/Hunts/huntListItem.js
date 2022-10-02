import React from 'react'
import { ScrollView, Text, TouchableHighlight, View } from 'react-native'
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
  const url =
    'https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/2019-porsche-911-targa-4-gts/.thumbnails/IMG_0043.jpg/IMG_0043-tiny-2048x0-0.5x0.jpg'
  const formattedDate = formatHuntDate(createdAt)

  const mappedThumbnails = () =>
    cars.map(car => <CarImageThumbnail key={car.id} imageUrl={url} />)

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
        {cars?.length > 2 ? (
          <ScrollView
            contentContainerStyle={styles.scrollView}
            horizontal={true}
          >
            {mappedThumbnails()}
          </ScrollView>
        ) : (
          <View style={styles.carImages}>{mappedThumbnails()}</View>
        )}
        <View style={styles.carImages}></View>
        <View style={styles.bottomRow}>
          <Text>{username}</Text>
          <Text>{formattedDate}</Text>
        </View>
      </>
    </TouchableHighlight>
  )
}

export default HuntListItem
