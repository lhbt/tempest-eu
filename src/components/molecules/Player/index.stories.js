import React from 'react'
import { storiesOf } from '@storybook/react'

import Player from '.'

storiesOf('Player', module)
  .add('default', () => (
    <Player />
  ))
