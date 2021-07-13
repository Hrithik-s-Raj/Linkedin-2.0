import React from "react";
import "./styles/Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import { selectUser } from "../features/counter/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className="sidebar_recentItems">
      #
      <span className="sidebar_hash">
        <p>{topic}</p>
      </span>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewed you</p>
          <p className="sidebar_statnum">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statnum">4,513</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("React.js")}
        {recentItems("Programming")}
        {recentItems("Software Engineering")}
        {recentItems("Design")}
        {recentItems("Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
