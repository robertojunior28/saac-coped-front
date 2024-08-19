import React from "react";
import "./Login.css";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../main/SessionProvider";
import { showErrorMessage, showSuccessMessage } from "../../componentes/Toastr";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  madeLogin = () => {
    this.context
      .login(this.state.username, this.state.password)
      .then((user) => {
        if (user) {
          showSuccessMessage("Bem-vindo(a) " + this.state.username);
          this.props.history.push("/school-year");
        } else {
          showErrorMessage("Login inválido!");
        }
      })
      .catch((error) => {
        console.log("🚀 ~ file: Login.js:26 ~ Login ~ error:", error);
        showErrorMessage(
          "Ocorreu um erro! Autenticação sendo processada:",
          error
        );
      });
  };

  render() {
    return (
      <div className="login-container">
        <label htmlFor="username" className="username">Matrícula Suap</label>
        <input
          className="username"
          type="text"
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <label htmlFor="password" className="password" id="password-label">Senha</label>
        <input
          className="password"
          type="password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <button
          type="button"
          className="login-button"
          onClick={this.madeLogin}
        >
          Login
        </button>
      </div>
    );
  }
}

Login.contextType = AuthContext;
export default withRouter(Login);

