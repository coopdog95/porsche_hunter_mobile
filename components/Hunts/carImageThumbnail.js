import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles/carImageThumbnail'

const CarImageThumbnail = ({ imageUrl }) => (
  <View style={styles.container}>
    <Image source={{ uri: imageUrl }} resizeMode="cover" style={styles.image} />
  </View>
)

export default CarImageThumbnail
