import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  View,
} from 'react-native'
import styles from './styles/editHuntModal'
import FullScreenModal from '../common/FullScreenModal'
import EditCar from './editCar'

const EditHuntModal = ({ visible, toggleModal, hunt }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    if (visible && hunt) setHuntDetails()
  }, [visible])

  const setHuntDetails = () => {
    setTitle(hunt.title)
    setDescription(hunt.description)
  }

  const onSave = async () => {
    console.log('saving...', hunt?.id)
    toggleModal(false)
  }

  const addCar = () => {
    if (editing) return
    setEditing(true)
  }

  const headerText = `Cars${hunt?.cars.length ? ` (${hunt.cars.length})` : ''}`

  return (
    <FullScreenModal
      visible={visible}
      toggleModal={toggleModal}
      topLeftButtonLabel="Close"
      topLeftButtonOnClick={() => toggleModal(false)}
      topRightButtonLabel="Save"
      topRightButtonOnClick={onSave}
    >
      <View style={styles.container}>
        <View style={styles.textInputs}>
          <View style={styles.textArea}>
            <TextInput
              style={styles.textInput}
              value={title}
              placeholder="Title"
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.textArea}>
            <TextInput
              style={styles.textInput}
              value={description}
              placeholder="Description (optional)"
              onChangeText={setDescription}
              numberOfLines={3}
            />
          </View>
        </View>
        <View style={styles.carsHeader}>
          <Text style={styles.headerText}>{headerText}</Text>
          <TouchableOpacity onPress={addCar} style={styles.addCarButton}>
            <Text style={styles.addCarText}>{`+`}</Text>
          </TouchableOpacity>
        </View>
        <View>
          {editing && (
            <View style={styles.editCarContainer}>
              <EditCar car={null} />
            </View>
          )}
        </View>
      </View>
    </FullScreenModal>
  )
}

export default EditHuntModal
