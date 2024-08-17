import React from "react";
import "./HomePage.css";
import "bootswatch/dist/minty/bootstrap.css";

export default class HomePage extends React.Component {
  state = {
    isLoggedIn: false, // Inicialmente, o usuário não está logado
  };

  componentDidMount() {
    this.verifyLogged();
  }

  login = () => {
    this.props.history.push("/login");
  };

  verifyLogged() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(
      "🚀 ~ file: HomePage.js:22 ~ HomePage ~ verifyLogged ~ user:",
      user
    );

    if (user !== null) {
      this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }
  }

  render() {
    return (
      <div className="HomePage1">
        <h1>Sejam Bem Vindo(a)s!</h1>
        <h2>SAAC</h2>
        <h3>
          O SAAC é um sistema voltado para funcionários da COPED do
          IFPB - Campus Monteiro, tendo como objetivo facilitar a viazualização 
          do aproveitamento academico do aluno.
        </h3>
        <br />

        {this.state.isLoggedIn ? null : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.login}
          >
            Login
          </button>
        )}
        
      </div>
    );
  }
}
