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
        {/* <div>
          <LazyImage className="marks-drawing__img" dataSrc="/media/images/best druid.png" alt="mad paint skills" />
          <p className="guild-drawings__heading">Made by Joe, age 19</p>
        </div>
        <div>
          <LazyImage className="marks-drawing__img" dataSrc="/media/images/fetid strat by joe.png" alt="#joe4RL" />
          <p className="guild-drawings__heading">Made by Joe, age 19</p>
        </div>
        <div>
          <LazyImage className="marks-drawing__img" dataSrc="/media/images/marks drawing 3.png" alt="mark is an artist" />
          <p className="guild-drawings__heading">Made by Mark, age 24</p>
        </div>
        <div>
          <LazyImage className="marks-drawing__img" dataSrc="/media/images/mark drawing 2.png" alt="mark is an artist" />
          <p className="guild-drawings__heading">Made by Mark, age 24</p>
        </div>
        <div>
          <LazyImage className="marks-drawing__img" dataSrc="/media/images/marks drawing.png" alt="mark is an artist" />
          <p className="guild-drawings__heading">Made by Mark, age 23</p>
        </div> */}
      </div>
    </PageTemplate>
  )
}

export default GuildDrawingsPage
