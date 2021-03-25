import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import theme from './theme';

import LandingPage from './pages/LandingPage';
import SectionSelectionPage from './pages/SectionSelectionPage';
import SectionPage from './pages/SectionPage';
import CompletePage from './pages/CompletePage';

export const pages = {
  LandingPage: 0, 
  SectionSelectPage: 1,
  SectionPage: 2,
  CompletePage: 3,
};

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPage:pages['LandingPage'],
    }
  }

  goto(page) {
    this.setState({currentPage:page});
  }

  renderSwitch() {
    switch (this.state.currentPage) {
      case pages['LandingPage']:
        return <LandingPage goto={()=>this.goto()}/>;
    
      case pages['SectionSelectPage']:
        return <SectionSelectionPage goto={()=>this.goto()}/>;
        
      case pages['SectionPage']:
        return <SectionPage goto={()=>this.goto()}/>;

      case pages['CompletePage']:
        return <CompletePage goto={()=>this.goto()}/>;

      default:
        return <h1> Invalid Page Index</h1>
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.renderSwitch()}
      </ThemeProvider>
      
    );
  }
}
