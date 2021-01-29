import React, {Component} from 'react';
import Page1 from './Page1'
import Page2 from './Page2'

class Activite3 extends Component
  {
    constructor(props)
      {
        super(props);
        this.state={
          mavariablelocale : 0
        }
      }

    render()
      {
        return (
          <div>
          <h1>Activité 3</h1>

          <button onClick={ () => { this.setState({mavariablelocale: 1}) }}>
            P1
          </button>
          <button onClick={ () => { this.setState({mavariablelocale: 2}) }}>
            P2
          </button>
          <button onClick={ () => { this.setState({mavariablelocale: 3}) }}>
            P3
          </button>
          {this.state.mavariablelocale==1 && (
            <div>
            <h1>Page 1</h1>
            <Page1 />
            </div>
          )}
          {this.state.mavariablelocale==2 && (
            <div>
            <h1>Page 2</h1>
            <Page2 />
            </div>
          )}
          {this.state.mavariablelocale==3 && (
            <div>
            <h1>Page 3</h1>
            <span>Salut</span>
            </div>
          )}

          </div>
        );
      }
  }

export default Activite3;
