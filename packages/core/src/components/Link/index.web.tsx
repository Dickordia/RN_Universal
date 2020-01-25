import React from 'react'

import {LinkProps} from './models'
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

export const Link = (props: LinkProps) => {
  const {push} = useHistory();
  const {goBack} = useHistory();

  const handleClick = (props: LinkProps) => {
    if (props.onPress) {
      props.onPress( () => {
        if (props.routeName) {
          push(props.routeName)}
        }
      )
    } else if (props.routeName) {
      push(props.routeName)
    } else {
      goBack();
    }
  };

  return (
    <Button variant='contained'
            color='primary'
            disabled={props.disabled || false}
            onClick={() => handleClick(props)}>
      {props.text}
    </Button>
  )
};
