import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  View,
  Image,
  Button,
} from 'react-native'
import FullScreenModal from '../common/FullScreenModal'
import EditCar from './editCar'
import { models, trimsByModel } from '../../services/vehicleData'
import { updateHunt, createHunt, deleteHunt } from '../../requests/hunts'
import { deleteCar } from '../../requests/cars'
import styles from './styles/editHuntModal'
import Alert from '../common/Alert'

const EditHuntModal = ({
  visible,
  toggleModal,
  hunt,
  updateCars,
  tempCars,
  fetchHunt,
  fetchHunts,
  navigation,
}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    if (visible && hunt) setHuntDetails()
  }, [visible])

  const setHuntDetails = () => {
    setTitle(hunt?.title || '')
    setDescription(hunt?.description || '')
  }

  const onSave = async () => {
    const huntProps = { title, description }
    try {
      if (hunt?.id) {
        const cars = [...hunt?.cars, ...tempCars]
        await updateHunt(hunt.id, huntProps, cars)
      } else {
        await createHunt(huntProps, tempCars)
      }
      await fetchHunt()
      await fetchHunts()
      toggleModal(false)
    } catch (error) {
      Alert({
        titleText: 'Save error',
        bodyText: error.message,
        noCancel: true,
        confirmText: 'Ok',
      })
    }
  }

  const addCar = () => {
    if (editing) return
    setEditing(true)
  }

  const onDeleteCar = async carId => {
    try {
      await deleteCar(carId)
      await fetchHunt()
      await fetchHunts()
      Alert({
        titleText: 'Car deleted',
        bodyText: 'Car successfully deleted',
        noCancel: true,
        confirmText: 'Ok',
      })
    } catch (error) {
      Alert({
        titleText: 'Delete error',
        bodyText: error.message,
        noCancel: true,
        confirmText: 'Ok',
      })
    }
  }

  const getModelLabel = car =>
    models.find(model => model.value === car.model)?.label || car.model

  const getTrimLabel = car =>
    trimsByModel[car.model]?.find(trim => trim.value === car.trim)?.label ||
    car.trim

  const renderCar = (car, index) => (
    <View key={car.id || `new-${index}`} style={styles.carListItem}>
      <View style={styles.carListItemDetails}>
        <View style={styles.carListItemText}>
          <Text style={styles.carListItemModel}>{getModelLabel(car)}</Text>
          <Text style={styles.carListItemTrim}>{getTrimLabel(car)}</Text>
        </View>
        <Image
          style={styles.carListItemImage}
          source={{ uri: car.image_data || car.image_url }}
          resizeMode="cover"
        />
      </View>
      {car.id ? (
        <View style={styles.carListItemDeleteButton}>
          <Button
            title="Delete"
            onPress={() => onDeleteCar(car.id)}
            color="white"
          />
        </View>
      ) : null}
    </View>
  )

  const onClose = () => {
    updateCars(hunt?.cars || [])
    setHuntDetails()
    toggleModal(false)
  }

  const onConfirmDelete = async () => {
    await deleteHunt(hunt?.id)
    await fetchHunts()
    toggleModal(false)
    navigation.goBack()
  }

  const onDeleteHunt = async () => {
    Alert({
      titleText: 'Delete Hunt',
      bodyText: 'Are you sure you would like to delete this hunt?',
      onConfirm: onConfirmDelete,
      confirmText: 'Delete',
      destructiveConfirm: true,
    })
  }

  const headerText = `Cars${tempCars.length ? ` (${tempCars.length})` : ''}`
  const saveDisabled = !tempCars.length || !title.length
  const topRightButtonLabel = hunt ? 'Save' : 'Create'

  return (
    <FullScreenModal
      visible={visible}
      toggleModal={toggleModal}
      topLeftButtonLabel="Close"
      topLeftButtonOnClick={onClose}
      topRightButtonLabel={topRightButtonLabel}
      topRightButtonOnClick={onSave}
      topRightButtonDisabled={saveDisabled}
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
            <Text style={styles.addCarText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carsContainer}>
          {editing && (
            <View style={styles.editCarContainer}>
              <EditCar
                car={null}
                toggleEditing={setEditing}
                updateCars={updateCars}
                cars={tempCars}
              />
            </View>
          )}
          <ScrollView style={styles.scrollView}>
            {tempCars.map(renderCar)}
          </ScrollView>
        </View>
        {hunt?.id && (
          <View style={styles.deleteHuntButton}>
            <Button title="Delete Hunt" onPress={onDeleteHunt} color="white" />
          </View>
        )}
      </View>
    </FullScreenModal>
  )
}

export default EditHuntModal
