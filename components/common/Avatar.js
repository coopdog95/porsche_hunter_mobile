import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Avatar = ({
  diameter,
  name,
  backgroundColor,
  borderColor,
  textColor,
  fontSize,
}) => {
  const containerStyles = {
    height: diameter,
    width: diameter,
    borderRadius: diameter / 2,
    backgroundColor: backgroundColor || 'lightGrey',
    alignItems: 'center',
    justifyContent: 'center',
  }

  if (borderColor) {
    containerStyles.borderColor = borderColor
    containerStyles.borderWidth = 1
  }

  const styles = StyleSheet.create({
    container: containerStyles,
  })

  const innerText = !name
    ? '?'
    : name
        .split(' ')
        .map(word => word[0])
        .join('')
        .slice(0, 2)
  return (
    <View style={styles.container}>
      <Text
        light
        style={{
          color: textColor || 'black',
          fontSize: fontSize || diameter * 0.5,
        }}
      >
        {innerText}
      </Text>
    </View>
  )
}

export default Avatar
