import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  state = {
    title: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      title: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />

          <button type="submit"> Create Artist </button>
        </form>
      </div>
    );
  }
}

export default connect(null)(PostForm);

// 1. run a fetch (async to db/api)
// 2. get some resp back
// 3. do something with resp, (vanilla js: we created a new obj in the class, in react we use thunk to send it to the reducer)
// 4. rerender/ nav to wherever we want
