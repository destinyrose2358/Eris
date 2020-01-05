import React from 'react';
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
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
    let { formType } = this.props;
    let linkOff = formType === "Welcome Back!" ?
      <p>Need an account? <Link to="/signup" >Register</Link></p> : <Link to="/login">Already have an account?</Link>;
    let emailInput = formType === "Welcome Back!" ?
      undefined:
      <>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={this.state.email}
        onChange={this.update("email")} />
      </>;
    let demoLogin = formType === "Welcome Back!" ? <button onClick={ (e) => {e.preventDefault(); this.props.processForm({username: "Flerpen", password: "hunter2"})}}>Demo Login</button> :
      undefined;
    return (
      <div className="modal-session">
        <div className="logo">
          <img src="https://i.ibb.co/RP6f9XK/eris-logo.gif" alt="Eris Logo"/>
          <h1>ERIS</h1>
        </div>
        <div className="session-form">
          <h1>{ formType }</h1>
          <ul>
            { errorLis }
          </ul>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={ this.state.username }
              onChange={ this.update("username") }/>
            { emailInput }
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.update("password")} />
              <input type="submit" value={ formType === "Welcome Back!" ? "Login" : "Continue" }/>
              { !!demoLogin ? <p>or</p> : undefined }
              { demoLogin }
          </form>
          { linkOff }
        </div>
      </div>
    )
  }
};