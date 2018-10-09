import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from './components/pages/HomePage'
import RosterPage from './components/pages/RosterPage'
import RecruitmentPage from './components/pages/RecruitmentPage'
import GuildDrawingsPage from './components/pages/GuildDrawingsPage'

export default
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/roster" exact component={RosterPage} />
    <Route path="/recruitment" exact component={RecruitmentPage} />
    <Route path="/guild-drawings" component={GuildDrawingsPage} />
  </Switch>
