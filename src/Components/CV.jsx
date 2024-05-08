import { Aside } from "./Aside"
export const CV = () => {
    return (
        <>
            <Aside />
            <main className="mainCVContentContainer">
                <section className="personalDataAndOthersContainer">
                    <article className="personalData topCards">
                        <h3>Datos personales</h3>
                        <div>

                            <span> <img src="public\vite.svg" alt="" className="imgIcon" /> </span> <label htmlFor="Name">Julián Villar Cebrián</label>
                        </div>
                        <div>

                            <span> <img src="public\vite.svg" alt="" className="imgIcon" /> </span> <label htmlFor="location">Valencia</label>
                        </div>
                    </article>
                    <div className="emptyDiv"></div>
                    <article className="contactData topCards">
                        <h3>Contacto</h3>
                        <div>
                            <span> <img src="public\vite.svg" alt="" className="imgIcon" /> </span> <label htmlFor="email">julvillce@gmail.com</label>
                        </div>
                        <div>
                            <span> <img src="public\vite.svg" alt="" className="imgIcon" /> </span> <label htmlFor="phoneNumber">679 27 80 81</label>
                        </div>
                    </article>
                    <div className="emptyDiv"></div>

                    <article className="languajes topCards">
                        <h3>Idiomas</h3>
                        
                        <ul>
                            <li>Español - Nativo</li>
                            <li>Inglés - C1 (Cambridge Certified)</li>
                            <li>Valenciano - Nativo</li>
                        </ul>
                    </article>
                    <div className="emptyDiv"></div>

                    <article className="competences topCards">
                        <h3>Competencias</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>CSS & Tailwind</li>
                            <li>Swift & SwiftUI</li>
                            <li>SQL & MongoDB</li>
                            <li>Metodologías Agile</li>
                        </ul>
                    </article>
                    <div className="emptyDiv"></div>

                    <article className="otherData topCards">
                        <h3>Otros datos</h3>
                        <ul>
                            <li>Licencia de conducir: B</li>
                            <li>Vehículo propio</li>
                            <li>Disponibilidad para viajar</li>
                            <li>Incoroporación inmediata</li>
                        </ul>
                    </article>
                </section>
                <div className="secondPart">

                    <section className="workExperienceContainer">
                        <h2>Experiencia laboral</h2>
                        <p>
                            <span>QA Engineer</span> | GFT IT Technologies | Valencia | 06-2022 / 03-2024
                        </p>
                        <ul>
                            <li>
                                Implementación y desarrollo de Sistemas de Gestión Comercial para MAPFRE España como parte del
                                equipo de QA dentro de una metodología de desarrollo ágil.
                            </li>
                            <li>
                                Colaboración efectiva en equipos multidisciplinarios para mejorar la calidad del producto, incluyendo UX, FrontEnd, BackEnd, DevOps, POs y otros equipos de QA.
                            </li>
                            <li>
                                Planificación, análisis, diseño y ejecución de pruebas en ALM Octane.
                            </li>
                            <li>
                                Gestión y seguimiento de defectos identificados durante la ejecución de pruebas en ALM Octane y Jira.
                            </li>
                            <li>
                                Priorización y evaluación de defectos basados en su gravedad.
                            </li>
                            <li>
                                Realización de varios tipos de pruebas, incluyendo pruebas de integración, funcionales, de aceptación
                                y de regresión.
                            </li>
                            <li>
                                Diseño, creación y gestión de conjuntos de datos de prueba para equipos de QA y PO.
                            </li>
                            <li>
                                Validación de pruebas FrontEnd y BackEnd utilizando herramientas como Kafka, LENS, SQL y Mongo.
                            </li>
                        </ul>
                        <p>
                            <span>Web Developer Internship</span> | Clase10 | Valencia | 02-2022 - 06-2022
                        </p>
                        <ul>
                            <li>
                                Desarrollo de habilidades en JavaScript, JQuery y BootStrap para crear interfaces de usuario dinámicas
                                y atractivas.

                            </li>
                            <li>
                                Adquisición de experiencia en PHP con el framework Laravel y MySQL para el desarrollo de
                                aplicaciones web sólidas y escalables.
                            </li>
                            <li>
                                Utilización de servicios API-REST para integrar sistemas y facilitar el intercambio de datos entre
                                aplicaciones.
                            </li>
                        </ul>
                        <p>
                            <span>Computer Assistant</span> | TheBytesProject | Londonderry | 06-2018 - 07-2018
                        </p>
                        <ul>
                            <li>Computer maintenance</li>
                            <li>Software updates</li>
                            <li>Troubleshooting</li>
                        </ul>
                    </section>
                    <div className="emptyDiv"></div>

                    <div className="sidePositioning">

                        <section className="formacionContainer">
                            <h2>Formación</h2>
                            <p>
                                <span>Desarrollo de Aplicaciones Web</span> | IES Rodrigo Botet | Manises | 2019 - 2022
                            </p>
                            <p>
                                <span>Administración de Sistemas y Redes</span> | IES Conselleria | Valencia | 2019 - 2019
                            </p>

                        </section>

                        <section className="additionalInfoContainer">
                            <h2>Datos adicionales / Otras competencias</h2>
                            <ul>
                                <li>PHP & Laravel</li>
                                <li>GIT</li>
                                <li>CucumberJS</li>
                                <li>KarateJS</li>
                                <li>Java</li>
                            </ul>
                        </section>
                    </div>

                </div>
            </main>
        </>
    )
}