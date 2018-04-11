//@flow
import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";

class Buttons extends Component<{}> {
    render() {
        const NUMBERS_COLOR = "blue";
        let buttons = [
            { value: 1, color: NUMBERS_COLOR },
            { value: 2, color: NUMBERS_COLOR },
            { value: 3, color: NUMBERS_COLOR },
            { value: "+", color: "green" },
            { value: 4, color: NUMBERS_COLOR },
            { value: 5, color: NUMBERS_COLOR },
            { value: 6, color: NUMBERS_COLOR },
            { value: "-", color: "green" },
            { value: 7, color: NUMBERS_COLOR },
            { value: 8, color: NUMBERS_COLOR },
            { value: 9, color: NUMBERS_COLOR },
            { value: "*", color: "green" },
            { value: "C", color: "red" },
            { value: 0, color: NUMBERS_COLOR },
            { value: "=", color: "green" },
            { value: "/", color: "green" }
        ];
        const buttonsElements = buttons.map(button => {
            return (
                <Grid.Column key={button.value} width={4} className="buttons-body">
                    <Button
                        color={button.color}
                        onClick={(e, button) => this.props.clickAction(button.children)}
                        className="button_calculator"
                    >
                        {button.value}
                    </Button>
                </Grid.Column>
            );
        });
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Row textAlign="center">{buttonsElements}</Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Buttons;
