import React from 'react'
import MainPage from '../pages/MainPage'
import { HashRouter, Route, Switch } from 'react-router-dom'
import VerifyContent from './MainPage/Main/VerifyContent'
import SettingsContent from './MainPage/SettingsContent'
import HelpContent from './MainPage/HelpContent'
import HomeContent from './MainPage/Home'

export default () =>
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => (
        <MainPage>
          <HomeContent />
        </MainPage>
      )} />
      <Route path="/main" render={() => (
        <MainPage>
          <VerifyContent />
        </MainPage>
      )} />
      <Route path="/settings" render={() => (
        <MainPage>
          <SettingsContent />
        </MainPage>
      )} />
      <Route path="/help" render={() => (
        <MainPage>
          <HelpContent />
        </MainPage>
      )} />
    </Switch>
  </HashRouter> 