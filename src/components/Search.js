import React, { Component } from 'react';
import {TASK_FORM} from './../constants/Form';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            search: ''
        }
    }
    toggleForm = ()=>{
        var {taskForm} = this.props;
        var tmp = TASK_FORM;
        tmp['isDisplay'] = !taskForm['isDisplay'];
        this.props.changeInput(tmp);
    }
    changeSearch = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    search=()=>{
        this.props.changeSearch(this.state.search)
    }
  render() {
    return (
        <div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                    <button type="button" className="btn btn-primary" onClick={this.toggleForm}>
                        <span>
                            <i className="fas fa-plus"></i>
                            Thêm Công Việc
                        </span>
                    </button>

                </div>
            </div>

            <div className="row mt">

                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                    <div className="input-group">
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Nhập từ khóa" name="search" onChange={this.changeSearch}/>
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-primary" onClick={this.search}>
                                <span>
                                    <i className="fab fa-searchengin"></i>
                                    Tìm
                                </span>
                            </button>
                        </span>
                    </div>

                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span>
                                Sắp Xếp
                            </span>
                        </button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" href="#">
                                <i className="fas fa-sort-alpha-down"></i>
                                Tên A-Z
                            </button>
                            <button className="dropdown-item" href="#">
                                <i className="fas fa-sort-alpha-up"></i>
                                Tên Z-A
                            </button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" href="#">Trạng Thái Kích Hoạt</button>
                            <button className="dropdown-item" href="#">Trạng Thái Ẩn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Search;
