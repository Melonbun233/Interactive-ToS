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
                <Box border={1} justifyContent="center" display="flex" height={400} width={1000}>
                    <DisplayArea 
                     page={this.state.page}
                     maxPage = {maxPage}
                     updateItem={this.updateItem}/>
                </Box>
                <Box border={1} justifyContent="center" display="flex" height={160} width={1000}>
                    <Narration 
                    page={this.state.page} 
                    item={this.state.item} 
                    stage={this.state.stage}
                    isDefault={this.state.isDefault} 
                    maxPage = {maxPage} 
                    goto = {this.props.goto}
                    updatePage = {this.updatePage} 
                    nextStage = {this.nextStage} />
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