import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from './styles/carImageThumbnail'

const CarImageThumbnail = ({ imageUrl }) => {
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])

  return <View style={styles.container}></View>
}

export default CarImageThumbnail
