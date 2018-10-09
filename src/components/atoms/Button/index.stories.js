import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Button from '.'

storiesOf('Button', module)
  .add('using button tag', withInfo()(() => (
    <Button>Example Button</Button>
  )))
  .add('using link tag', withInfo()(() => (
    <Button href="#">Example Button</Button>
  )))
  .add('primary', withInfo()(() => (
    <Button href="#" primary>Example Button</Button>
  )))
  .add('primary inactive', withInfo()(() => (
    <Button href="#" primary inactive>Example Button</Button>
  )))
  .add('secondary', withInfo()(() => (
    <Button href="#" secondary>Example Button</Button>
  )))
  .add('secondary inactive', withInfo()(() => (
    <Button href="#" secondary inactive>Example Button</Button>
  )))
