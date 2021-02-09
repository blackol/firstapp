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
            fontFamily: "Arial",
            height:"500px",
            width:"400px",
          };
        


        return (
          <div >

            <h1>Calculatrice

            </h1>

            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col xs={0} />

                        <div style={mystyle}>
                          <h1>Calculatrice ReactJS</h1>
                          <br></br>
                          <input></input>
                      <br></br>
                      

                      <div>
                        <Row around = "xs" >
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="1">1</button>
                          </Col>
                          
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="2">2</button>
                          </Col>
                          
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="3" >3</button>
                          </Col>

                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="+">+</button>
                          </Col>
                          
                        </ Row >
                      </div>
                      

                      <div>
                        <Row around = "xs" >
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="4">4</button>
                          </Col>
                          
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="5">5</button>
                          </Col>
                          
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="6">6</button>
                          </Col>

                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="-">-</button>
                          </Col>
                          
                        </ Row >
                      </div>


                      <div>
                        <Row around = "xs" >
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="7" >7</button>
                          </Col>
                          
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="8">8</button>
                          </Col>
                          
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="9" >9</button>
                          </Col>

                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="+" >+</button>
                          </Col>
                          
                        </ Row >
                      </div>


                      <div>
                        <Row around = "xs" >
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="0" >0</button>
                          </Col>
                          
                          < Col  xs = {2}  sm = {2} md = {2} lg = {0}> 
                            <button value="=" >=</button>
                          </Col>
                        </ Row >
                      </div>



                  </div>


                </Row>
              </Col>
            </Row>

           

          
          </div>
          
        );
      }
  }




export default Calculette;

