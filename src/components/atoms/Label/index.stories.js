import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Label from '.'

storiesOf('Label', module)
  .add('default', withInfo()(() => (
    <Label>Hello</Label>
  )))
