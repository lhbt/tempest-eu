import React from 'react'
import { storiesOf } from '@storybook/react'

import Recruitment from '.'

storiesOf('Recruitment', module)
  .add('default', () => (
    <Recruitment />
  ))
