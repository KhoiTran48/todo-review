import React, { Component } from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';
import TableContainer from './containers/TableContainer';

class App extends Component {
  render() {
    return (
        <div>
            <h1 className="mt text-center">Quản Lý Công Việc</h1>
            <hr/>
            <div className="container mt">
                <div className="row">
                    <FormContainer></FormContainer>
                    <TableContainer></TableContainer>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
