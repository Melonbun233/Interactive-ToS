import React from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';

class DisplayAera extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Box> 
                <h4>page: {this.props.page+1}/{this.props.maxPage}</h4>
                <Button onClick={() => {this.props.updateItem(0)}}> the item 1</Button>
                <Button onClick={() => {this.props.updateItem(1)}}> the item 2</Button>
                <Button onClick={() => {this.props.updateItem(2)}}> the item 3</Button>
                <Button onClick={() => {this.props.updateItem(3)}}> the item 4</Button>
            </Box>
        )

    }
}

export default DisplayAera;