import React, { Component } from 'react';
import axios from 'axios';

class Render extends Component {
   state= {
      persons:[]
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/api/todo`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
   render() {
      return (
         <ul>
             { this.state.persons.map(person => <li>{person.title}</li>)}
         </ul>
      );
   }
}

export default Render;