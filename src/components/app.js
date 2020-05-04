import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import CommentBox from 'components/comment-box';
import CommentList from 'components/comment-list';
import {connect} from 'react-redux';
import {logIn, logOut} from 'actions/index';

class App extends Component {

    renderButton(){
        const {logIn, logOut} = this.props;
        return this.props.isLogged ? (
            <button onClick={logOut}>Log out</button>
        ) : (
            <button onClick={logIn}>Log in</button>
    )}

    renderHeader(){
        return (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/posts'>Post a comment</Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }

    render () {
        return (
            <div>
                {this.renderHeader()}
                <Route path='/posts' component={CommentBox}/>
                <Route path='/' exact component={CommentList}/>      
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged
    }
}

export default connect(mapStateToProps, {logIn, logOut})(App);
