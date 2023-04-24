/// Class Components
// basically, a class is a blue print for creating an object with a property with keys and methods.
// when it comes to the constructor, it basically initializes the class object with arguements and those arguements are attached to the "this."
// which is a syntax to refer the arguements to this class.


import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

// in the example above, a constructor also initializes a prop


////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import { useState } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [{ id: 1, name: 'Daniel', description: 'You can be the best software engineer ever' },
                { id: 2, name: 'John', description: 'EY' },
                { id: 3, name: 'Maxwell', description: 'Python' }]





        }
    }

    render() {
        return (
            <div>
                {this.state.persons.map((person, index) => {
                    return (
                        <div key={index}>
                            <h2>Name: {person.name}</h2>
                            <h2>Description : {person.description}</h2>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}




