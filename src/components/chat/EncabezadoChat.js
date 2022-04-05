import React from "react";
import {
  Notifications,
  Room,
  PeopleAlt,
  Send,
} from "@material-ui/icons";

const EncabezadoChat = ({nombreCanal}) => {
  return (
    <div className="chatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {nombreCanal}
        </h3>
      </div>
      <div className="chatHeader__right">
        <Notifications />
        <Room />
        <PeopleAlt />

        <Send/>
      </div>
    </div>
  );
};

export default EncabezadoChat;
