import React from "react";
import "./SchoolYear.css";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../main/SessionProvider";

class SchoolYear extends React.Component {

  render() {
    return (
      <div className="cont">
        <header>
          <fieldset className="set02">
            <br/><br/><br/><br/><br/>
            <div>listar anos</div>
          </fieldset>
        </header>
      </div>
    );
  }
}
SchoolYear.contextType = AuthContext;
export default withRouter(SchoolYear);
