import React, { Component } from 'react'
import { useState } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ''
        }
    };

    handleName = (e) => {
        this.setState({ name: e.target.value })
    
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value })
        
        
    }
    
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
        
    }

    Submit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    };


    render() {
        return (
            <div>
                <form onSubmit={this.Submit}>
                    <label> Name:
                        <input type='text' onChange={this.handleName} value={this.state.name} name='name' />
                    </label>
                    <label> Email:
                        <input type='email' onChange={this.handleEmail} value={this.state.email} name='email' />
                    </label>
                    <label> password:
                        <input type='password' onChange={this.handlePassword} value={this.state.password} name='password' />
                    </label>
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}
