import React from 'react'
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
    <div className="homepage__wrapper">
      <div className="homepage__left-column">
        <Recruitment className="homepage__recruitment" />
      </div>
      <div className="homepage__right-column">
        <NewsContainer />
      </div>
    </div>
  </PageTemplate>
)

export default HomePage
