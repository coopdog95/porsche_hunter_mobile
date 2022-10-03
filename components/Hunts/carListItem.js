import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles/carListItem'
import { models, trimsByModel } from '../../services/vehicleData'

const CarListItem = ({ car: { model, trim, image_url: imageUrl } }) => {
  const carTitle = () => {
    const modelName = models.find(m => m.value === model)?.label
    const trimName =
      trimsByModel[modelName]?.find(t => t.value === trim)?.label || 'none'
    return `Porsche ${modelName}${
      !!trimName && trimName !== 'none' ? ` ${trimName}` : ''
    }`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.carTitle}>{carTitle()}</Text>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
          resizeMode="contain"
        />
      </View>
    </View>
  )
}

export default CarListItem
