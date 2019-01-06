import React, { Component } from 'react';

class Table extends Component {
    constructor(props){
        super(props);
    }
    changeSearch = (e)=>{
        this.props.changeSearch(e.target.name, e.target.value)
    }
  render() {
    return (
        <div className="row mt">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <div className="input-group">
                                <input type="text" className="form-control" id="exampleInputAmount" placeholder="Search" onChange={this.changeSearch} name="search"/>
                            </div>
                        </td>
                        <td>
                            <select className="custom-select" defaultValue='-1' onChange={this.changeSearch} name="status">
                                <option value="-1">Tất cả</option>
                                <option value="0">Kích Hoạt</option>
                                <option value="1">Ẩn</option>
                            </select>
                        </td>
                        <td className="text-center">
                            {/* <button type="button" className="btn btn-warning">
                                <i className="fas fa-pen"></i>Sửa
                            </button>
                            <button type="button" className="btn btn-danger ml">
                                <i className="fas fa-trash-alt"></i>
                                Xóa
                            </button> */}

                        </td>
                    </tr>
                    {this.props.children}
                </tbody>
                
            </table>

        </div>
    );
  }
}

export default Table;
