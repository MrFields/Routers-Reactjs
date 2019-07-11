import React, { Component } from 'react'
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pokemon from '../Pokemon/Pokemon'

export class Navegation extends Component {
   state = {
      isOpen:false
   }
    
   toggle = () => {
      this.setState({
         isOpen: !this.state.isOpen
       });
   }
   render() {
      return (
         <div>
         <Navbar color="light" light expand="md">
         <NavbarBrand href="/">Pokedex App</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <Link to="/">Home</Link>
             </NavItem>
           </Nav>
         </Collapse>
       </Navbar> 
         </div>
      )
   }
}
export default Navegation