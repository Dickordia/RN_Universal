import React, { ReactChild } from 'react'

import {Link as DOMLink } from 'react-router-dom'
import {TouchableOpacity} from 'react-native'
import { LinkProps } from './models'

const Link = (props: LinkProps) => {
  return <DOMLink to={props.routeName}>
           {props.children}
          </DOMLink>
}

export { Link }
