import React from 'react'
import './pokecard.css'
import {Link} from "react-router-dom"
const Pokecard = ({ id, name, type, exp, src }) => {
  return (
    <div className="pokecard">
      <h1 className="pokecard-title">{name}</h1>
      <div className="pokecard-image">
      <Link to={`/pokemon/${id}`}>
      <img src={src} alt={name} />
      </Link>
      </div>
      <div className="pokecard-data">Type: {type}</div>
      <div className="pokecard-data">EXP: {exp}</div>
    </div>
  )
}

export default Pokecard