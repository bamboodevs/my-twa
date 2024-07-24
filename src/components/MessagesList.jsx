import React from "react";
import PriBackBtn from "./PriBackBtn";

import "./MessagesList.css";

const UserProfile = () => {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>
            <div className="col-12 messages-frame my-2 d-flex align-items-center flex-wrap">
              <div className="col-12 ">
                <h6>Messages List</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
