import React from 'react'
import { View, Text, FlatList } from 'react-native'
import HuntListItem from '../Hunts/huntListItem'
import styles from './styles'

const HuntsContainer = ({ hunts, navigation, userId }) => {
  const renderItem = ({ item: hunt }) => (
    <HuntListItem hunt={hunt} navigation={navigation} userId={userId} />
  )

  const emptyComponent = (
    <View style={styles.emptyHunts}>
      <Text style={styles.emptyHuntsText}>No hunts found</Text>
    </View>
  )

  return (
    <View style={styles.huntsContainer}>
      <FlatList
        renderItem={renderItem}
        data={hunts}
        keyExtractor={hunt => `${hunt.id}`}
        style={{ flex: 1 }}
        ListEmptyComponent={emptyComponent}
      />
    </View>
  )
}

export default HuntsContainer
