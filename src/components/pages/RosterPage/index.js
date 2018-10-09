import React from 'react'

import './styles.scss'

import PageTemplate from '../../templates/PageTemplate/index'
import Header from '../../organisms/Header'
import RosterCategory from '../../organisms/RosterCategory'

const RosterPage = () => {
  const roster = require('../../../services/roster.json')
  console.log(roster)
  return (
    <PageTemplate
      header={<Header />}
    >
      <div className="roster-page__wrapper">
        {roster.map((category) => {
          return (
            <RosterCategory category={category} />
          )
        })}
      </div>

    </PageTemplate>
  )
}

export default RosterPage
