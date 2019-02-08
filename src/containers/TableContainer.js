import React, { Component } from 'react';
import {connect} from 'react-redux';
import TableItem from './../components/TableItem';
import Search from './../components/Search';
import Table from './../components/Table';
import {TASK_FORM} from './../constants/Form';

import * as Action from './../actions/Action';
class TableContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            search:'',
            status:'-1'
        }
    }
    componentWillMount=()=>{
        this.props.onFetchTask();
    }
    changeSearch=(name, value)=>{
        this.setState({
            [name]:value
        })
    }
    showTaskList=(taskList)=>{
        var result=null;
        var searchStr=this.state.search;
        var status = this.state.status;
        if(searchStr){
            taskList=taskList.filter((item)=>{
                if(item.name.toLowerCase().indexOf(searchStr.toLowerCase()) >=0 ){
                    return true;
                }
            })
        }
        if(status !== '-1'){
            taskList=taskList.filter((item)=>{
                if(item.status === status){
                    return true;
                }
            })
        }
        
        result= taskList.map((item, key)=>{
            return (
                <TableItem
                    task={item}
                    key={key}
                    changeInput={this.props.changeInput}
                    onUpdateTask={this.updateTask}
                    onDeleteTask={this.deleteTask}
                />
            )
        })
        return result;
    }
    updateTask=(task)=>{
        var {taskForm, onUpdateTask, changeInput} = this.props;
        onUpdateTask(task);
        if(taskForm.id === task.id){
            taskForm.status= task.status;
            changeInput(taskForm);
        }
    }
    deleteTask=(id)=>{
        var {taskForm, onDeleteTask, changeInput} = this.props;
        onDeleteTask(id);
        if(taskForm.id === id){
            taskForm=TASK_FORM
            changeInput(taskForm);
        }
    }
  render() {
      var {taskList, taskForm, changeInput} = this.props;
    return (
        <div className={taskForm.isDisplay ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <Search
                changeInput={changeInput}
                taskForm={taskForm}
                changeSearch={this.changeSearch}
            />
            <Table 
                changeSearch={this.changeSearch}
            >
                {this.showTaskList(taskList)}
            </Table>
        </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        taskForm: state.FormReducer,
        taskList: state.TableReducer
    }
}

const mapDispatchToProps=(dispatch, props)=>{
    return {
        onUpdateTask: (task)=>{
            dispatch(Action.EDIT_TASK(task))
        },
        changeInput: (taskForm)=>{
            dispatch(Action.CHANGE_INPUT(taskForm))
        },
        onDeleteTask: (id)=>{
            dispatch(Action.DELETE_TASK(id))
        },
        onFetchTask: (id)=>{
            dispatch(Action.FETCH_TASK())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
