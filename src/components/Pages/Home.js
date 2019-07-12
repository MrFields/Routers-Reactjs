import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';
import Layout from '../Layout/Layout';
import Render from '../axios_react/Render';
import Render2 from '../axios_react/Render2';

class Home extends Component {
   render() {
      return (

       <Layout>
       <div className="row">
           <div className="col-lg-12">   
              <Pokedex pokemons={this.props.pokemons}/>
              <Render/>
              <Render2/>
           </div>
        </div>
       </Layout>
      
      );
   }
}

export default Home;