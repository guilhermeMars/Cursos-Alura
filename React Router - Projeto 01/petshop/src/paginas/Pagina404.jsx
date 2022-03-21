import React from 'react';
import Imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'
import { Link } from 'react-router-dom';

function Pagina404(){
    return(
        <main className='container flex flex--centro flex--coluna' >
            <img className='doguito-imagem' src={Imagem} alt="Ilustação doguito" />
            <p className='naoencontrado--texto'>Epa! Essa página não existe :/ <br/>Verifique a Url ou acesse nossa</p>
            <Link to="/" className='link--home'>Home</Link>
        </main>
    )
}

export default Pagina404;
