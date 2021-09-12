import React, { Component } from 'react';
import './Form.css';
class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            phone: '',
            first_name: '',
            last_name: '',
            country: '',
            city: '',
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }
    const
    getState = () => {
        return this.state;
    }
    render () {
        return (
            <form className="demoForm">
                <h2>Sign up</h2>
                <div className="form-group">
                    <label htmlFor="email">Phone Number</label>
                    <input type="tel" className="form-control" value={this.state.phone} onChange={this.handleUserInput}
    name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" className="form-control" value={this.state.first_name} onChange={this.handleUserInput}
    name="first_name" />
                </div>
                <div className="form-group">
                    <label htmlFor="second_name">Second Name</label>
                    <input type="text" className="form-control" value={this.state.second_name} onChange={this.handleUserInput}
                           name="second_name" />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" value={this.state.country} onChange={this.handleUserInput}
                           name="country" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Last Name</label>
                    <input type="text" className="form-control" value={this.state.city} onChange={this.handleUserInput}
                           name="city" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign up
                </button>
            </form>
        )
    }
}
    export default Form;