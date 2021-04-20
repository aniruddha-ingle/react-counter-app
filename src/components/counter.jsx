import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <h2>Counter Number {counter.id}</h2>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <span
          style={{ fontSize: 30 }}
          className={this.badgeClassGetter(counter)}
        >
          {this.formatCount(counter)}
        </span>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.renderTags(counter)}
      </div>
    );
  }
  renderTags(counter) {
    if (counter.tags.length === 0 && counter.value === 0) {
      return <p>Please Add Tags!</p>;
    } else if (counter.value < 0) {
      return <p>Stay Positive Man!</p>;
    }
    return (
      <div>
        <span style={{ fontSize: 25 }}>
          There are {counter.tags.length} Tags!
        </span>
        <ul>
          {counter.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  badgeClassGetter(counter) {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(counter) {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;

//a component that owns the piece of the state should be the one modifying it
//this component is controlled by the counters component
