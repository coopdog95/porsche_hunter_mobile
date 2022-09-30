import React, { useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import LoginInputs from './loginInputs'
import styles from './styles'

export default function Login({ authenticated, setAuthenticated }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authenticating, setAuthenticating] = useState(false)

  const passwordRef = useRef()
  const porscheIcon = require('../../assets/PorschePNG.png')

  const onSubmit = (event, inputType) => {
    const {
      nativeEvent: { text },
    } = event
    if (!text || !text.length) return
    switch (inputType) {
      case 'email':
        return passwordRef.current?.focus()
      case 'password':
        Keyboard.dismiss()
        return handleLogin(event)
      default:
        break
    }
  }

  const handleLogin = async e => {}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={styles.porscheIcon} source={porscheIcon} />
        <Text style={styles.headerText}>Porsche Hunter</Text>
        <LoginInputs
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          passwordInputRef={passwordRef}
          onSubmit={onSubmit}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
