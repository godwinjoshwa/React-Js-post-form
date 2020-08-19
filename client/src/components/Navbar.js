import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light sticky-top bg-dark d-flex">
                    <i class="fas fa-user-secret"></i>
                   
                    <NavLink exact to="/members">
                    <button type="button" class="btn btn-warning">Members</button>
                    </NavLink>
                </nav>
            </div>
        )
    }
}

export default Navbar
