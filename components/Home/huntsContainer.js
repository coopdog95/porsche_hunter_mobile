import React from 'react'
import { View, Text, FlatList } from 'react-native'
import HuntListItem from '../Hunts/huntListItem'
import styles from './styles'

const HuntsContainer = ({ hunts }) => {
  console.log('hunts', hunts)

  const renderItem = ({ item: hunt }) => <HuntListItem hunt={hunt} />

  return (
    <View style={styles.huntsContainer}>
      <FlatList
        renderItem={renderItem}
        data={hunts}
        keyExtractor={hunt => `${hunt.id}`}
        style={{ flex: 1 }}
      />
    </View>
  )
}

export default HuntsContainer
