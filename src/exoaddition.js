import React, {Component} from 'react';
class Calculette1 extends Component
  {
    constructor()
      {
        super();

        this.state = {
          nombre1 : "0",
          nombre2 : "0",
          operateur : "+",
          resultat : "0"
        };
      }

    maj1(event)
      {
        this.setState({nombre1 : event.target.value})
      }

    maj2(event)
      {
        this.setState({nombre2 : event.target.value})
      }

    maj3(event)
      {
        this.setState({operateur : event.target.value});
      }

    calcul()
      {
        if(this.state.nombre1.length!=0&&this.state.nombre2.length!=0)
          {
            console.log(this.state.nombre1+this.state.operateur+this.state.nombre2);
            this.setState({resultat : eval(this.state.nombre1+this.state.operateur+this.state.nombre2)});
          }
      }

    render()
      {
        return (
          <div>
          <h1>Calculette 1</h1>
          <br />

          <input type="number" value={this.state.nombre1} onChange={(event) => {this.maj1(event)}} />
          <select value={this.state.operateur} onChange={(event) => {this.maj3(event)}}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
          <input type="number" value={this.state.nombre2} onChange={(event) => {this.maj2(event)}} />
          <button onClick={() => {this.calcul()}}>=</button>
          <span>{this.state.resultat}</span>
          </div>
        );
      }
  }

export default Calculette1;

