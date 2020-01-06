import React, {ReactChild, useCallback} from 'react'

import {useNavigation} from '@react-navigation/core'
import {TouchableOpacity} from 'react-native'

import {LinkProps} from './models'

const Link = (props: LinkProps) => {
  const {routeName} = props
  const navigation = useNavigation()

  const navigate = useCallback(() => {
    navigation.navigate(routeName)
  }, [routeName])

  return (
    <TouchableOpacity style={props.style}
                      accessibilityRole="button"
                      onPress={navigate}>
      {props.children}
    </TouchableOpacity>
  )
}

export { Link }
