import React from 'react';
import data from '../data.json';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import pages from '../pages';


class Narration extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        let str = null;
        let response = null;
        let isviolatingRules = false;
        let showElements = !this.props.isDefault;
        let stage = this.props.stage
        let page = this.props.page
        let maxPage = this.props.maxPage
        if(this.props.isDefault){
            str = data.pages[this.props.page].description;
        }else{
            str = data.pages[this.props.page].items[this.props.item].narration;
            response = data.pages[this.props.page].items[this.props.item].response;
            isviolatingRules = data.pages[this.props.page].items[this.props.item].violatingRules
        }




        return (
            <Box justifyContent="center">
                <Box display={stage == 0?'block' : 'none'}>
                    <h4>should be some description</h4>
                    <h4>{str}</h4>
                    <Box display={showElements?'block' : 'none'}>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            onClick={()=>{this.props.nextStage()}}>
                            This behavior violates the rule
                        </Button> 
                    </Box>
                </Box>
                <Box display={stage == 1?'block' : 'none'}> 
                    <h4>{response}</h4>
                    <Box display={isviolatingRules & (page+1<maxPage)?'block' : 'none'}>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            onClick={()=>{this.props.updatePage()}}>
                            Go to next Page
                        </Button> 
                    </Box>
                    <Box display={isviolatingRules & (page+1==maxPage)?'block' : 'none'}>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            onClick={() => this.props.goto(pages['SectionSelectionPage'])}>
                            Finish this section
                        </Button> 
                    </Box>
                </Box>
            </Box>
            
        )
    }


    // nextStage=()=>{
    //     const showResponse = this.state.showResponse
    //     this.setState({showResponse: !showResponse})
    // }


}

export default Narration;
