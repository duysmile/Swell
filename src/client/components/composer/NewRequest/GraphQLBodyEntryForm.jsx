import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../actions/actions';
import GraphQLVariableEntryForm from './GraphQLVariableEntryForm.jsx';

const mapStateToProps = store => ({
  newRequestBody: store.business.newRequestBody,
});

const mapDispatchToProps = dispatch => ({
  setNewRequestBody: (requestBodyObj) => {
    dispatch(actions.setNewRequestBody(requestBodyObj));
  },
});

class GraphQLBodyEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {

    const arrowClass = this.state.show ? 'composer_subtitle_arrow-open' : 'composer_subtitle_arrow-closed';

    const bodyContainerClass = this.state.show ? 'composer_bodyform_container-open' : 'composer_bodyform_container-closed';

    return (
      <div >
        <div className='composer_subtitle' onClick={this.toggleShow} style={this.props.stylesObj}>
          <img className={arrowClass} src='https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_192x192.png'>
          </img>
          Body
        </div>

        <textarea
          value={this.props.newRequestBody.bodyContent}
          className={'composer_textarea gql ' + bodyContainerClass }
          style={{ 'resize': 'none' }} //tried making top-margin/topMargin -10px but it didn't care
          type='text'
          placeholder='Body'
          rows={10}
          onChange={(e) => {
            this.props.setNewRequestBody({
              ...this.props.newRequestBody,
              bodyContent: e.target.value
            })
          }}
          ></textarea>
          <GraphQLVariableEntryForm />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphQLBodyEntryForm);