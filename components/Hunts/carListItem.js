import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles/carListItem'

const CarListItem = ({ car: { model, trim, year, image_url: imageUrl } }) => {
  useEffect(() => {}, [])

  const serializedTrim = ['none', null].includes(trim?.toLowerCase())
    ? ''
    : trim

  const carTitle = `${year} Porsche ${model} ${serializedTrim}`
  const imageSource = {
    uri: 'https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/2019-porsche-911-targa-4-gts/.thumbnails/IMG_0043.jpg/IMG_0043-tiny-2048x0-0.5x0.jpg',
    cache: Platform.OS === 'ios' ? 'only-if-cached' : null,
  }

  return (
    <View style={styles.container}>
      <Text style={styles.carTitle}>{carTitle}</Text>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={imageSource} resizeMode="contain" />
      </View>
    </View>
  )
}

export default CarListItem
