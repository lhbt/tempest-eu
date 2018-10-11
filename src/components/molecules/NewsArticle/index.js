import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Youtube from 'react-youtube'
import ImageZoom from 'react-medium-image-zoom'

import './styles.scss'

import Heading from '../../atoms/Heading'

const NewsArticle = ({
  className,
  article,
  ...props
}) => {
  const componentClasses = classNames('news-article', className)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className={componentClasses} {...props}>
      <Heading className="news-article__heading" level={2}>{article.title}</Heading>
      {article.img && 
        <ImageZoom 
          className="news-article__img" 
          image={{
            src: article.img,
            alt: article.title,
          }}
          zoomImage={{
            src: article.img,
            alt: article.title,
          }} 
        />}
      {article.video && <Youtube videoId={article.video} opts={opts} />}
      <p className="news-article__content">{article.text}</p>
    </div>
  )
}

NewsArticle.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object.isRequired,
}

NewsArticle.defaultProps = {
  article: {
    title: 'Some title',
    text: 'Some text, preferably a long one because this is text after all',
    img: 'http://via.placeholder.com/800x600',
  },
}

export default NewsArticle
