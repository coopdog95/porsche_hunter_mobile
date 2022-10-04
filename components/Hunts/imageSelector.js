import React from 'react'
import { Button, Image, View, Keyboard } from 'react-native'
import Alert from '../common/Alert'
import * as ImagePicker from 'expo-image-picker'
import styles from './styles/editCar'
import { compressImage } from '../../services/imageTools'

const formatBase64 = base64 => 'data:image/jpeg;base64,' + base64

const ImageSelector = ({ car, imageBase64, setImageBase64 }) => {
  const [mediaLibraryPermissionStatus, requestPermission] =
    ImagePicker.useMediaLibraryPermissions()

  const openImagePicker = async () => {
    Keyboard.dismiss()
    const permitted = await checkPermissions()
    if (!permitted) return showUpdatePermissionsAlert()

    let { base64, cancelled, width, height } =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        base64: true,
        quality: 1,
      })
    if (!cancelled) {
      await handleCompress(formatBase64(base64), width, height)
    }
  }

  const handleCompress = async (base64, width, height) => {
    const { base64: compressedBase64 } = await compressImage(
      base64,
      width,
      height,
    )
    setImageBase64(formatBase64(compressedBase64))
  }

  const showUpdatePermissionsAlert = () =>
    Alert({
      titleText: 'Failed to open image library',
      bodyText:
        'Please allow Porsche Hunter to access your photos from your device settings',
      onConfirm: () => Linking.openURL('app-settings:'),
      onCancel: null,
      confirmText: 'Settings',
    })

  const checkPermissions = async () => {
    if (!mediaLibraryPermissionStatus.granted) {
      const { status } = await requestPermission()
      return status !== 'denied'
    }
    return true
  }

  return (
    <View style={styles.imageSelector}>
      <Button title="Choose Image" onPress={openImagePicker} />
      <Image
        source={{ uri: imageBase64 || car?.image_url }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  )
}

export default ImageSelector
