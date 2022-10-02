import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import styles from './styles/carImageThumbnail'

const CarImageThumbnail = ({ imageUrl }) => {
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  )
}

export default CarImageThumbnail
