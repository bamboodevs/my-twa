import React from "react";
import PriBackBtn from "./PriBackBtn";

import "./UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>
            <div className="col-12 userProfile-frame my-2 d-flex align-items-center flex-wrap">
              <div className="col-12 ">
                <h6>User Profile</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
