import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

import Heading from '../../atoms/Heading'

const Recruitment = ({
  className,
  ...props
}) => {
  const componentClasses = classNames('recruitment', className)
  const recruitmentClasses = require('../../../services/recruitment.json')

  return (
    <div className={componentClasses} {...props}>
      <Heading className="recruitment__heading" level={3}>Recruitment Status:</Heading>
      {
        recruitmentClasses.length === 0 ?
          (
            <p className="recruitment__text">
              Recruitment closed at the moment!
            </p>
          ) : (
          recruitmentClasses.map((recruitmentClass) => {
            const recruitmentClassName = recruitmentClass.name.toLowerCase().replace(' ', '')
            return (
              <div className="recruitment-row">
                <div className="recruitment-row__icon-wrapper">
                  <img
                    src={`/media/icons/icon_class_${recruitmentClassName}.png`}
                    alt={recruitmentClass.name}
                  />
                </div>
                <p className={`recruitment-row__class-name ${recruitmentClassName}`}>{recruitmentClass.name}</p>
                <div className="recruitment-row__class-spec">
                  {
                    recruitmentClass.specs.map((spec) => {
                      const iconClassName = `recruitment-row__class_spec-icon ${spec.priority}`
                      return (
                        <img
                          className={iconClassName}
                          src={`/media/icons/icon_${recruitmentClassName}_${spec.name.toLowerCase().replace(' ', '')}.png`}
                          alt={spec.name}
                        />
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        )
      }
      <div className="recruitment-priority">
        <p className="recruitment-priority__text low">Low</p>
        <p className="recruitment-priority__text medium">Medium</p>
        <p className="recruitment-priority__text high">High</p>
      </div>
    </div>
  )
}

Recruitment.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    specs: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      priority: PropTypes.string,
    })),
  })),
}

Recruitment.defaultProps = {
  classes: [
    {
      name: 'Warrior',
      specs: [
        {
          name: 'Arms',
          priority: 'high',
        },
        {
          name: 'Protection',
          priority: 'low',
        },
      ],
    },
    {
      name: 'Priest',
      specs: [
        {
          name: 'Discipline',
          priority: 'medium',
        },
      ],
    },
    {
      name: 'Shaman',
      specs: [
        {
          name: 'Enhancement',
          priority: 'high',
        },
        {
          name: 'Elemental',
          priority: 'low',
        },
      ],
    },
  ],
}

export default Recruitment
