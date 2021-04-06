import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import theme from './styles/theme';

import LandingPage from './pages/LandingPage';
import SectionSelectionPage from './pages/SectionSelectionPage';
import SectionPage from './pages/SectionPage';
import CompletePage from './pages/CompletePage';

import pages from './pages';
import DetailedToSPage from './pages/DetailedToSPage';

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
          hasSkipped: false,
          lastPageIndex: 0,
          startTime: 0,
          endTime: 0,
          totalTime: 0,
          isInteractive: false,
          truePositiveNum: 0,
          falsePositiveNum: 0
        },
        {
          sectionIndex: 1,
          hasViewed: false,
          hasAgreed: false,
          hasSkipped: false,
          lastPageIndex: 0,
          startTime: 0,
          endTime: 0,
          totalTime: 0,
          isInteractive: false,
          truePositiveNum: 0,
          falsePositiveNum: 0
        }
      ]
    }

    this.goto = this.goto.bind(this);
    this.setStartTime = this.setStartTime.bind(this);
    this.setEndTime = this.setEndTime.bind(this);
    this.setHasViewed = this.setHasViewed.bind(this);
    this.setHasAgreed = this.setHasAgreed.bind(this);
    this.setHasSkipped = this.setHasSkipped.bind(this);
    this.setPageIndex = this.setPageIndex.bind(this);
    this.setIsInteractive = this.setIsInteractive.bind(this);
    this.updateTrueNum = this.updateTrueNum.bind(this);
    this.updateFalseNum = this.updateFalseNum.bind(this);
  }

  // Callback functions for collecting userdata are claimed here
  // taking sectionIndex as parameter, just use the props.value
  
  // call this function when clicking the Section (1,2,3...) button
  setStartTime = (sectionIndex)=>{
    console.log('setStartTime');
    const userdata = [...this.state.userdata];
    const currentTime = new Date().getTime();
    console.log("section", sectionIndex)
    console.log("StartTime" , currentTime)
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, startTime: currentTime} : item),
    }
    )
  }

  // call this function when clicking the 'Skip' or 'Finish' button
  setEndTime=(sectionIndex)=>{
    console.log('setEndTime');
    const userdata = [...this.state.userdata];
    const currentTime = new Date().getTime();
    const startTime = this.state.userdata[sectionIndex].startTime;
    const totalTime = (currentTime - startTime) / 1000;
    console.log("section", sectionIndex)
    console.log("EndTime" , currentTime)
    console.log("TotalTime" , totalTime)
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, endTime: currentTime, totalTime: totalTime} : item),
    }
    )
  }

  // call this function when clicking Section (1,2,3...) page  
  setHasViewed=(sectionIndex)=>{
    console.log('setHasViewed');
    const userdata = [...this.state.userdata];
    console.log("section", sectionIndex)
    console.log("hasViewed", this.state.userdata[sectionIndex].hasViewed)
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, hasViewed: true} : item),
    }
    )
  }

  setHasSkipped=(sectionIndex)=> {
    console.log('setHasSkipped');
    let userdata = this.state.userdata;
    userdata[sectionIndex].hasSkipped = true;
    this.setState({userdata});
  }

  // call this function in the ToS page when clicking 'Agree'
  setHasAgreed=(sectionIndex)=>{
    console.log('setHasAgreed');
    const userdata = [...this.state.userdata];

    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, hasAgreed: true} : item),
    }
    )
  }

  // call this function when clicking the 'Skip' or 'Finish' button, taking current pageIndex as parameter 
  setPageIndex=(sectionIndex, pageIndex)=>{
    console.log('setPageIndex');
    const userdata = [...this.state.userdata];

    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, lastPageIndex: pageIndex} : item),
    }
    )
  }

  // not decided yet
  setIsInteractive=(sectionIndex)=>{
    console.log('setIsInteractive');
    const userdata = [...this.state.userdata];

    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, isInteractive: true} : item),
    }
    )
  }

  // call this function when choosing correct answer
  updateTrueNum=(sectionIndex)=>{
    console.log('updateTrueNum');
    const userdata = [...this.state.userdata];
    const truePositiveNum = this.state.userdata[sectionIndex].truePositiveNum;
    console.log("section", sectionIndex)
    console.log("truePositiveNum", truePositiveNum)
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, truePositiveNum: truePositiveNum + 1} : item),
    }
    )
  }

  // call this function when choosing wrong answer
  updateFalseNum=(sectionIndex)=>{
    console.log('updateFalseNum');
    const userdata = [...this.state.userdata];
    const falsePositiveNum = this.state.userdata[sectionIndex].falsePositiveNum;
    this.setState({
      userdata: userdata.map((item,idx) => idx === sectionIndex? {...item, falsePositiveNum: falsePositiveNum + 1} : item),
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
        return <LandingPage goto={this.goto} />;
    
      case pages['SectionSelectionPage']:
        return <SectionSelectionPage goto={this.goto} 
          setStartTime={this.setStartTime}
          setHasViewed={this.setHasViewed}
        />;
        
      case pages['SectionPage']:
        return <SectionPage goto={this.goto} value={this.state.sectionIndex} 
            updateFalseNum={this.updateFalseNum}
            updateTrueNum={this.updateTrueNum} 
            setEndTime={this.setEndTime}
            setPageIndex={this.setPageIndex}
            setHasAgreed={this.setHasAgreed}
            setIsInteractive={this.setIsInteractive}
            setHasSkipped={this.setHasSkipped}
            userdata = {this.state.userdata}
        />;

      case pages['CompletePage']:
        return <CompletePage goto={this.goto}/>;

      case pages['DetailedToSPage']:
        return <DetailedToSPage goto={this.goto} 
        setHasAgreed={this.setHasAgreed}
        value={this.state.sectionIndex}/>

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
