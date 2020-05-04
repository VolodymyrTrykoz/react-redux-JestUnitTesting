import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createComment, fetchComments} from 'actions';
import requireAuth from 'components/require-auth';

class CommentBox extends Component {
    state = {comment: ''};

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
    };
    
    render(){
        const { comment } = this.state
        return (
            <>
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
                <div>
                    <button className ="fetch-comments"
                        onClick={this.props.fetchComments}
                    >
                        Fetch comments
                    </button>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps, {createComment, fetchComments})(requireAuth(CommentBox));
