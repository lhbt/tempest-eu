import React from 'react'
import { Helmet } from 'react-helmet'

import './styles.scss'

import PageTemplate from '../../templates/PageTemplate/index'
import Header from '../../organisms/Header'
import Heading from '../../atoms/Heading'

const RecruitmentPage = () => (
  <PageTemplate
    header={<Header />}
  >
    <Helmet>
        <title>Tempest Guild - Recruitment</title>
      </Helmet>
    <div className="recruitment-page__main">
      <Heading level={1} className="recruitment-page__main-heading">Recruitment</Heading>
      <Heading level={2} className="recruitment-page__secondary-heading">Our goals</Heading>
      <p className="recruitment-page__paragraph">Our goals are to be a stable, progressive and proficient guild and community who are capable of clearing the content Blizzard has to offer within our relaxed schedule. Ideally before any nerfs to reductions to the encounters.</p>
      <Heading level={2} className="recruitment-page__secondary-heading">Raiding schedule</Heading>
      <p className="recruitment-page__paragraph">During progress we raid 3 days a week. <strong>(During the first week {'we\'ll'} raid 5 nights, drop down to 4 the second week before returning to our much more relaxed 3 nights for the remainder of the tier on the third week)</strong></p>
      <ul className="recruitment-page__list">
        <li><p className="recruitment-page__paragraph list"><strong>Wednesday:</strong> 20:00 - 23:30</p></li>
        <li><p className="recruitment-page__paragraph list"><strong>Thursday:</strong> 20:00 - 23:30</p></li>
        <li><p className="recruitment-page__paragraph list"><strong>Sunday:</strong> 20:00 - 23:30</p></li>
      </ul>
      <p className="recruitment-page__paragraph">During farm our schedule is usually one or two of the above days while also offering an optional “boost” run on Sundays to earn a little extra gold.</p>
      <Heading level={2} className="recruitment-page__secondary-heading">What we expect of you</Heading>
      <p className="recruitment-page__paragraph"><strong>Attendance:</strong> We maintain a reasonably tight roster and as a result expect all of our raiders to keep a high record of attendance. We prefer to have a smaller committed raid group.</p>
      <p className="recruitment-page__paragraph"><strong>Dedication:</strong> You must have a positive and passionate attitude towards raiding and World of Warcraft as a whole. We encourage our players to be competitive when it comes to mastering their chosen class and to be forever working towards achieving that. Our players must be patient during progression raiding and willing to learn from constructive criticism in order to maximise performance.</p>
      <p className="recruitment-page__paragraph"><strong>Alts:</strong> Every raider is expected to have one alt ready for split raiding. It is also possible that players would be asked to play these characters on progression if an encounter demands it.</p>
      <Heading level={2} className="recruitment-page__secondary-heading">Application process</Heading>
      <p className="recruitment-page__paragraph">If we are satisfied with your application we will offer you a trial spot. The trial period normally lasts for 4-6 lockouts with the option to be extended if we deem necessary. During your trial you will be evaluated on your performance in raids, your general contribution to the guild as a whole, which includes your social interactions. We are only interested in players that can help our guild progress and develop.</p>
      <Heading level={2} className="recruitment-page__secondary-heading">Applying</Heading>
      <p className="recruitment-page__paragraph">To apply, first register and create an account on our forum. You can reach our forum by clicking on the menu bar, or by clicking on <a href="http://www.tempest-guild.co.uk/forum">this link</a>. Once you’re registered you can click on the “Application Form” button located beneath the guild logo. Please note that all applications are private, no one other than yourself and the select players in our guild used for reviewing can see them.</p>
      <p className="recruitment-page__paragraph important">Important - before filling out the form: make sure you have your answers written in a separate document, copy paste them in, and more importantly - login to the forum with the {'"remember me"'} option enabled!</p>
    </div>
  </PageTemplate>
)

export default RecruitmentPage
