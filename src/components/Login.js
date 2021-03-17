import React from 'react';
import { connect } from "react-redux";
import {
    SET_USER_TYPE
} from "../redux/reducer";

class Login extends React.Component {
    state = {
        isError: false,
        errorMsg: 'You must fill in all fields',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isError: false,
        });

        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username !== '' && password !== '') {
            this.props.dispatch({
                type: SET_USER_TYPE,
                payload: {
                    username: username,
                    password: password
                }
            });
        } else {
            this.setState({
                isError: true,
            });
        }
    };

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                    <h4>Login</h4>
                    <p>Test user (Hayko/123456)</p>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    {this.state.isError ? (<p>{this.state.errorMsg}</p>) : ('')}
                    <button type="submit">Log In</button>
                </form>
            </div >
        )
    }
}

export default connect()(Login);