import React, { useEffect, useState } from 'react'
import { Button, View, Keyboard } from 'react-native'
import Dropdown from 'react-native-dropdown-picker'
import { models, trimsByModel } from '../../services/vehicleData'
import ImageSelector from './imageSelector'
import styles from './styles/editCar'

const defaultValue = { value: 'none', label: 'None' }

const EditCar = ({ car, toggleEditing, cars, updateCars }) => {
  const [model, setModel] = useState(defaultValue)
  const [trim, setTrim] = useState(defaultValue)
  const [imageBase64, setImageBase64] = useState(null)
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false)
  const [trimSelectorOpen, setTrimSelectorOpen] = useState(false)

  useEffect(() => {
    if (car) setCarDetails()
  }, [])

  const onModelOpen = () => {
    Keyboard.dismiss()
    setTrimSelectorOpen(false)
    setModelSelectorOpen(true)
  }

  const onTrimOpen = () => {
    Keyboard.dismiss()
    setModelSelectorOpen(false)
    setTrimSelectorOpen(true)
  }

  const setCarDetails = () => {
    const foundModel = models.find(model => model.value === car?.model)?.value
    if (foundModel) {
      setModel(foundModel)
      const foundTrim = trimsByModel[foundModel].find(
        trim => trim.value === car?.trim,
      )?.value
      if (foundTrim) setTrim(foundTrim)
    }
  }

  const onSelectModel = newModel => {
    if (newModel !== model) setTrim(defaultValue)
    setModel(newModel)
    setModelSelectorOpen(false)
    if (model?.value !== 'none') setTrimSelectorOpen(true)
  }

  const onSelectTrim = trim => {
    setTrim(trim)
    setTrimSelectorOpen(false)
  }

  const onDiscardCar = () => {
    setModel(defaultValue)
    setTrim(defaultValue)
    toggleEditing(false)
  }

  const onSaveCar = () => {
    toggleEditing(false)
    if (!car) {
      const newCars = [
        ...cars,
        {
          model: model.value,
          trim: trim.value,
          image_url: car?.image_url,
          image_data: imageBase64,
          unsaved: true,
        },
      ]
      updateCars(newCars)
    }
  }

  const saveDisabled =
    !model?.value ||
    model?.value === 'none' ||
    !trim.value ||
    (!car?.image_url && !imageBase64)
  const showImageSelector = model?.value !== 'none' && trim?.value

  return (
    <View style={styles.container}>
      <View style={styles.modelSelector}>
        <Dropdown
          open={modelSelectorOpen}
          onOpen={onModelOpen}
          onClose={() => setModelSelectorOpen(false)}
          items={models}
          value={model.value}
          onSelectItem={onSelectModel}
          placeholder="Select Porsche Model"
          listMode="SCROLLVIEW"
        />
      </View>
      {model?.value !== 'none' && (
        <View style={styles.trimSelector}>
          <Dropdown
            open={trimSelectorOpen}
            onOpen={onTrimOpen}
            onClose={() => setTrimSelectorOpen(false)}
            items={trimsByModel[model.value]}
            value={trim.value}
            onSelectItem={onSelectTrim}
            placeholder={`Select ${model.value} Trim`}
            listMode="SCROLLVIEW"
          />
        </View>
      )}
      {showImageSelector && (
        <ImageSelector
          car={null}
          setImageBase64={setImageBase64}
          imageBase64={imageBase64}
        />
      )}
      <View style={styles.actions}>
        <Button title="Discard" onPress={onDiscardCar} color="red" />
        <Button title="Save" onPress={onSaveCar} disabled={saveDisabled} />
      </View>
    </View>
  )
}

export default EditCar
