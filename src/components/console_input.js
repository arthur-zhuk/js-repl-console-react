import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import ConsoleOutput from './console_output';
var copyHistoryStack = [], tempHistoryStack = [];
var itemPushed = '';

class ConsoleInput extends Component {
  constructor(props) {
    super(props);
    
    this.onInputChange = this.onInputChange.bind(this);
    this.showHistory = this.showHistory.bind(this);
    this.pushExecution = this.pushExecution.bind(this);

    this.state = { 
      iValue: '', 
      outputHistory: ['5 + 5', '10+10', 'var a = [1, 2, 3]; a[0] + a[2]']
    };
    copyHistoryStack = copyHistoryStack.concat(this.state.outputHistory); 
  }

  onInputChange(e) {
    this.setState({ iValue: e.target.value });
  }

  pushExecution(popStack, pushStack) {
    itemPushed = popStack.pop();
    pushStack.push(itemPushed);
    this.setState({ iValue: itemPushed }); 
  }
  
  showHistory(e) {
    switch(e.keyCode) {
      //on up arrow press 
      case 38:
        e.preventDefault();
        if (copyHistoryStack.length === 0) {
          break;
        }
        this.pushExecution(copyHistoryStack, tempHistoryStack);
        break;
      //on down arrow press
      case 40: 
        e.preventDefault();
        if (tempHistoryStack.length === 0) {
          break;
        }
        this.pushExecution(tempHistoryStack, copyHistoryStack);
        break;
      //on enter press
      case 13:
        e.preventDefault();
        e.persist();
        if (e.target.value !== '') {
          copyHistoryStack.push(e.target.value);
        }
        this.setState(
          {outputHistory: this.state.outputHistory.concat([e.target.value]), iValue: ''},
          function() {
            copyHistoryStack = [];
            copyHistoryStack = copyHistoryStack.concat(this.state.outputHistory);
          }
        );
        tempHistoryStack = []
        break;
      default:
        this.onInputChange(e);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ConsoleOutput prevCommands={this.state.outputHistory} />
        </div>
        <div className="row">
          <form>
            <FormGroup>
              <FormControl autoFocus type='text' onKeyDown={this.showHistory} onChange={this.onInputChange} value={this.state.iValue} placeholder='' />
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
}

export default ConsoleInput;
