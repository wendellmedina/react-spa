import React, { Component } from 'react';

class Login extends React.Component {
  render() {
    const {user} = this.props;

    return (
        <div className="text-center m">
            <h1 className="text-primary">Login</h1>
        </div>
    );
  }
}

export default Login;