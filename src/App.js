import React from 'react';
import Table from './components/Table/Table'
import './App.css';

class App extends React.Component {
  state = {
    data: [
      {'Name': 'Abc', 'Age': 15, 'Location': 'Bangalore'},
      {'Name': 'Def', 'Age': 43, 'Location': 'Mumbai'},
      {'Name': 'Uff', 'Age': 30, 'Location': 'Chennai'},
      {'Name': 'Ammse', 'Age': 87, 'Location': 'Delhi'},
      {'Name': 'Yysse', 'Age': 28, 'Location': 'Hyderabad'}
    ]
  }

  render() {
    return (
      <div className="App">
        <Table data={this.state.data}/>
      </div>
    );
  }
}

export default App;
