import React, { Component } from 'react';

class Welcome extends React.Component {
  render() {
    const {user} = this.props;

    return (
        <div className="text-center m">
            <span className="text-secondary font-weight-bold pl-1">
                Welcome {user}
            </span>,
            <a href="/" className="font-weight-bold text-primary pl-1">
                logout
            </a>
        </div>
    );
  }
}

export default Welcome;