import React, {Component} from 'react';
class Activite2 extends Component
  {
    constructor()
      {
        super();

        this.state = { variable : 0,
          nom : "",
          pass : ""
        };
      }

    maj(event)
      {
        this.setState({nom : event.target.value})
      }

    maj2(event)
      {
        this.setState({pass : event.target.value})
      }

    render()
      {
        return (
          <div>
          <h1>Activité 2</h1>
          <span>Ma valeur : {this.state.variable}</span>
          <br />

          <form>
          <input type="text" value={this.state.nom} onChange={(event) => {this.maj(event)}} />
          <br />

          <input type="password" value={this.state.pass} onChange={(event) => {this.maj2(event)}} />
          <br />
</form>
<button onClick={() => {this.setState((state) => {

return {variable : state.variable + 1};

})}}>OK</button>

          <div>{this.state.nom}</div>
          <div>{this.state.pass}</div>
          </div>
        );
      }
  }

export default Activite2;