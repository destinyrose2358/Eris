import React from "react";

export default class CreateServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      icon: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state).then(this.props.resetModal);
  }

  render() {
    return (
      <form className="modal-content" onSubmit={ this.handleSubmit }>
        <input
          type="text"
          onChange={ this.update("title") }
          value={ this.state.title } />
        <input
          type="text"
          onChange={ this.update("icon") }
          value={ this.state.icon }
          />
        <input type="submit" value="Create New Server"/>
      </form>
    )
  }
}