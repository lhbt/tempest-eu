import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Icon from '.'

storiesOf('Icon', module)
  .add('logo', withInfo()(() => (
    <Icon icon="logo" width="47" height="46" fill="#f68744" />
  )))
  .add('plus-circle', withInfo()(() => (
    <Icon icon="plus-circle" width="24" height="24" />
  )))
  .add('minus-circle', withInfo()(() => (
    <Icon icon="minus-circle" width="24" height="24" />
  )))
  .add('plus', withInfo()(() => (
    <Icon icon="plus" width="20" height="20" viewBox="0 0 20 20" transform="translate(3 3)" />
  )))
  .add('minus', withInfo()(() => (
    <Icon icon="minus" width="20" height="20" viewBox="0 0 20 20" transform="translate(3 9)" />
  )))
  .add('filter', withInfo()(() => (
    <Icon icon="filter" width="19" height="16" />
  )))
  .add('phone', withInfo()(() => (
    <Icon icon="phone" width="18" height="24" />
  )))
  .add('views', withInfo()(() => (
    <Icon icon="views" width="16" height="11" />
  )))
  .add('star', withInfo()(() => (
    <Icon icon="star" width="14" height="13" />
  )))
  .add('studio', withInfo()(() => (
    <Icon icon="studio" width="32" height="32" viewBox="0 0 32 32" transform="translate(9 6)" />
  )))
  .add('halls', withInfo()(() => (
    <Icon icon="halls" width="32" height="32" viewBox="0 0 32 32" transform="translate(0 4)" />
  )))
  .add('flat', withInfo()(() => (
    <Icon icon="flat" width="32" height="32" viewBox="0 0 32 32" transform="translate(8 5)" />
  )))
  .add('house', withInfo()(() => (
    <Icon icon="house" width="32" height="32" viewBox="0 0 32 32" transform="translate(5 10)" />
  )))
  .add('arrow', withInfo()(() => (
    <Icon icon="arrow" width="18" height="18" viewBox="0 0 18 18" transform="translate(5)" />
  )))
  .add('arrow-back', withInfo()(() => (
    <Icon icon="arrow-back" width="8" height="14" viewBox="0 0 8 14" />
  )))
  .add('map-pin', withInfo()(() => (
    <Icon icon="map-pin" width="11" height="15" />
  )))
  .add('bed', withInfo()(() => (
    <Icon icon="bed" width="16" height="17" viewBox="0 0 16 17" transform="translate(0 3)" />
  )))
  .add('tick', withInfo()(() => (
    <Icon icon="tick" width="12" height="12" viewBox="0 0 12 12" />
  )))
  .add('cross-small', withInfo()(() => (
    <Icon icon="cross-small" width="12" height="12" viewBox="0 0 12 12" />
  )))
  .add('cross', withInfo()(() => (
    <Icon icon="cross" width="20" height="20" viewBox="0 0 20 20" transform="translate(2 2)" />
  )))
  .add('alert', withInfo()(() => (
    <Icon icon="alert" width="22" height="22" viewBox="0 0 22 22" transform="translate(9 5)" />
  )))
  .add('favourite', withInfo()(() => (
    <Icon icon="favourite" width="20" height="20" viewBox="0 0 20 20" transform="translate(0 2)" />
  )))
  .add('facebook', withInfo()(() => (
    <Icon icon="facebook" width="16" height="26" />
  )))
  .add('twitter', withInfo()(() => (
    <Icon icon="twitter" width="30" height="25" />
  )))
  .add('instagram', withInfo()(() => (
    <Icon icon="instagram" width="26" height="26" />
  )))
