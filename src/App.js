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
      userdata:[
        {
          sectionIndex: 0,
          hasViewed: false,
          hasAgreed: false,
          lastPageIndex: 0,
          startTime: " ",
          endTime: " ",
          isInteractive: false,
          truePositiveNum: 0,
          falsePositiveNum: 0
        },
        {
          sectionIndex: 1,
          hasViewed: false,
          hasAgreed: false,
          lastPageIndex: 0,
          startTime: " ",
          endTime: " ",
          isInteractive: false,
          truePositiveNum: 0,
          falsePositiveNum: 0
        }
      ]
    }

    this.goto = this.goto.bind(this);
  }

  // Callback functions for collecting userdata are claimed here
  // taking sectionIndex as parameter, just use the props.value
  
  // call this function when clicking the Section (1,2,3...) button
  setStartTime=(sectionIndex)=>{
    sectionIndex--;
    const userdata = [...this.state.userdata];
    const currentTime = new Date().toLocaleTimeString();
    console.log("section", sectionIndex)
    console.log("StartTime" , currentTime)
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, startTime: currentTime} : item),
    }
    )
  }

  // call this function when clicking the 'Skip' or 'Finish' button
  setEndTime=(sectionIndex)=>{
    sectionIndex--;
    const userdata = [...this.state.userdata];
    const currentTime = new Date().toLocaleTimeString();
    console.log("section", sectionIndex)
    console.log("EndTime" , currentTime)
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, endTime: currentTime} : item),
    }
    )
  }

  // call this function when clicking Section (1,2,3...) page  
  setHasViewed=(sectionIndex)=>{
    sectionIndex--;
    const userdata = [...this.state.userdata];

    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, hasViewed: true} : item),
    }
    )
  }

  // call this function in the ToS page when clicking 'Agree'
  setHasAgreed=(sectionIndex)=>{
    sectionIndex--;
    const userdata = [...this.state.userdata];

    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, hasAgreed: true} : item),
    }
    )
  }

  // call this function when clicking the 'Skip' or 'Finish' button, taking current pageIndex as parameter 
  setPageIndex=(sectionIndex, pageIndex)=>{
    sectionIndex--;
    const userdata = [...this.state.userdata];

    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, lastPageIndex: pageIndex} : item),
    }
    )
  }

  // not decided yet
  setIsInteractive=(sectionIndex)=>{
    sectionIndex--;
    const userdata = [...this.state.userdata];

    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, isInteractive: true} : item),
    }
    )
  }

  // call this function when choosing correct answer
  updateTrueNum=(sectionIndex)=>{
    sectionIndex--;
    const userdata = [...this.state.userdata];
    const truePositiveNum = this.state.sectionIndex[sectionIndex].truePositiveNum;
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, truePositiveNum: truePositiveNum} : item),
    }
    )
  }

  // call this function when choosing wrong answer
  updateFalseNum=(sectionIndex)=>{
    sectionIndex--;
    const userdata = [...this.state.userdata];
    const falsePositiveNum = this.state.sectionIndex[sectionIndex].falsePositiveNum;
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, falsePositiveNum: falsePositiveNum} : item),
    }
    )
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
        return <SectionSelectionPage goto={this.goto} />;
        
      case pages['SectionPage']:
        return <SectionPage goto={this.goto} value={this.state.sectionIndex} 
            updateFalseNum={this.updateFalseNum}
            updateTrueNum={this.updateTrueNum} 
            setStartTime={this.setStartTime}
            setEndTime={this.setEndTime}
            setPageIndex={this.setPageIndex}
            setHasAgreed={this.setHasAgreed}
            setHasViewed={this.setHasViewed}
            setIsInteractive={this.setIsInteractive} userdata = {this.state.userdata}/>;

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
