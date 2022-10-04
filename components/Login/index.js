import React, { useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native'
import LoginInputs from './loginInputs'
import Spinner from '../common/Spinner'
import Alert from '../common/Alert'
import { postUserLogin, createNewUser } from '../../requests/users'
import styles from './styles'

export default function Login({ setAuthenticated, setUserId }) {
  const [username, setUsername] = useState('cooper2')
  const [password, setPassword] = useState('password')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [creatingAccount, setCreatingAccount] = useState(false)
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

  const handleLogin = async e => {
    e.preventDefault()
    if (creatingAccount && password !== confirmedPassword)
      return loginAlert('Passwords do not match')
    try {
      setAuthenticating(true)
      if (creatingAccount) {
        const { user } = await createNewUser(username, password)
        setUserId(user.id)
      } else {
        const { user } = await postUserLogin(username, password)
        setUserId(user.id)
      }
      setAuthenticating(false)
      setAuthenticated(true)
    } catch (error) {
      setAuthenticating(false)
      if (error.status === 500) {
        return loginAlert('Login failed, please try again later.')
      }
      if (error.body?.error_message) {
        loginAlert(error.body.error_message)
      } else {
        loginAlert(error.message)
      }
    }
  }

  const loginAlert = message =>
    Alert({
      titleText: 'Login Error',
      bodyText: message,
      noCancel: true,
      confirmText: 'Ok',
    })

  const loginDisabled =
    !username.length ||
    !password.length ||
    (creatingAccount && !confirmedPassword.length)
  const loginTitle = creatingAccount ? 'Create Account and Login' : 'Login'

  return authenticating ? (
    <View style={styles.fullScreenSpinner}>
      <Spinner />
    </View>
  ) : (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.header}>
          <Image style={styles.porscheIcon} source={porscheIcon} />
          <Text style={styles.headerText}>Porsche Hunter</Text>
        </View>
        <LoginInputs
          username={username}
          password={password}
          confirmedPassword={confirmedPassword}
          setUsername={setUsername}
          setPassword={setPassword}
          setConfirmedPassword={setConfirmedPassword}
          creatingAccount={creatingAccount}
          passwordInputRef={passwordRef}
          onSubmit={onSubmit}
        />
        <View style={styles.button}>
          <Button
            title={loginTitle}
            onPress={handleLogin}
            disabled={loginDisabled}
            color="white"
          />
        </View>
        {!creatingAccount && (
          <View style={{ ...styles.button, ...styles.createAccountButton }}>
            <Button
              title="Create an account"
              onPress={() => setCreatingAccount(true)}
              disabled={loginDisabled}
              color="#007AFF"
            />
          </View>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
