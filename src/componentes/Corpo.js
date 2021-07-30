import React from 'react'
import Dados from './componentes/imgs/Dados'
import '/app.css'

export default function Corpo(){
    const cnl = () =>{
        return 'CFB cursos'
    }
    const yt = 'yt/cfbcurso'
    const crs = 'ReactJs'
    const somar=(v1, v2) => {
        return v1 + v2
    }
    const destaque = {
        color: '#00f',
        fontSize: '3em'
    }
    return(
        <section className='caixa'>
            <h2 style={{color: '#f00', fontSize: '5em'}}>curso de React</h2>
            <p style={destaque}>Inscreva-se no canal</p>
            <p className='texto'>Ative o sininho e clique no joinha</p>
            <Dados canal={cnl} youtube='yt/cfbcursos' curso= 'reactJS' somar={somar}/>
            <a href='#' target='_blank'>CFP Cursos</a>
        </section>
    );
}