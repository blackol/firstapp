import React, {Component} from 'react';
class Activite7 extends Component
  {
    constructor(props)
      {
        super(props);
        this.state = {
          etat : 0,
          login : "",
          passe : "",
          identite : {
          Nom : "...",
          Prenom : "..."
        }
        };
      }

    connexion(event)
      {
        const apiUrl = 'http://localhost/serviceR/?action=connexion&login='+this.state.login+'&passe='+this.state.passe;

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {

            if(data.retour=="OK")
              {
                this.setState({identite : data.identite, etat : 1});
              }
            else
              {
                this.setState({identite : {Nom : "Neant" , Prenom : "Neant"}, etat : 0});
              }
          });
      }

    deconnexion()
      {
        this.setState({identite : {Nom : "Neant" , Prenom : "Neant"}, etat : 0});
      }

    majlogin(event)
      {
        this.setState({login : event.target.value});
      }

    majpasse(event)
      {
        this.setState({passe : event.target.value});
      }

    render()
      {
        return (
          <div>
          <h1>Activité 7</h1>
          <br />
          {this.state.etat==0 && (
            <div>
            Login : <input type="text" value={this.state.login} onChange={(event) => {this.majlogin(event)}} />
            <br />
            Passe : <input type="password" value={this.state.passe} onChange={(event) => {this.majpasse(event)}} />
            <br />
            <button onClick={() => this.connexion()}>Connexion</button>
          </div>

          )}

          {this.state.etat==1 && (
            <div>
            Bonjour { this.state.identite.Prenom } { this.state.identite.Nom }
            <br />
            <button onClick={() => {this.deconnexion()}}>Deconnexion</button>
            </div>
          )}
          </div>
          )
      }
  }

export default Activite7;