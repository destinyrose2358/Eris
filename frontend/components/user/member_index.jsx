import React from "react";
import MemberItemContainer from "./member_item_container";

export default class MemberIndex extends React.Component {
  render() {
    if (!this.props.memberIds) return <div></div>;
    let memberLis = this.props.memberIds.map(memberId => (
      <MemberItemContainer memberId={memberId} key={memberId} />
    ));
    return (
      <aside className="member-index">
        <ul className="scroll-visible">
          {memberLis}
        </ul>
      </aside>
    )
  }
}