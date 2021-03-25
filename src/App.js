import './styles/App.css';
import React from 'react';
import Landing from './Landing';
import SectionSelection from './SectionSelection';
import Section from './Section';
import End from './End';

export const pages = {
  Landing: 0, 
  SectionSelect: 1,
  Section1: 2,
  End: 3,
};

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPage:pages['Landing'],
    }
  }

  goto(page) {
    this.setState({currentPage:page});
  }

  render() {
    switch (this.state.currentPage) {
      case pages['Landing']:
        return <Landing goto={()=>this.goto()}/>;
    
      case pages['SectionSelect']:
        return <SectionSelection goto={()=>this.goto()}/>;
        
      case pages['Section']:
        return <Section goto={()=>this.goto()}/>;

      case pages['End']:
        return <End goto={()=>this.goto()}/>;

      default:
        return <h1> Invalid Page Index</h1>
    }
  }
}
