import React, { ReactNode } from 'react'
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native'
import CloseButton from './CloseButton'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

interface HeaderModalProps {
  withFilter?: boolean
  withCloseButton?: boolean
  closeButtonImage?: ImageSourcePropType
  closeButtonStyle?: StyleProp<ViewStyle>
  closeButtonImageStyle?: StyleProp<ImageStyle>
  onClose(): void
  renderFilter(props: HeaderModalProps): ReactNode
}
export const HeaderModal = ({
  withFilter,
  withCloseButton = true,
  closeButtonImage,
  closeButtonStyle,
  closeButtonImageStyle,
  onClose,
  renderFilter,
  ...restProps
}: HeaderModalProps) => {
  return (
    <View style={styles.container}>
      {withCloseButton && (
        <CloseButton
          image={closeButtonImage}
          style={closeButtonStyle}
          imageStyle={closeButtonImageStyle}
          onPress={() => onClose()}
        />
      )}
      {withFilter && renderFilter({
        withFilter,
        withCloseButton,
        closeButtonImage,
        closeButtonStyle,
        closeButtonImageStyle,
        onClose,
        renderFilter,
        ...restProps
      })}
    </View>
  )
}
