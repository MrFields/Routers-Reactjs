import React from 'react'
import './pokemon.css'
import teamRocket from './../../assets/teamRocket.gif'
import Pokecard from '../Pokecard/Pokecard';
import Layout from '../Layout/Layout';

const Pokemon = ({ match, pokemons }) => {
  const { id } = match.params
  const pokemon = pokemons.find(p => p.id == id)
  return (
    <Layout>
    <div className='pokemon'>
    {
      pokemon ?
        (
          <Pokecard {...pokemon}></Pokecard>
        )
        :
        <img src={teamRocket} />
    }
  </div>
    </Layout>
  )
}
export default Pokemon