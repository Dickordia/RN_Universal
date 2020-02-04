import React, {ReactChild, useCallback} from 'react'

import {useNavigation} from '@react-navigation/core'
import {TouchableOpacity,Text} from 'react-native'

import {LinkProps} from './models'

const Link = (props: LinkProps) => {
  const {routeName} = props
  const navigation = useNavigation()

  const navigate = useCallback(() => {
    if (props.onPress) {
      props.onPress( () => {
        if (props.routeName) {
          navigation.navigate(props.routeName)
        }
      })
    } else if (props.routeName) {
      navigation.navigate(props.routeName)

    } else {
      navigation.goBack()
    }

  }, [routeName])

  return (
    <TouchableOpacity accessibilityRole="button"
                      onPress={navigate}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  )
}

export { Link }
