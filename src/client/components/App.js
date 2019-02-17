import React from 'react'
import MainScreen from '../screens/MainScreen'
import { HashRouter, Route, Switch } from 'react-router-dom'
import VerifyContent from './MainScreen/Main/VerifyContent'
import SettingsContent from './MainScreen/SettingsContent'
import HelpContent from './MainScreen/HelpContent'
import HomeContent from '../components/MainScreen/Home'

export default () =>
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => (
        <MainScreen>
          <HomeContent />
        </MainScreen>
      )} />
      <Route path="/main" render={() => (
        <MainScreen>
          <VerifyContent />
        </MainScreen>
      )} />
      <Route path="/settings" render={() => (
        <MainScreen>
          <SettingsContent />
        </MainScreen>
      )} />
      <Route path="/help" render={() => (
        <MainScreen>
          <HelpContent />
        </MainScreen>
      )} />
    </Switch>
  </HashRouter> 