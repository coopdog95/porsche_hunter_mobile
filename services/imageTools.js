import * as ImageManipulator from 'expo-image-manipulator'

const compressSizer = size => {
  const MB = Math.round(size / Math.pow(1024, 2))
  if (MB === 0) return 1
  if (MB === 1) return 0.9
  if (MB === 2) return 0.8
  if (MB === 3) return 0.7
  if (MB === 4) return 0.6
  if (MB >= 5) return 0.5
  if (MB >= 10) return 0.4
  if (MB >= 15) return 0.3
  if (MB >= 20) return 0.2
  if (MB >= 25) return 0.1
}

const base64ToBlob = async base64Data => {
  const result = await fetch(base64Data)
  return result.blob()
}

export const compressImage = async (image, width, height) => {
  try {
    const blob = await base64ToBlob(image)
    const compressSize = compressSizer(blob.size)

    let resize
    if (height === width) resize = { height: 800, width: 800 }
    else if (height > width) resize = { height: 800 }
    else resize = { width: 1200 }

    return ImageManipulator.manipulateAsync(image, [{ resize }], {
      compress: compressSize,
      format: ImageManipulator.SaveFormat.PNG,
      base64: true,
    })
  } catch (error) {
    console.error(error)
    return { uri: null, base64: null }
  }
}
