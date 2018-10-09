import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import LazyImage from '.'

storiesOf('LazyImage', module)
  .add('default', withInfo()(() => (
    <LazyImage alt="Lazyloaded" />
  )))
