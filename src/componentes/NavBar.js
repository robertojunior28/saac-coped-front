import React from "react";
import NavbarItem from "./NavbarItem";
import { AuthConsumer } from "../main/SessionProvider";

function NavBar(props) {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container">
        <a href="/" className="navbar-brand">
          SAAC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavbarItem
              render={!props.isAuthenticated}
              href="/login"
              label="Login"
            />
            <NavbarItem
              render={props.isAuthenticated}
              href="/login"
              onClick={props.logout}
              label="Sair"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <AuthConsumer>
    {(context) => (
      <NavBar isAuthenticated={context.isAuthenticated} logout={context.end} />
    )}
  </AuthConsumer>
);
