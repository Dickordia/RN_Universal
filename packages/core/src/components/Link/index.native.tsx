import React, {ReactChild, useCallback} from 'react'

import {useNavigation} from '@react-navigation/core'
import {TouchableOpacity,Text} from 'react-native'

import {LinkProps} from './models'

const Link = (props: LinkProps) => {
  const {routeName} = props
  const navigation = useNavigation()

  const navigate = useCallback(() => {

  }, [routeName])

  return (
    <TouchableOpacity accessibilityRole="button"
                      onPress={navigate}>
      <Text>{props.text}</Text>

    </TouchableOpacity>
  )
}

export { Link }
