//@flow
import React, {Component} from 'react';
// import * as utils from "../actions";
import {Grid, Button} from 'semantic-ui-react'

class Buttons extends Component<{}> {
    render() {
        let buttons = [
            {value:1,color:'grey'},
            {value:2,color:'grey'},
            {value:3,color:'grey'},
            {value:'+',color:'green'},
            {value:4,color:'grey'},
            {value:5,color:'grey'},
            {value:6,color:'grey'},
            {value:'-',color:'green'},
            {value:7,color:'grey'},
            {value:8,color:'grey'},
            {value:9,color:'grey'},
            {value:'*',color:'green'},
            {value:'C',color:'red'},
            {value:0,color:'grey'},
            {value:'=',color:'green'},
            {value:'/',color:'green'}
        ];
        let htmlButtons = buttons.map(button => {
            return <Grid.Column key={button.value} width={4} className="buttons-body">
                <Button inverted color={button.color} onClick={(e, button) => this.props.clickAction(button.children)} className="button_calculator">{button.value}</Button>
            </Grid.Column>
        });
        return <div >
            <Grid columns='equal' inverted padded>
                <Grid.Row color='black' textAlign='center'>
                    {htmlButtons}
                </Grid.Row>
            </Grid>
        </div>
    }
}

export default Buttons;

