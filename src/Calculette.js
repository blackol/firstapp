import { findByLabelText } from '@testing-library/react';
import React, {Component} from 'react';
import "./Calculatricecss.css";
class Calculette extends Component
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

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };


        return (
          <div >

            <h1>Calculatrice</h1>

            <div style={mystyle}>
                <h2>ok</h2>
                <br></br>
                <p>
                    uibiubpubpububuigbg
                    oubipubpiubpiub
                    ivefgbpdgubgdb
                    i9bpiubpubpuiojb
                </p>
            </div>

          
          </div>
          
        );
      }
  }




export default Calculette;

