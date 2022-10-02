import React from 'react'
import { Modal, SafeAreaView, View } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import FullScreenModalTopButtons from './FullScreenModalTopButtons'

const FullScreenModal = ({
  children,
  visible,
  onClose,
  toggleModal,
  swipeToClose = false,
  topLeftButtonLabel,
  topLeftButtonOnClick,
  topRightButtonLabel,
  topRightButtonOnClick,
  topRightButtonDisabled = false,
  topMiddleContent,
  paddingHorizontal = 15,
}) => {
  const showTopButtons =
    (!!topLeftButtonLabel && !!topLeftButtonOnClick) ||
    (!!topRightButtonLabel && !!topRightButtonOnClick) ||
    !!topMiddleContent

  const modal = (
    <Modal
      animationType="slide"
      presentationStyle="fullScreen"
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal, flex: 1 }}>
          {showTopButtons && (
            <FullScreenModalTopButtons
              leftLabel={topLeftButtonLabel}
              rightLabel={topRightButtonLabel}
              leftOnClick={topLeftButtonOnClick}
              rightOnClick={topRightButtonOnClick}
              topRightDisabled={topRightButtonDisabled}
              middleContent={topMiddleContent}
            />
          )}
          {children}
        </View>
      </SafeAreaView>
    </Modal>
  )
  return swipeToClose ? (
    <GestureRecognizer onSwipeDown={() => toggleModal(false)}>
      {modal}
    </GestureRecognizer>
  ) : (
    modal
  )
}

export default FullScreenModal
