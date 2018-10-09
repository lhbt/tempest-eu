import React from 'react'
import { storiesOf } from '@storybook/react'

import BurgerButton from '.'

storiesOf('BurgerButton', module)
  .add('default', () => (
    <BurgerButton />
  ))
