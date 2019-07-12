import React, { Component } from 'react';
import axios from 'axios';

class Render2 extends Component {
   state = {
      "title": "",
    }
  
    handleChange = event => {
      this.setState({ title: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const todo = {
        title: this.state.title
      };
  
      axios.post(`http://localhost:3001/api/todo`, todo )
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }

   render() {
      return (
         <div>
         <form onSubmit={this.handleSubmit}>
         <label>
           Title:
           <input type="text" name="title" onChange={this.handleChange} />
         </label>
         <button type="submit">Add</button>
       </form>
         </div>
      );
   }
}

export default Render2;