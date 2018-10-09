import React from 'react'

import './styles.scss'

import LazyImage from '../../atoms/LazyImage'
import PageTemplate from '../../templates/PageTemplate/index'
import Header from '../../organisms/Header'

const MarksDrawingsPage = () => (
  <PageTemplate
    header={<Header />}
  >
    <div className="marks-drawings__wrapper">
      <LazyImage className="marks-drawing__img" dataSrc="/media/images/best druid.png" alt="mad paint skills" />
      <p className="marks-drawings__heading">Made by Joe, age 19</p>
      <LazyImage className="marks-drawing__img" dataSrc="/media/images/fetid strat by joe.png" alt="#joe4RL" />
      <p className="marks-drawings__heading">Made by Joe, age 19</p>
      <LazyImage className="marks-drawing__img" dataSrc="/media/images/marks drawing 3.png" alt="mark is an artist" />
      <p className="marks-drawings__heading">Made by Mark, age 24</p>
      <LazyImage className="marks-drawing__img" dataSrc="/media/images/mark drawing 2.png" alt="mark is an artist" />
      <p className="marks-drawings__heading">Made by Mark, age 24</p>
      <LazyImage className="marks-drawing__img" dataSrc="/media/images/marks drawing.png" alt="mark is an artist" />
      <p className="marks-drawings__heading">Made by Mark, age 23</p>
    </div>
  </PageTemplate>
)

export default MarksDrawingsPage
