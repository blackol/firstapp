import { findByLabelText } from '@testing-library/react';
import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
            fontFamily: "Arial",
            height:"600px",
            
            
          };
        


        return (
          <div >

            <h1>Calculatrice

            </h1>

            <div style={mystyle}>
                <h1>Calculatrice ReactJS</h1>
                <br></br>
                <input></input>
                <br></br>
                <text>attention ne pas oublier le npm install </text>

                <div>
                  <Row around = "xs" >
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>1</button>
                    </Col>
                    
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>2</button>
                    </Col>
                    
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>3</button>
                    </Col>

                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>+</button>
                    </Col>
                    
                  </ Row >
                </div>

                <div>
                  <Row around = "xs" >
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>4</button>
                    </Col>
                    
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>5</button>
                    </Col>
                    
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>6</button>
                    </Col>

                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>-</button>
                    </Col>
                    
                  </ Row >
                </div>

                <div>
                  <Row around = "xs" >
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>7</button>
                    </Col>
                    
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>8</button>
                    </Col>
                    
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>9</button>
                    </Col>

                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>+</button>
                    </Col>
                    
                  </ Row >
                </div>


                <div>
                  <Row around = "xs" >
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>0</button>
                    </Col>
                    
                    < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                      <button>=</button>
                    </Col>
                    
                   
                  </ Row >
                </div>



            </div>

          
          </div>
          
        );
      }
  }




export default Calculette;

