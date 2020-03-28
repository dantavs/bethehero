import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg }></img>

                <form>
                    <h1>Faça seu longon</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                </form>
                <a href="register">
                    <FiLogIn size={16} color="#e02041"/>
                    Não tenho cadastro
                </a>
            </section>
 
            <img src={heroesImg}></img>
        </div>
    );
}
