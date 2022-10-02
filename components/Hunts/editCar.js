import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Dropdown from 'react-native-dropdown-picker'
import { models, trimsByModel } from '../../services/vehicleData'
import styles from './styles/editCar'

const defaultValue = { value: 'none', label: 'None' }

const EditCar = ({ car }) => {
  const [year, setYear] = useState('')
  const [model, setModel] = useState(defaultValue)
  const [trim, setTrim] = useState(defaultValue)
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false)
  const [trimSelectorOpen, setTrimSelectorOpen] = useState(false)

  useEffect(() => {
    if (car) setCarDetails()
  }, [])

  const onModelOpen = () => {
    setTrimSelectorOpen(false)
    setModelSelectorOpen(true)
  }

  const onTrimOpen = () => {
    setModelSelectorOpen(false)
    setTrimSelectorOpen(true)
  }

  const setCarDetails = () => {
    const foundModel = models.find(model => model.value === car.model)
    console.log('foundModel', foundModel)
    if (foundModel) {
      setModel(foundModel)
      const foundTrim = trimsByModel[foundModel].find(
        trim => trim.value === car.trim,
      )
      console.log('foundTrim', foundTrim)
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
          />
        </View>
      )}
    </View>
  )
}

export default EditCar
