import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from './../components/Form';

import * as Action from './../actions/Action';
class FormContainer extends Component {
  render() {
    return (
        <Form 
            onAddTask={this.props.onAddTask} 
            onEditTask={this.props.onEditTask} 
            taskForm={this.props.taskForm}
            changeInput={this.props.changeInput}
        />
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        taskForm: state.FormReducer,
    }
}

const mapDispatchToProps=(dispatch, props)=>{
    return {
        onAddTask: (taskForm)=>{
            dispatch(Action.ADD_TASK_REQUEST(taskForm))
        },
        onEditTask: (taskForm)=>{
            dispatch(Action.EDIT_TASK_REQUEST(taskForm))
        },
        changeInput: (taskForm)=>{
            dispatch(Action.CHANGE_INPUT(taskForm))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
