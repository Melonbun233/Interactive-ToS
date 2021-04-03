import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import theme from './styles/theme';

import LandingPage from './pages/LandingPage';
import SectionSelectionPage from './pages/SectionSelectionPage';
import SectionPage from './pages/SectionPage';
import CompletePage from './pages/CompletePage';

import pages from './pages';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPage:pages['LandingPage'],
      shouldBlockTransition:false,
      sectionIndex:0,
    }

    this.goto = this.goto.bind(this);
  }

  componentDidMount() {
    // prevent users from refreshing and back when they are testing
    window.addEventListener('beforeunload', this.beforeunload.bind(this));
  }

  beforeunload(e) {
    if (this.state.shouldBlockTransition) {
      e.preventDefault();
      e.returnValue = true;
    }
  }

  // extra value is used when the destination is SectionPage
  goto(page, value) {
    let shouldBlockTransition = page != pages['LandingPage'];

    this.setState({
      currentPage:page,
      shouldBlockTransition,
      sectionIndex: value,
    });

    console.log('goto page ' + page);
  }

  renderSwitch() {
    switch (this.state.currentPage) {
      case pages['LandingPage']:
        return <LandingPage goto={this.goto}/>;
    
      case pages['SectionSelectionPage']:
        return <SectionSelectionPage goto={this.goto}/>;
        
      case pages['SectionPage']:
        return <SectionPage goto={this.goto} value={this.state.sectionIndex}/>;

      case pages['CompletePage']:
        return <CompletePage goto={this.goto}/>;

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
