import React,{ Component }from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
//import { render } from '@testing-library/react';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1, tags: [1] },
      { id: 2, value: 0, tags: [] },
      { id: 3, value: 1, tags: [1] },
      { id: 4, value: 2, tags: [1, 2] },
    ],
  };
  //controlled components do not have their own state
  handleDelete = (counterId) => {
    console.log("Hello", counterId);
    const filteredArray = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: filteredArray });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      c.tags = [];
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    counters[index].tags.push(counters[index].value);
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    counters[index].tags.pop();
    this.setState({ counters });
  };
  render()
  {
    return (
      <React.Fragment>
        <NavBar totalCounters= {this.state.counters.filter(c => c.value>0).length} />
        <main className="container">
          <Counters
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onReset={this.handleReset}
              counters = {this.state.counters}
          />

        </main>
      </React.Fragment>  
    );
  }
}

export default App;
