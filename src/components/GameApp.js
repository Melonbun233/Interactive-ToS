import React from 'react';
import data from '../data.json';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import Narration from './Narration';
import DisplayArea from './DisplayArea';

function getTotalPage(jsonData){
    　　var jsonLength = 0;
    　　for(var item in jsonData){
    　　　　if(item == 'pages'){
    　　　　　　for(var x in jsonData[item]){
    　　　　　　　　jsonLength++;
    　　　　　　}
    　　　　}
    　　}
      return jsonLength;
    }

class GameApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            page: 0,
            item: 0,
            // if no item selected, shows the description
            isDefault: true,
            stage: 0,
        }
    }

    render(){
        let maxPage = getTotalPage(data);

        return (
            <div>
                <Box border={1} width='100%'>
                    <DisplayArea 
                      sectionIndex={this.props.section - 1} // pass the section index
                    />
                </Box>
            </div>
        )
    }

    updatePage=()=>{
        const iPage = this.state.page
        this.setState({
            page: iPage+1,
            isDefault:true,
            stage:0
        })
    } 

    updateItem=(newItem)=>{
        console.log('name',newItem)
        const iItem = newItem
        this.setState({
            item: iItem,
            isDefault: false,
            stage: 0
        })
    } 

    nextStage=()=>{
        const stage = this.state.stage
        this.setState({
            stage: stage+1
        })
    } 
}

export default GameApp;