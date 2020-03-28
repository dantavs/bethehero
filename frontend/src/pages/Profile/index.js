import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, APAP</span>
                <Link to="incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button"><FiPower size={18} color="#e02041"></FiPower></button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>120</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>120</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>120</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>120</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3"></FiTrash2></button>
                </li>
            </ul>
        </div>
    )
}