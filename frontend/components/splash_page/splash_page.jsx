import React from "react";
import svg from "../svg/splash_svgs";

export default class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash">
        <div className="images-inner">
          {svg.triangle}
          {svg.triangle}
          {svg.triangle}
          {svg.dot}
          {svg.dot}
          {svg.dot}
          {svg.dot}
          {svg.dot}
          {svg.circle}
          {svg.circle}
          {svg.circle}
          {svg.x}
          {svg.x}
          {svg.x}
          {svg.square}
          {svg.square}
          {svg.square}
        </div>
      </div>
    )
  }
}