import React from 'react';
import { Redirect } from "react-router-dom";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }
  
  render() {
    let errorLis = this.props.errors.map((error, idx) => (
      <p key={ idx }>{ error }</p>
    ));
    return (
      <div className="session-form">
        <h1>{ this.props.formType }</h1>
        <ul>
          { errorLis }
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <label>
            Username:
            <input
              type="text"
              value={ this.state.username }
              onChange={ this.update("username") }/>
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")} />
          </label>
          <input type="submit" value={ this.props.formType }/>
        </form>
      </div>
      
    )
  }
};