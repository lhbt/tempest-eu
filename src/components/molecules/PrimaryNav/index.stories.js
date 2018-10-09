import React from 'react'
import { storiesOf } from '@storybook/react'

import PrimaryNav from '.'

storiesOf('PrimaryNav', module)
  .add('default', () => (
    <PrimaryNav />
  ))
