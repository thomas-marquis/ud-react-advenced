import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import React, { Component } from 'react';

import * as actions from '../actions'

class Header extends Component {
    handleAuthenticationClick= () => {
        const {isLoggedIn, setAuthentication} = this.props

        setAuthentication(!isLoggedIn)
    }

    render () {
        const {isLoggedIn} = this.props

        return (
            <div>
                <ul className="nav nav-tabs bg-primary">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resources">Ressources</Link>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={this.handleAuthenticationClick}>
                            {isLoggedIn ? 'Déconnexion': 'Connexion'}
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.isLoggedIn
    }
}

export default connect(mapStateToProps,actions)(Header)