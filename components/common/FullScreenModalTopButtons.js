import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const { modalStyle } = StyleSheet.create({
  modalStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
  },
})

const FullScreenModalTopButtons = ({
  leftLabel,
  rightLabel,
  leftOnClick,
  rightOnClick,
  middleContent,
  topRightDisabled = false,
}) => (
  <View style={modalStyle}>
    {!!leftLabel && !!leftOnClick && (
      <TouchableOpacity onPress={leftOnClick}>
        <Text style={{ fontSize: 16, color: '#007AFF' }}>{leftLabel}</Text>
      </TouchableOpacity>
    )}
    {middleContent || null}
    {!!rightLabel && !!rightOnClick && (
      <TouchableOpacity disabled={topRightDisabled} onPress={rightOnClick}>
        <Text
          style={{
            fontSize: 16,
            color: '#007AFF',
            opacity: topRightDisabled ? 0.5 : 1.0,
          }}
        >
          {rightLabel}
        </Text>
      </TouchableOpacity>
    )}
  </View>
)

export default FullScreenModalTopButtons
