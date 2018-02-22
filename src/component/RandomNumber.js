import React, { Component } from 'react';
import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';

import Panel from './Panel';
import { shuffle, newArray, checkInput } from '../utils/randomNumberUtils'

const style = {
  panelContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  list: {
    height: '90vh',
    overflowY: 'scroll',
  },
  textFieldContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
}

export default class RandomNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generated: [],
      list: [],
      open: false,
      textField: {
        min: {
          errorText: '',
          value: 1,
        },
        max: {
          errorText: '',
          value: 10000,
        },
      },
      valid: true,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleSnackbar = this.handleSnackbar.bind(this);
  }

  handleChange(event) {
    this.setState(checkInput({ ...this.state }, event.target.value, event.target.id));
  }

  componentWillUpdate() {
    if (this.state.loading) {
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let numbers = this.state.generated;
    if (prevState.generated !== numbers && numbers.length > 0) {
      const list = numbers.map((num, index) => {
        return <div key={index}>{num}</div>
      });
      this.setState({
        list
      });
    }
  }

  handleGenerate(event) {
    if (this.state.valid) {
      this.setState({ loading: true, list: [] },
        () => {
          setTimeout(() => {
            let max = this.state.textField['max'].value;
            let min = this.state.textField['min'].value;
            let generated = shuffle(newArray(min, max));
            this.setState({
              generated,
              loading: false,
            });
          }, 0);
        });
    } else {
      this.handleSnackbar();
    }
  }

  handleSnackbar() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let max = this.state.textField['max'];
    let min = this.state.textField['min'];
    return (
      <div style={style.panelContainer}>
        <Panel>
          <div style={style.textFieldContainer}>
            <TextField
              defaultValue={min.value}
              errorText={min.errorText}
              floatingLabelText="Minimum Number:"
              id="min"
              onChange={this.handleChange}
            />
            <TextField
              defaultValue={max.value}
              errorText={max.errorText}
              floatingLabelText="Maximum Number:"
              id="max"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <RaisedButton
            label="Generate Random Numbers"
            onTouchTap={this.handleGenerate}
            primary={true}
          />

        </Panel>
        <Panel>
          <List style={style.list}>
            {
              this.state.loading
              ?
              "Loading..."              
              : 
              this.state.list
            }
          </List>
        </Panel>
        <Snackbar
          autoHideDuration={3000}
          message="Fill the fields correctly."
          onRequestClose={this.handleSnackbar}
          open={this.state.open}
        />
      </div>
    );
  }
}