import React from 'react'
import { Helmet } from 'react-helmet'
import ImageZoom from 'react-medium-image-zoom'

import './styles.scss'

import LazyImage from '../../atoms/LazyImage'
import PageTemplate from '../../templates/PageTemplate/index'
import Header from '../../organisms/Header'

const GuildDrawingsPage = () => {
  const drawings = require('../../../services/drawings.json')
  return (
    <PageTemplate
      header={<Header />}
    >
      <Helmet>
          <title>Tempest Guild - Drawings</title>
        </Helmet>
      <div className="guild-drawings__wrapper">
        {drawings.map((article) => {
          return (
            <div>
              <ImageZoom
                image={{
                  src: article.img,
                  alt: article.title,
                }}
                zoomImage={{
                  src: article.img,
                  alt: article.title,
                }}  
              />
              <p className="guild-drawings__heading">{article.title} - {article.caption}</p>
            </div>
          )
        })}
      </div>
    </PageTemplate>
  )
}

export default GuildDrawingsPage
