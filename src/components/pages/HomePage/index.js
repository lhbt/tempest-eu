import React from 'react'
import { Helmet } from 'react-helmet'

import './styles.scss'

import PageTemplate from '../../templates/PageTemplate/index'
import Header from '../../organisms/Header'
import NewsContainer from '../../organisms/NewsContainer'
import Recruitment from '../../organisms/Recruitment'

const HomePage = () => (
  <PageTemplate
    className="homepage"
    header={<Header />}
    >
    <Helmet>
      <title>Tempest Guild</title>
    </Helmet>
    <div className="homepage__wrapper">
      <div className="homepage__left-column">
        <Recruitment />
      </div>
      <div className="homepage__right-column">
        <NewsContainer />
      </div>
    </div>
  </PageTemplate>
)

export default HomePage
