import React from "react";
import NavbarItem from "./NavbarItem";
import { AuthConsumer } from "../main/SessionProvider";
import styles from "./style/NavBar.module.css";

function NavBar(props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <h1 style={{color: 'white', fontSize: '62px', fontFamily: 'serif'}}>SAAC</h1>
          <p>Sistema de Avaliação de Alunos pela COPED</p>
        </div>

        <NavbarItem
          render={props.isAuthenticated}
          href="/login"
          onClick={props.logout}
          label="Sair"
        />
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
