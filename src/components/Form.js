import React, { Component } from 'react';
import {TASK_FORM} from './../constants/Form';
class Form extends Component {
    saveTask=(e)=>{
        e.preventDefault();
        var {taskForm} = this.props;
        if(taskForm.id !== 0){
            this.props.onEditTask(taskForm);
        }else{
            this.props.onAddTask(taskForm);
        }
        taskForm=TASK_FORM
        this.props.changeInput(taskForm);
    }
    changeInput = (e)=>{
        var {taskForm} = this.props;
        var target = e.target;
        var name= target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        taskForm[name]= value;
        this.props.changeInput(taskForm);
    }
    cancel =()=>{
        var {taskForm} = this.props;
        taskForm=TASK_FORM
        this.props.changeInput(taskForm);
    }
    toggleForm = ()=>{
        var tmp = TASK_FORM;
        tmp['isDisplay'] =false;
        this.props.changeInput(tmp);
    }
  render() {
      var {taskForm} = this.props;
    return (
        
        <div className={taskForm.isDisplay ? `col-xs-4 col-sm-4 col-md-4 col-lg-4` : 'hide'}>
            <div className="card">
                <div className="card-body">

                    <form action="" method="POST" className="form-horizontal" role="form" onSubmit={this.saveTask}>
                        <div className="form-group">
                            {taskForm.id === 0 ? 'Thêm Công Việc': 'Sửa Công Việc'}
                            <i className="fas fa-backspace text-right" onClick={this.toggleForm} ></i>
                        </div>

                        <div className="form-group">
                            <label>Tên</label>
                            <input type="text" className="form-control" name="name" required
                             value={taskForm.name} onChange={this.changeInput}/>
                        </div>
                        <div className="form-group">
                            <label>Trạng Thái</label>
                            <select className="form-control" name="status" value={taskForm.status} onChange={this.changeInput}>
                                <option value='0'>Kích Hoạt</option>
                                <option value='1'>Ẩn</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-2">
                                <button type="submit" className="btn btn-success" >Lưu Lại</button>
                                <button type="button" className="btn btn-warning ml" onClick={this.cancel}>Hủy Bỏ</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
  }
}

export default Form;
