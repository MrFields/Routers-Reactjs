import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';
import Layout from '../Layout/Layout';
import Render from '../axios_react/Render';

class Home extends Component {
   render() {
      return (

       <Layout>
       <div className="row">
           <div className="col-lg-12">   
              <Pokedex pokemons={this.props.pokemons}/>
              <Render/>
           </div>
        </div>
       </Layout>
      
      );
   }
}

export default Home;