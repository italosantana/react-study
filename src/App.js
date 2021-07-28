import React from 'react'
import Repo from './componentes/img/repo-git.PNG'

export default function App(){
  const canal = () => {
    return ('CFB cursos')
  }
  function curso(){
    return 'Curso de React'
  }
  return (
    <section>
      <header>
        <p>{'Canal: '+  canal()}</p>
        <p>{curso()}</p>
      </header>
        <section>
          <img src={Repo} className="git-Repo" alt="Sumary"/>
        </section>
    </section>
    )
}