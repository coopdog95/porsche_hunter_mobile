import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'

const LoginInputs = ({
  username,
  onSubmit,
  password,
  passwordInputRef,
  setUsername,
  setPassword,
}) => {
  const generateInputProps = inputType => {
    let inputProps = {
      autoCapitalize: 'none',
      autoCorrect: false,
      textAlign: 'left',
      style: styles.loginInput,
      placeholderTextColor: 'grey',
    }
    let onChangeText,
      label,
      placeholder,
      value,
      keyboardType,
      returnKeyType,
      ref
    switch (inputType) {
      case 'username':
        onChangeText = setUsername
        label = 'Username'
        placeholder = 'Username'
        keyboardType = 'default'
        value = username
        returnKeyType = 'next'
        inputProps.onSubmitEditing = e => onSubmit(e, 'username')
        inputProps.textContentType = 'username'
        break
      case 'password':
        ref = passwordInputRef
        onChangeText = setPassword
        label = 'Password'
        placeholder = 'Password'
        keyboardType = 'default'
        value = password
        returnKeyType = 'go'
        inputProps.onSubmitEditing = e => onSubmit(e, 'password')
        inputProps.secureTextEntry = true
        inputProps.textContentType = 'password'
        break
      default:
        break
    }
    return {
      ...inputProps,
      onChangeText,
      label,
      placeholder,
      value,
      keyboardType,
      returnKeyType,
      ref,
    }
  }

  return (
    <View style={styles.loginInputsContainer}>
      <View style={styles.loginTextArea}>
        <TextInput {...generateInputProps('username')} />
      </View>
      <View style={styles.loginTextArea}>
        <TextInput {...generateInputProps('password')} />
      </View>
    </View>
  )
}

export default LoginInputs
