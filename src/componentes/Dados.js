import React from 'react'

export default function Dados(props){

    return(
        <section>
                <p>Canal: {props.canal()}</p>
                <p>Youtube: {props.youtube}</p>
                <p>Cursos:{props.curso}</p>
                <p>{'A soma de:' + n1 + 'com ' + n2 + 'é igual ' + props.somar(n1, n2)}</p>
        </section>
    );
}