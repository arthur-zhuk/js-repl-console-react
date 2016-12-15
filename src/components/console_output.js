/* eslint-disable */
import React, { Component } from 'react';

const ConsoleOutput = (props) => {
    const commands = props.prevCommands.map(function(cmd, id) {
      try {
        if (cmd.includes("alert") || cmd.includes("console"))
          cmd ="alert or console commands are not allowed.";
        eval(cmd);
        return <OutRow key={id} result={cmd} />
      } catch (err) {
        return ( 
          <span key={id}>
            {(cmd +  ' | EVAL ERROR' )}
            <br />
          </span>
        )
      } 
    });

    return (
      <div className=''>
        {commands}
      </div>
    );
};

class OutRow extends Component {
  render() {
    return (
      <div className=''>
        {this.props.result}
        <br />
        =>&nbsp;{eval(this.props.result)}
      </div>
    )
  }
}

export default ConsoleOutput;
