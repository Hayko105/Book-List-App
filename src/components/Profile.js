import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import bookList from '../data/bookList'
import {
    SET_USER_LOGOUT
} from "../redux/reducer";


class Profile extends React.Component {

    handleLogout = (e) => {
        this.props.dispatch({
            type: SET_USER_LOGOUT,
            payload: {
                logout: false
            }
        })
    };

    render() {
        const { isLogin, username } = this.props;

        if (!isLogin) {
            return <Login />
        }

        return (
            <div>
                <div className="header">
                    <h3>Hi, {username}</h3>
                    <span className="logout" onClick={this.handleLogout}>Logout</span>
                </div>
                <div className="content">
                    <div className="books">
                        {bookList.map((book) => (
                            <div className="books__item">
                                <h2>{book.name}</h2>
                                <p>{book.description}</p>
                                <blockquote>{book.author}</blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (allState) => ({
    isLogin: allState.isLogin,
    username: allState.user,
});

export default connect(mapStateToProps)(Profile);