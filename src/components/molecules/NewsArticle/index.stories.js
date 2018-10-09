import React from 'react'
import { storiesOf } from '@storybook/react'

import NewsArticle from '.'

storiesOf('NewsArticle', module)
  .add('default', () => (
    <NewsArticle />
  ))
