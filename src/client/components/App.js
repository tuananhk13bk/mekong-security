import React from 'react'
import MainPage from '../layout/MainPage'
import { HashRouter, Route, Switch } from 'react-router-dom'
import VerifyContent from './VerifyContent/VerifyContent'
import SettingsContent from './SettingsContent/SettingsContent'
import HelpContent from './HelpContent/HelpContent'
import OrderListContentContainer from '../containers/OrderListContent/OrderListContentContainer'
import styled, { keyframes } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const Page = styled.div`
  
`;

const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;
const DetailsPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
  }
`;

const App = () => {
  return (
    <HashRouter>
      <Route
        render={({ location }) => {
          return (
            <MainPage>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.pathname}
                >
                  <Switch location={location}>
                    <Route exact path="/" render={() => {
                      return (
                          <HomePageElm>
                            <OrderListContentContainer />
                          </HomePageElm>
                      )
                    }} />
                    <Route exact path="/main" render={() => {
                      return (
                        <DetailsPageElm>
                          <VerifyContent/>
                        </DetailsPageElm>
                      )
                    }} />
                    <Route exact path="/settings" render={() => {
                      return (
                        <DetailsPageElm>
                          <SettingsContent/>
                        </DetailsPageElm>
                      )
                    }} />
                    <Route exact path="/help" render={() => {
                      return (
                        <DetailsPageElm>
                          <HelpContent/>
                        </DetailsPageElm>
                      )
                    }} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </MainPage>
          );
        }}
      />
    </HashRouter>
  );
}
export default App