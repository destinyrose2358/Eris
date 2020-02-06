import { connect } from "react-redux";
import { createMessage } from "../../actions/message_actions";
import MessageForm from "./message_form";

const msp = (state, { channel }) => {
    return {
        members: channel.member_ids ? channel.member_ids.map(member_id => state.entities.users[member_id]) : [{username: ""}]
    }
}

const mdp = (dispatch, { channel }) => {
    return {
        action: (message) => dispatch(createMessage(channel.id, message)),
        formType: "create",
        postAction: () => {}
    };
};

const CreateMessageFormContainer = connect(msp, mdp)(MessageForm);

export default CreateMessageFormContainer;