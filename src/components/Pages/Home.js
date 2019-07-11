import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';
import Layout from '../Layout/Layout';

class Home extends Component {
   render() {
      return (

       <Layout>
       <div className="row">
           <div className="col-lg-12">   
              <Pokedex pokemons={this.props.pokemons}/>
           </div>
        </div>
       </Layout>
      
      );
   }
}

export default Home;