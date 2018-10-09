import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

import NewsArticle from '../../molecules/NewsArticle'

const NewsContainer = ({
  className,
  ...props
}) => {
  const componentClasses = classNames('news-container', className)
  const news = require('../../../services/news.json')
  return (
    <div className={componentClasses} {...props}>
      {news.map((article) => {
        return (
          <NewsArticle article={article} />
        )
      })}
    </div>
  )
}

NewsContainer.propTypes = {
  className: PropTypes.string,
}

NewsContainer.defaultProps = {}

export default NewsContainer
