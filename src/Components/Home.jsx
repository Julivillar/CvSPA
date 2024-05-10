import { Aside } from "./Aside"
export const Home = () => {
  return (
    <>
      <Aside/>

      <main className='mainHomeContentContainer mainContentContainer'>
        <section className='nameTitleSection'>
          <div>
            <h1>Julián Villar</h1>
            <h2>Front-End & iOS Developer</h2>
          </div>
          <div>

            <img src="8707972a759975b07d188308c948cc27.jpg" alt="" />
          </div>
        </section>
        <section className='aboutMeHomeSection'>
          <article>
            <h3>About me</h3>
            <p>Ingeniero de QA Junior experimentado con experiencia en desarrollo de aplicaciones web. Experto en
              testing de software para garantizar su calidad. Jugador de equipo dedicado con un fuerte compromiso para
              entregar productos de alta calidad.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut, labore, unde voluptas illum magni tempora deserunt similique qui blanditiis itaque iste soluta magnam quia dicta quidem voluptatem rerum iure.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad doloribus atque porro, iusto vel accusamus laborum, neque earum minima temporibus aut magnam odit cumque iure nam itaque at totam.
            </p>
          </article>
        </section>
      </main>

    </>
  )
}
