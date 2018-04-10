//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {buttonAction, localSave} from './actions';
import 'semantic-ui-css/semantic.min.css';
import {Grid, Input, Button} from 'semantic-ui-react';
import './index.css';
import Buttons from './components/Buttons';

class App extends Component<{}> {
    render() {
        return (
            <div className="App">
                <Grid columns='equal' divided inverted padded>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column>
                            <Input value={this.props.inputValue} action={<Button content='Save' onClick={this.props.localSave} />} fluid />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column width={16}>
                            <Buttons clickAction={this.props.btnAction}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default connect(
    state => ({
        ...state,
    }),
    dispatch => ({
        btnAction: (button) => {
            dispatch(buttonAction(button));
        },
        localSave: () => {
            dispatch(localSave());
        },
    })
)(App);

