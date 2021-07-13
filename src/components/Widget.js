import React from "react";
import "./styles/Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widget_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget_header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Hrithik s raj is Back", "999 readers")}
      {newsArticle("Hrithik s raj Test 2", "1024 readers")}
      {newsArticle("Hrithik s raj Test 3", "1024 readers")}

      {newsArticle("Hrithik s raj Test 4", "1024 readers")}

      {newsArticle("Hrithik s raj Test 5", "1024 readers")}

      {newsArticle("Hrithik s raj Test 6", "1024 readers")}

      {newsArticle("Hrithik s raj Test 7", "1024 readers")}
    </div>
  );
}

export default Widget;
