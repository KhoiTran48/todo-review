import React, { Component } from 'react';

class TableItem extends Component {
    showStatus=(status)=>{
        if(status ==='0'){
            return <button onClick={this.toggleStatus} type="button" className="btn btn-info">Kích Hoạt</button>; 
        }
        return <button onClick={this.toggleStatus} type="button" className="btn btn-default">Ẩn</button>; 
    }
    toggleStatus=()=>{
        var {task, onUpdateTask}=this.props;
        if(task.status === '0'){
            task.status= '1';
        }else{
            task.status='0';
        }
        onUpdateTask(task);
    }
    updateTask=()=>{
        var {task, changeInput}=this.props;
        task.isDisplay=true;
        changeInput(task);
    }
    deleteTask=()=>{
        var {task, onDeleteTask}=this.props;
        onDeleteTask(task.id);
    }
  render() {
      var {task}=this.props;
    return (
        <tr>
            <td>{task.id}</td>
            <td>
                {task.name}
            </td>
            <td className="text-center">
                {this.showStatus(task.status)}
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={this.updateTask}>
                    <i className="fas fa-pen" ></i>Sửa
                </button>
                <button type="button" className="btn btn-danger ml" onClick={this.deleteTask}>
                    <i className="fas fa-trash-alt"></i>
                    Xóa
                </button>

            </td>
        </tr>
    );
  }
}

export default TableItem;
