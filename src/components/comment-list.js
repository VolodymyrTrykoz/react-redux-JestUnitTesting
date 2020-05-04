import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
  render(){
    const {comments} = this.props;
    return (
      <>
        <h4>Comments list</h4>
        <ul>
        {
          comments.map(el => (
          <li key={el}>{el}</li>
          )) 
        }
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentList);
