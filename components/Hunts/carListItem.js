import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from './styles/carListItem'
import { models, trimsByModel } from '../../services/vehicleData'
import FullScreenModal from '../common/FullScreenModal'

const CarListItem = ({ car: { model, trim, image_url: imageUrl } }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const modelName = models.find(m => m.value === model)?.label
  const trimName =
    trimsByModel[modelName]?.find(t => t.value === trim)?.label || 'none'

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.imageWrapper}
        onPress={() => setModalOpen(true)}
        underlayColor="white"
      >
        <>
          <Image
            style={styles.image}
            source={{ uri: imageUrl }}
            resizeMode="cover"
            blurRadius={1}
          />
          <View style={styles.carTitle}>
            <Text style={styles.modelName}>{`Porsche ${modelName}`}</Text>
            {trimName && trimName !== 'none' && (
              <Text style={styles.trimName}>{trimName}</Text>
            )}
          </View>
        </>
      </TouchableHighlight>
      <FullScreenModal
        visible={modalOpen}
        swipeToClose
        topLeftButtonLabel="Close"
        toggleModal={setModalOpen}
        paddingHorizontal={0}
        topLeftButtonOnClick={() => setModalOpen(false)}
      >
        <View style={styles.modalImageContainer}>
          <Image
            style={styles.modalImage}
            source={{ uri: imageUrl }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.modalCarTitle}>
          <Text
            style={{ ...styles.modelName, color: 'black' }}
          >{`Porsche ${modelName}`}</Text>
          {trimName && trimName !== 'none' && (
            <Text style={{ ...styles.trimName, color: 'black' }}>
              {trimName}
            </Text>
          )}
        </View>
      </FullScreenModal>
    </View>
  )
}

export default CarListItem
