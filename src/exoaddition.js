import React, {Component} from 'react';
class Exoaddition extends Component
  {
    constructor()
      {
        super();

        this.state = { 
            variable : 0,
            nom : "",
            pass : ""
        };
      }

    maj(event)
      {
        this.setState({nom : Number( event.target.value)})
      }

    maj2(event)
      {
        this.setState({pass : Number(event.target.value)})
      }

    render()
      {
        return (
          <div>
          <h1>Addition</h1>
         
          <br />

          
          <input type="text" value={this.state.nom} onChange={(event) => {this.maj(event)}} />

          <button onClick={() => {this.setState((state) => {return {variable : this.maj + this.maj2};
})}}>+</button>
         

          <input type="text" value={this.state.pass} onChange={(event) => {this.maj2(event)}} />
          <br />



          {this.state.nom + this.state.pass }
          <br></br>
          <span>Resultat : {this.state.variable}</span>
          </div>
        );
      }
  }

export default Exoaddition;