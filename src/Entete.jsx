import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge'
import SommairePanier from './SommairePanier';
import { useState } from 'react';

function Entete(props){
        return(
        <header className="Entete">
            <div>Signets</div>
            <ul className="navPrincipale"> 
            </ul>
            <ul className="navUtil">
                <li>
                    <div>
                        <h3>Daniel Fiola</h3>
                    </div>
                </li>
                <li>
                    <img src="logo-tim.png"></img>
                </li>
            </ul>
        </header>
    );
}

export default Entete
