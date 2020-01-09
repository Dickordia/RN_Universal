import React, { ReactChild } from 'react'
import Button from '@material-ui/core/Button';

import {Link as DOMLink } from 'react-router-dom'
import {TouchableOpacity} from 'react-native'
import { LinkProps } from './models'

const Link = (props: LinkProps) => {
  console.log('STYLE')
  console.log(props.style)
  return <Button style={{width: 280}}
                 variant='contained'
                 color='primary'
                 component={DOMLink}
                 to={props.routeName}>
          {props.text}
         </Button>
}

export { Link }
