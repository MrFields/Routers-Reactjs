import React, { Component } from 'react'
import './pokedex.css'
import Pokecard from './../Pokecard/Pokecard'

export class Pokedex extends Component {

  render() {
    return (
      <div className="pokedex">
        <div className="pokedex-cards">
          {this.props.pokemons.map((p) => (
            <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.exp} src={p.src} />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex