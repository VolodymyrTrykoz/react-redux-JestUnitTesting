import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createComment} from 'actions';

class CommentBox extends Component {

    state = {
        comment: ''
    }

    handleChange = e => {
        this.setState({
            comment: e.target.value 
        })
    }

    formSubmit = e => {
        e.preventDefault();
        const {createComment} = this.props;
        const {comment} = this.state;
        createComment(comment);

        this.setState({
            comment: ''
        })
    }
    
    render(){
        const { comment } = this.state
        return (
            <form onSubmit={this.formSubmit}>
                <h4>Add a Comment</h4>
                <textarea 
                    value={comment}
                    onChange={this.handleChange}
                />
                <div>
                    <button>Submit a comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, {createComment} )(CommentBox);
