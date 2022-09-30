import { Alert as RNAlert } from 'react-native'

const Alert = ({
  actions,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  destructiveCancel = false,
  destructiveConfirm = false,
  onCancel = null,
  onConfirm = null,
  noCancel = false,
  titleText = '',
  bodyText = '',
}) => {
  const generateActions = () => {
    if (!actions && noCancel) {
      return [
        {
          text: confirmText,
          style: destructiveConfirm ? 'destructive' : 'default',
          onPress: onConfirm,
        },
      ]
    } else if (!actions) {
      return [
        {
          text: cancelText,
          style: destructiveCancel ? 'destructive' : 'cancel',
          onPress: onCancel,
        },
        {
          text: confirmText,
          style: destructiveConfirm ? 'destructive' : 'default',
          onPress: onConfirm,
        },
      ]
    }
    return actions
  }

  return RNAlert.alert(titleText, bodyText, generateActions())
}
export default Alert
