import React from "react";
import { Room, PeopleAlt, Send } from "@material-ui/icons";
import { Link } from "react-router-dom";

const EncabezadoChat = ({ nombreCanal }) => {
  return (
    <div className="chatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {nombreCanal}
        </h3>
      </div>
      <div className="chatHeader__right">
        <Link to="/profile">
          <PeopleAlt />
        </Link>
        <Link to="/*">
          <Send />
        </Link>
      </div>
    </div>
  );
};

export default EncabezadoChat;
