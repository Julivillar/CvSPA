import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <aside className='asideLinksLogoContainer'>
        <nav>
          <img src="src\assets\react.svg" alt="logo" />
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">CV</a></li>
            <li><a href="">Proyectos</a></li>
            <li><a href="">Contacto</a> </li>
          </ul>
        </nav>
      </aside>
      <main className='mainContentContainer'>
        <section className='nameTitleSection'>
          <div>
            <h1>Julián Villar</h1>
            <h2>Front-End & iOS Developer</h2>
          </div>
          <div>

            <img src="8707972a759975b07d188308c948cc27.jpg" alt="" />
          </div>
        </section>
        <section className='aboutMeSection'>
          <article>
            <h3>About me</h3>
            <p>Ingeniero de QA Junior experimentado con experiencia en desarrollo de aplicaciones web. Experto en
              testing de software para garantizar su calidad. Jugador de equipo dedicado con un fuerte compromiso para
              entregar productos de alta calidad.</p>
            <p>
              Actualmente estoy en busca de nuevos desafios, que me aporten a mi experiencia
            </p>
            <p>
              Mis objetivos son
            </p>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
