import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount(){
            this.shouldRedirect();
        }
    
        componentDidUpdate(){
            this.shouldRedirect();
        }
    
        shouldRedirect(){
            !this.props.isLogged && this.props.history.push('/'); 
        }
    
        render(){
            return (
                <ChildComponent {...this.props}/>
            )
        }
    }

    const mapStateToProps = state => {
        return {
            isLogged: state.isLogged
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
}