//@flow
import React, {Component} from 'react';
import {Grid, Button} from 'semantic-ui-react'


class Buttons extends Component<{}> {
    render() {
        const numbersColor = 'blue';
        let buttons = [
            {value:1,color:numbersColor},
            {value:2,color:numbersColor},
            {value:3,color:numbersColor},
            {value:'+',color:'green'},
            {value:4,color:numbersColor},
            {value:5,color:numbersColor},
            {value:6,color:numbersColor},
            {value:'-',color:'green'},
            {value:7,color:numbersColor},
            {value:8,color:numbersColor},
            {value:9,color:numbersColor},
            {value:'*',color:'green'},
            {value:'C',color:'red'},
            {value:0,color:numbersColor},
            {value:'=',color:'green'},
            {value:'/',color:'green'}
        ];
        let htmlButtons = buttons.map(button => {
            return <Grid.Column key={button.value} width={4} className="buttons-body">
                <Button color={button.color} onClick={(e, button) => this.props.clickAction(button.children)} className="button_calculator">{button.value}</Button>
            </Grid.Column>
        });
        return <div >
            <Grid columns='equal' padded>
                <Grid.Row  textAlign='center'>
                    {htmlButtons}
                </Grid.Row>
            </Grid>
        </div>
    }
}

export default Buttons;

